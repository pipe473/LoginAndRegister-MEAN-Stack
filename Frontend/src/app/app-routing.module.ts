import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {TasksComponent} from './components/tasks/tasks.component';
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component';
import {SignupComponent} from './components/signup/signup.component';
import {SigninComponent} from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: TasksComponent
  },
  {
    path: 'private',
    component: PrivateTasksComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
