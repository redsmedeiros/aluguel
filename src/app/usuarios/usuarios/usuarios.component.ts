import { Usuario } from './usuario'
import { UsuariosServiceService } from './../usuarios-service.service';
import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { error } from 'console';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

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

  public bsModalRef!: BsModalRef

  constructor(private usuarioService:UsuariosServiceService, private modalService: BsModalService) {



   }

  ngOnInit(): void {

  this.onRefresh()



  }

  onRefresh(): void{
    this.usuarios$ = this.usuarioService.list().pipe(
      catchError( error => {
        console.log(error)
        this.error$.next(true)
        return empty()
      })
    )
  }

  handleError(){

    this.bsModalRef = this.modalService.show(AlertModalComponent)

    this.bsModalRef.content.type = 'danger'

    this.bsModalRef.content.message = 'Erro ao carregar curso'

  }


}
