import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignInDTO} from '../models/sign-in.DTO';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(loginDTO: SignInDTO): Observable<any> {
    return this.http.post(`${environment.BACK_END_API_BASE_URL}/login`, loginDTO).pipe();
  }
}
