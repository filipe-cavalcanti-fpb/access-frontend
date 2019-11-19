import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { FormRoomComponent } from './form-room/form-room.component';
import {MatCardModule, MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { RegisterRoomComponent } from './register-room/register-room.component';


@NgModule({
  declarations: [FormRoomComponent, RegisterRoomComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class RoomModule { }
