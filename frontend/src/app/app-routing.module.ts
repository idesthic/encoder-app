import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {EncoderComponent} from "./components/encoder/encoder.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignInComponent,
    data: {
      title: 'Encoder App',
    }
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {
      title: 'Sign-in',
    }
  },
  {
    path: 'encoder',
    component: EncoderComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Encoder',
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
