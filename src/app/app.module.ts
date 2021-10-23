import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CreateContatoComponent } from './components/create-contato/create-contato.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeContatosComponent } from './components/lista-de-contatos/lista-de-contatos.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { SobreComponent } from './components/sobre/sobre.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaDeContatosComponent,
    ContatoComponent,
    CreateContatoComponent,
    LoginComponent,
    CadastrarComponent,
    HomeComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
