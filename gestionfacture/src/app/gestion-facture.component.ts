// src/app/todo-list.component.ts

import { Component, Input } from "@angular/core";
import { Clients } from './types/task';
@Component({
    // Ce composant sera affiché par Angular à chaque fois
    // qu'un élément <app-todo-list> sera rencontré dans
    // un template HTML
    selector: 'app-gestion-facture',
    // Le HTML reprend ici notre liste de tâches
    template: `
    <h1>Liste des clients</h1>
        
    <a id="retour" routerLink="/create">Créer un client</a>

    <ul>
          <li *ngFor="let item of tasks">
          <label id="item-{{ item.id }}" routerLink="/{{ item.id }}">
            
            {{ item.fullName }} 
          </label>
          
    </li>
</ul>
    `
})

export class GestionFactureComponent {
    @Input()
    tasks: Clients = []; 
}