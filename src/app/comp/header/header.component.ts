import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuVisivel: boolean = false;
  tamanhoTela: any;

  constructor() { }

  ngOnInit(): void {
    this.tamanhoTela = window.innerWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize() {
    this.tamanhoTela = window.innerWidth;
  }
 
  mostrarMenu() {
    this.menuVisivel = !this.menuVisivel
  }



}