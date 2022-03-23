import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  // Variavel criada para armazenar o endereço da API
  url = "https://localhost:3001/noticias"

  // Insere a deprendencia HttpClient
  constructor(private httpClient: HttpClient) { }

  // Variavel que armazena as configurações dos headers da requisição
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Método GET, que vai trazer os cadastros da API
  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
  }

}
