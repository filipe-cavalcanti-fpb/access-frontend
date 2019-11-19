import {Component, OnInit} from '@angular/core';
import {RegisterRoomDTO} from '../models/register-room.DTO';
import {ActionEnum} from '../../shared/models/action.enum';

@Component({
  selector: 'app-register-room',
  templateUrl: './register-room.component.html',
  styleUrls: ['./register-room.component.css']
})
export class RegisterRoomComponent implements OnInit {

  public registerAction = ActionEnum.REGISTER;

  constructor() { }

  ngOnInit() {
  }

  public register(roomDTO: RegisterRoomDTO) {
    console.log(roomDTO);
  }

}
