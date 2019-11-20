import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterRoomDTO} from '../models/register-room.DTO';
import {Observable} from 'rxjs';
import {TypeRoomModel} from '../models/type-room.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private BASE_URL = environment.BACK_END_API_BASE_URL;

  constructor(private http: HttpClient) { }

  public registerRoom(roomDTO: RegisterRoomDTO): Observable<any> {
    return null;
  }

  public consult(): Observable<Array<TypeRoomModel>> {
    const headers = new HttpHeaders({ Authorization: 'Basic YWRtaW46YWRtaW4='});
    return this.http.get<Array<TypeRoomModel>>(`${this.BASE_URL}types-room`, {headers});
  }

}
