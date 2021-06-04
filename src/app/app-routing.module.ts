import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { PrincipalTablePostComponent } from './principal/principal-table-post/principal-table-post.component';
import { PrincipalTableUsersComponent } from './principal/principal-table-users/principal-table-users.component';
import { DetailsComponent } from './principal/details/details.component';
import { DetailsPerfilComponent } from './principal/details-perfil/details-perfil.component';

const routes: Routes = [
  	{	path: '', component: PrincipalComponent},
	{ 	path: 'posts', component: PrincipalTablePostComponent },
	{ 	path: 'usuarios', component: PrincipalTableUsersComponent },
	{ 	path: 'details/:variable', component: DetailsComponent },
	{ 	path: 'details-perfil/:variable', component: DetailsPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
