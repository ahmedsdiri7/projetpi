import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {EtudiantListComponent} from './etudiant-list/etudiant-list.component';
import {CreateEtudiantComponent} from './create-etudiant/create-etudiant.component';
import {SearchEtudiantComponent} from './search-etudiant/search-etudiant.component';
import {UpdateEtudiantComponent} from './update-etudiant/update-etudiant.component';
import {EtudiantDetailsComponent} from './etudiant-details/etudiant-details.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home.component';
import {PopupComponent} from './popup/popup.component';
import {CommentairesComponent} from './commentaires/commentaires.component';

const routes: Routes = [
    // { path: '', redirectTo: 'etudiants', pathMatch: 'full' },
    { path: 'etudiants', component: EtudiantListComponent },
    { path: 'add', component: CreateEtudiantComponent },
    { path: 'update/:id', component: UpdateEtudiantComponent},
    { path: 'details/:id', component: EtudiantDetailsComponent},
    { path: 'findbyage', component: SearchEtudiantComponent },
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'popup', component: PopupComponent},
    {path: '', component: HomeComponent},
    {path: 'addComment', component: CommentairesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
