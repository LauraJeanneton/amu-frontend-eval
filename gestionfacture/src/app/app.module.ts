import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GestionFactureComponent } from 'src/app/gestion-facture.component';
import { TasksService } from './api/tasks.service';
import { GestionFacturePageComponent } from "src/app/pages/gestion-facture-page.component"
import { ClientDetailsPageComponent } from './pages/gestion-facture-details-page.component';
import { CreactionFacturePageComponent } from './pages/creation-facture-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CreationFactureFormComponent } from './forms/creation-facture-form.component';
import { CreactionClientPageComponent } from './pages/creation-client-page.component';
import { TaskFormComponent } from './forms/task-form.component';
import { CreationClientFormComponent } from './forms/creation-client-form.component';

const routes: Routes = [
  // La page d'accueil affichera la liste des tâches
  { path: '', component: GestionFacturePageComponent },
  
  { path: ':id/invoices/create', component: CreactionFacturePageComponent },
  { path: ':id/invoices/add', component: CreactionFacturePageComponent },
  { path: 'create', component: CreactionClientPageComponent },
  { path: ':id', component: ClientDetailsPageComponent },

]

@NgModule({
  declarations: [
    AppComponent, GestionFactureComponent,TaskFormComponent,
    GestionFacturePageComponent,ClientDetailsPageComponent,CreactionFacturePageComponent,
    CreationFactureFormComponent,CreactionClientPageComponent,CreationClientFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
