import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { libOverloadLib04Routes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(libOverloadLib04Routes)],
})
export class LibOverloadLib04Module {}
