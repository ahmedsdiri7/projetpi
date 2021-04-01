import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { SearchEtudiantComponent } from './search-etudiant/search-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService} from './shared/http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { CommentairesComponent } from './commentaires/commentaires.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEtudiantComponent,
    EtudiantDetailsComponent,
    EtudiantListComponent,
    SearchEtudiantComponent,
    UpdateEtudiantComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FileUploadComponent,
    HomeComponent,
    SearchfilterPipe,
    CommentairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
