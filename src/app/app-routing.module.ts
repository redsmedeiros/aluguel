import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]},
  {path: 'usuarios/novo-usuario', component: UsuariosFormComponent, canActivate:[AuthGuard]},
  {path: 'editar-usuario/:id', component: UsuariosFormComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
