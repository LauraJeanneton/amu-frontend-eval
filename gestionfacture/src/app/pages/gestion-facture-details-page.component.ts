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
       
        <div>
            <ng-container *ngIf="facture" >
            <table style="width:100%">
            <tr>
            <th *ngFor = "let column of headers">
            {{column}}
          </th>
            </tr>
           <tr *ngFor="let fact of facture">
                <td> {{fact.amount}}</td>
                <td> {{getStatus(fact.status)}} </td>
           </tr>
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
    headers = ["Montant", "Statut"];

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    getStatus(status:string){
        let statut = "";
        if(status=="PAID"){
            statut="Payé"
        }
        if(status=="SENT"){
            statut="Envoyé"
        }
        return statut;
    }
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