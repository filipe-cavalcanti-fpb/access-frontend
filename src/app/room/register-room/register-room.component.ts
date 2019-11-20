import {Component, OnInit} from '@angular/core';
import {RegisterRoomDTO} from '../models/register-room.DTO';
import {ActionEnum} from '../../shared/models/action.enum';
import {TypeRoomModel} from '../models/type-room.model';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-register-room',
  templateUrl: './register-room.component.html',
  styleUrls: ['./register-room.component.css']
})
export class RegisterRoomComponent implements OnInit {

  public registerAction = ActionEnum.REGISTER;

  public typesRoom: Array<TypeRoomModel>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.consultTypesRoom();
  }

  public register(roomDTO: RegisterRoomDTO) {
    console.log(roomDTO);
  }

  public consultTypesRoom() {
    this.roomService.consult().subscribe(typesRoom => this.typesRoom = typesRoom, error => console.log('erro'));
  }

}
