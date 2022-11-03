import { Usuario } from './login/usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  public mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router:Router) { }

  fazerLogin(usuario:Usuario){

    if( usuario.nome == 'rods@rods.com' && usuario.senha == '123'){

      this.usuarioAutenticado = true

      this.mostrarMenuEmitter.emit(true)

      this.router.navigate(['/'])

    }else{

      this.usuarioAutenticado = false

      this.mostrarMenuEmitter.emit(false)
    }
  }

  usuarioEstaAutenticado(): boolean{
    return this.usuarioAutenticado
  }
}
