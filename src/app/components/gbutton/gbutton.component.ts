import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gbutton',
  templateUrl: './gbutton.component.html',
  styleUrls: ['./gbutton.component.scss']
})
export class GbuttonComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(userInfo => {
      this.user = userInfo;
    });
  }

  doGoogleLogin(){
    this.auth.doGoogleLogin().then(() => this.router.navigate(['/private']));
  }

  doGoogleLogout(){
    this.auth.doLogout().then(() => this.router.navigate(['/private']));
  }
}
