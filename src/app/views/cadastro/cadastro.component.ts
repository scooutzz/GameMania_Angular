import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/models/cadastro';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  constructor(private router: Router, private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  cadastroModel = new Cadastro()

  mensagem = "";


  onSubmit() {
    console.log("Moledo:", this.cadastroModel);

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if(this.cadastroModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Caractér(es) inválido(s)"

        return;
      }
    });

    this.cadastroService.cadastro(this.cadastroModel).subscribe( (response) => {
      this.mensagem = "Cadastro realizado com sucesso!"
      this.router.navigateByUrl("/")
    } )
  }

  

 

}
