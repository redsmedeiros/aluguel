import { Usuario } from './usuario'
import { UsuariosServiceService } from './../usuarios-service.service';
import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { error } from 'console';

import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AletModalService } from 'src/app/shared/alet-modal.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios$!: Observable<Usuario[]>

  public error$ = new Subject<boolean>()

  public busca!: Usuario[]

  public ativo!: boolean

  public searchterm!: string



  constructor(private usuarioService:UsuariosServiceService, private alertService: AletModalService) {



   }

  ngOnInit(): void {

  this.onRefresh()



  }

  onRefresh(): void{
    this.usuarios$ = this.usuarioService.list().pipe(
      catchError( error => {
        console.log(error)
        //this.error$.next(true)
        this.handleError()
        return empty()
      })
    )
  }

  handleError(){

    this.alertService.showAlertDanger("Erro ao carregar")

  }


}
