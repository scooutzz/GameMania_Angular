import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosComponent } from './views/dispositivos/dispositivos.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "jogos", component: JogosComponent },
  { path: "dispositivos", component: DispositivosComponent },
  { path: "login", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
