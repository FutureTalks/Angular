import { Component } from '@angular/core';
import { Rights } from './models/enum/Rights';
import { MenuItem } from './models/MenuItem';
import { Observable, of } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { ContentService } from './services/content/content.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'futuretalks';
  authInfo: firebase.User;
  userRights: Rights;
  menuItems: MenuItem[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, afAuth: AuthService, contentService: ContentService, userService: UserService) {
    afAuth.getAuthState().subscribe(userInfo => this.authInfo = userInfo);

    this.userRights = Rights.User;
    let obs = (user: firebase.User) => {
      var o = of(Rights.User);
      if (user){
        return userService.getUserRights(user.uid).pipe(map(u => {
          if(u){ 
            return u.rights
          }
          return 0;
        }));
      }
      else{     
        return o;
      }
    }
    
    let menu = rights => {
      return contentService.getMenuItemsForRights(rights).pipe(map(items => items.sort((a, b) => a.order - b.order)));
    };

    afAuth.getAuthState().subscribe(user => obs(user).subscribe(right => {
      this.userRights = right;
      menu(this.userRights).subscribe(items => this.menuItems = items);
    }));

  }

}
