import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressesComponent } from './addresses/addresses.component';

const routes: Routes = [
  {
    path: '',
    component: AddressesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AddressesRoutingModule { }