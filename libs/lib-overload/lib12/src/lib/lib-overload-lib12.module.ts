import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libOverloadLib12Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(libOverloadLib12Routes)],
})
export class LibOverloadLib12Module {}
