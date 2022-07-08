import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DetalhesGameComponent } from './components/pages/detalhes-game/detalhes-game.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewGameComponent } from './components/pages/new-game/new-game.component';
import { PaginaInicialComponent } from './components/pages/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register game', component: CadastroComponent },
      { path: 'list/:id', component: DetalhesGameComponent },
      { path: 'games/new', component: NewGameComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
