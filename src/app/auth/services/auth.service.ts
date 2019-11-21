import { Injectable } from '@angular/core';
import {SignInDTO} from '../models/sign-in.DTO';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {TokenDTO} from '../models/token.DTO';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(signInDTO): Observable<any> {
    return this.http.post(`${environment.BACK_END_API_BASE_URL}login`, signInDTO);
  }
}
