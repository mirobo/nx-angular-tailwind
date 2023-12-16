import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libOverloadLib03Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(libOverloadLib03Routes)],
})
export class LibOverloadLib03Module {}
