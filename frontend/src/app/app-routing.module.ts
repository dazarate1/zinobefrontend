import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './task/create-user/create-user.component';
import { CapitalBancoComponent } from './capital-banco/capital-banco.component';
import { AprovedRequestComponent } from './task/aproved-request/aproved-request.component';
import { RejactedRequestComponent } from './task/rejacted-request/rejacted-request.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';


const routes: Routes = [
  {
  path:'',
  component: LoginComponent,
  pathMatch: 'full'
  },
  {
    path:'tasks',
    component:ListTaskComponent,
    },
  
  {
    path:'Crear solicitud',
    component: CreateTaskComponent,
    },
  {
    path:'capitalBanco',
    component: CapitalBancoComponent,
    },
    {
      path:'Aprobadas',
      component: AprovedRequestComponent,
      },
      {
        path:'Rechazadas',
        component: RejactedRequestComponent,
        },
        {
          path:'Login',
          component: LoginComponent,
          },
          {
            path:'Signup',
            component: SignupComponent,
            }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
