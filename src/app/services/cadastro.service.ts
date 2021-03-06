import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from 'src/app/models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  url = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) {}
  
  cadastro(user: Cadastro): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: "response"
    })
  }
}
