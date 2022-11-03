import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aluguel';

  public mostrarMenu: boolean = false

  constructor(private authService: AuthService){

  }

  ngOnInit(): void{
    this.authService.mostrarMenuEmitter.subscribe(

      mostrar => this.mostrarMenu = mostrar

    )
  }
}
