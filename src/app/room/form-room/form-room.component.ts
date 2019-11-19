import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypeRoomModel} from '../models/type-room.model';
import {ActionEnum} from '../../shared/models/action.enum';
import {RegisterRoomDTO} from '../models/register-room.DTO';
import {RoomDTO} from '../models/room.DTO';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css']
})
export class FormRoomComponent implements OnInit {

  @Input() typesRomm: Array<TypeRoomModel>;

  @Input() action: ActionEnum;

  @Input() roomDTO: RoomDTO;

  @Output() roomEmitter: EventEmitter<RegisterRoomDTO>;

  private formRoom: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomEmitter = new EventEmitter<RegisterRoomDTO>();
  }

  ngOnInit() {
    this.formRoom = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required]
    });
    if (this.roomDTO) {
      this.parseFormRoom();
    }
  }

  public submit(): void {
    this.roomEmitter.emit(this.formRoom.value);
  }

  public parseFormRoom() {
    this.formRoom.get('name').setValue(this.roomDTO.name);
    this.formRoom.get('type').setValue(this.roomDTO.type.id);
  }

}
