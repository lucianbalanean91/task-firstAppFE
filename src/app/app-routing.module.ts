import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UserRolesComponent } from './components/users-role/users-role.component';

const routes: Routes = [
  { path :'', component: HomeComponent ,
  canActivate: [AuthGuard],
  children: 
  [
    { path: 'tasks', component: TasksComponent},
    { path: 'users',component: UsersComponent},
    { path: 'userRoles',component: UserRolesComponent},
    { path: 'comments', component: CommentsComponent}

]},
{
  path:'login', component : LoginComponent
},
{
  path:'register', component : RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
