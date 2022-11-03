import { Usuario } from './usuario';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {

    this.authService.fazerLogin(this.usuario)

  }

}
