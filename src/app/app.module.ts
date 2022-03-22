import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { DispositivosComponent } from './views/dispositivos/dispositivos.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './comp/header/header.component';
import { FooterComponent } from './comp/footer/footer.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JogosComponent,
    DispositivosComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
