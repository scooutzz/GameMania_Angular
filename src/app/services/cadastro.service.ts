import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from 'src/app/models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url = "https://localhost:3001/cadastro"

  constructor(private httpClient: HttpClient) {}

  

}
