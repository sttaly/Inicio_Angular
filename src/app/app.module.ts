import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalTablePostComponent } from './principal/principal-table-post/principal-table-post.component';
import { PrincipalTableUsersComponent } from './principal/principal-table-users/principal-table-users.component';
import { DetailsComponent } from './principal/details/details.component';
import { DetailsPerfilComponent } from './principal/details-perfil/details-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PrincipalTablePostComponent,
    PrincipalTableUsersComponent,
    DetailsComponent,
    DetailsPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
