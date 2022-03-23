import { Component, OnInit } from '@angular/core';
import { UserCadastro } from 'src/app/models/user';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  userModel = new UserCadastro("", "", "", "")

  onSubmit() {
    console.log(this.userModel)
  }

  

 

}
