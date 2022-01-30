import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Facture } from "../types/facture";
import { Client } from "../types/task";

@Component({
    selector: 'app-gestion-details-page',
    template: `
    
    <ng-container *ngIf="task">
        <h1>Fiche de {{task.fullName}}</h1>
        
        <strong>Contact : </strong>
        {{task.email}}
        <br />
       
        <a id="retour" routerLink="/">Retour aux clients</a>
       
        <div id="factures">
            <ng-container *ngIf="facture" >
            <table>
            <tr> <th>Nom</th>
            <th>Âge</th></tr>
                <div *ngFor="let fact of facture">
                <tr><td>{{fact.amount}}</td>
                <td> {{fact.status}}</td></tr>
                </div>
                </table>
            </ng-container>

        </div>
       
        <a id="retour" routerLink="/{{ task.id }}/invoices/add">Créer une facture</a>
        </ng-container>
    <p *ngIf="!task">En cours de chargement</p>
`
})
export class ClientDetailsPageComponent {
    task?: Client;
    facture?:Facture[];

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.service
            .findOne(id)
            .subscribe(tasks => this.task = tasks[0]);
        
            this.service
            .findAllFacture(id)
            .subscribe(facture => this.facture = facture);
            
    }
 }