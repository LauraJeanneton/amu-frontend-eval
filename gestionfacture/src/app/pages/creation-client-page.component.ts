import { Component, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Facture, Factures } from "../types/facture";
import { Client } from "../types/task";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-creation-client-page',
    template: `
    
    <h1>Création d'un client</h1>
    <div >
        <app-creation-client-form (onNewTask)="addTask($event)"></app-creation-client-form>
        </div >
`
})
export class CreactionClientPageComponent {
    task?: Client;
    factures:Factures=[];

    constructor(private route: ActivatedRoute, private service: TasksService) { }

    @Output()
    onNewTask = new EventEmitter<Client>();

    form = new FormGroup({
        text: new FormControl()
    });
    id: number = Number(this.route.snapshot.paramMap.get('id'));
    ngOnInit() {
        

        this.service
            .findOne(this.id)
            .subscribe(tasks => this.task = tasks[0]);
        
    }

    addTask(client: Client) {
        console.log("Add client : " + client.fullName+" et "+client.email);
        this.service
          .create(client.fullName,client.email)
          .subscribe((tasks) => this.factures.push(this.factures[0]));
      }
 }