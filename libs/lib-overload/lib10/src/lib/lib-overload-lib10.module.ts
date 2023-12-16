import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libOverloadLib10Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(libOverloadLib10Routes)],
})
export class LibOverloadLib10Module {}
