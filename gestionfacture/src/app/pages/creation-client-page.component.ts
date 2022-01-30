import { Component, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";
import { Facture, Factures } from "../types/facture";
import { Client,Clients } from "../types/task";
import {Router} from '@angular/router';
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
    clients:Clients=[];

    constructor(private route: ActivatedRoute, private service: TasksService, private router :Router ) { }

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
        this.service
          .create(client.fullName,client.email)
          .subscribe((clients) => {this.clients.push(client);
            this.router.navigate(["/"]);});
          
      }
 }