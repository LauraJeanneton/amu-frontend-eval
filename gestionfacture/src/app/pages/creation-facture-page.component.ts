import { Component, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Facture, Factures } from "../types/facture";
import { Client } from "../types/task";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-creation-facture-page',
    template: `
    
    <h1>Création d'une facture</h1>
    <ng-container *ngIf="task">
        <div id="creation-facture">
            <strong>Client :</strong> {{task.fullName}}
        </div>
        <br /> <br />
        <div >
        <app-creation-facture-form (onNewTask)="addTask($event)"></app-creation-facture-form>
        </div >
    </ng-container>
    <p *ngIf="!task">En cours de chargement</p>
`
})
export class CreactionFacturePageComponent {
    task?: Client;
    factures:Factures=[];

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    @Output()
    onNewTask = new EventEmitter<Facture>();

    form = new FormGroup({
        text: new FormControl()
    });
    id: number = Number(this.route.snapshot.paramMap.get('id'));
    ngOnInit() {
        

        this.service
            .findOne(this.id)
            .subscribe(tasks => this.task = tasks[0]);
        
    }

    addTask(facture: Facture) {
        console.log("Add task : " + this.id+" " +facture.amount+" et "+facture.status)
        this.service
          .createFacture(this.id,facture.amount,facture.status)
          .subscribe((tasks) => this.factures.push(this.factures[0]));
      }
 }