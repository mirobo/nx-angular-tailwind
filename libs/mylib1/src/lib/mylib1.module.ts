import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mylib1Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mylib1Routes)],
})
export class Mylib1Module {}
