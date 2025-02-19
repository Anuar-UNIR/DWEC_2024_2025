import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://dummyjson.com/auth/';

  constructor() { }

  login(user: IUser): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", user));
  }
  
}
