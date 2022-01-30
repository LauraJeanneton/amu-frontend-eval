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

    <table style="width:100%" class="list">
    <thead>
    <tr><th>Nom Prenom</th><th>Email</th></tr>
    </thead><tbody>
          <tr *ngFor="let item of tasks">
          <td id="item-{{ item.id }}" routerLink="/{{ item.id }}">
            
            {{ item.fullName }} 
          </td>
          <td id="item-{{ item.id }}" routerLink="/{{ item.id }}">
            
            {{ item.email }} 
          </td>
          
    </tr> </tbody>
</table>
    `
})

export class GestionFactureComponent {
    @Input()
    tasks: Clients = []; 
}