import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mylib2Mylib2Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mylib2Mylib2Routes)],
})
export class Mylib2Mylib2Module {}
