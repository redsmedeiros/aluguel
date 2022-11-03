import { environment } from './../../environments/environment';
import { Observable, delay } from 'rxjs';
import { Usuario } from './../login/usuario';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  private readonly API = `${environment.API}usuarios`

  teste: any

  constructor(private http:HttpClient) { }

  list(){


    return this.http.get<Usuario[]>(this.API).pipe(
      delay(2000),
      tap(console.log)
    )

  }


}
