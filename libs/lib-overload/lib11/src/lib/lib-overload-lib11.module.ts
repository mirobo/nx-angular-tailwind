import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libOverloadLib11Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(libOverloadLib11Routes)],
})
export class LibOverloadLib11Module {}
