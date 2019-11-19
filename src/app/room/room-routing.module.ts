import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormRoomComponent} from './form-room/form-room.component';
import {RegisterRoomComponent} from './register-room/register-room.component';


const ROOM_ROUTES: Routes = [
  {path: 'cadastrar-sala', component: RegisterRoomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ROOM_ROUTES)],
  exports: [RouterModule]
})
export class RoomRoutingModule {
}
