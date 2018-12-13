import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  async get(){
      let dogResponse = await this.http.get<{status:string, message:string}>("https://dog.ceo/api/breeds/image/random").toPromise();
      if (dogResponse.status==="success"){
        return dogResponse.message;
      }
      return "";
  }
}
