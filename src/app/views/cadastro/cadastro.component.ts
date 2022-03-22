import { Component, OnInit } from '@angular/core';
import { UserCadastro } from 'src/app/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new UserCadastro("", "", "", "")

  onSubmit() {
    console.log(this.userModel)
  }


}
