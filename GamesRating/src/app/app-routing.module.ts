import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DetalhesGameComponent } from './components/detalhes-game/detalhes-game.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: PaginaInicialComponent},
  {path: 'register game', component: CadastroComponent},
  {path: 'list/:id', component: DetalhesGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
