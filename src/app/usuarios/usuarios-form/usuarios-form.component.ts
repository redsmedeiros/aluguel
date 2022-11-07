import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {

  public form!: FormGroup

  public setores: any = [
    {sigla: "Adm", nome: "Administrativo"},
    {sigla: "Fin", nome: "Financeiro"},
    {sigla: "Est", nome: "Estoque"},
    {sigla: "Ven", nome: "Vendas"},
  ]

  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

    this.form = this.fb.group(
      {
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        senha: [null, [Validators.minLength(3)], Validators.maxLength(10)],
        setor: [null, [Validators.required]],
        ativo: [null, [Validators.required]]

      }
    )
  }

  retornar(): void{

    this.router.navigate(['/usuarios'])

  }

 onSubmit(): void{

    console.log(this.form.value)

    if(this.form.valid){

      console.log('ok')

    }

 }

 onCancel(): void{

 }

}
