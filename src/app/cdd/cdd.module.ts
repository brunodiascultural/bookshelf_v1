import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule
  ]
})
export class CddModule { }