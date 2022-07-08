import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DetalhesGameComponent } from './components/pages/detalhes-game/detalhes-game.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PaginaInicialComponent } from './components/pages/pagina-inicial/pagina-inicial.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewGameComponent } from './components/pages/new-game/new-game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoggedHomeComponent } from './components/pages/logged-home/logged-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroComponent,
    DetalhesGameComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NewGameComponent,
    LoggedHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
