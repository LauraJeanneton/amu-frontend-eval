// src/app/task-form.component.ts
import { ɵDomAdapter } from "@angular/common";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TaskFormComponent } from "./task-form.component";
import { Facture } from "../types/facture";
import {Router} from '@angular/router';
import { Client } from "../types/task";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";

@Component({
    selector: "app-creation-facture-form",
    template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
    <p>
    <label>Montant : </label><input 
            formControlName="text"
            type="text" 
            name="amount" 
            placeholder="Montant" 
        />
        <br/><br/>
 <label>Statut : </label>
 <select name="status" id="status" formControlName="status" [(ngModel)]="SENT_OPTION">
 <option value="SENT" >Envoyé</option>
 <option value="PAID">Payé</option>
</select>

    

 <br/><br/> 
 <button id="retour" >Enregistrer la facture</button> &nbsp;&nbsp;
 <a id="retour" routerLink="/{{ id }}">Annuler</a>
        </p>
    </form>
    `
})
export class CreationFactureFormComponent {
    task?: Client;
     id: number = Number(this.route.snapshot.paramMap.get('id'));
     constructor(private route: ActivatedRoute, private service: TasksService, private router : Router) { }
    SENT_OPTION : any = "SENT";
    // Le décorateur @Output permet de signaler à Angular 
    // que notre composant va pouvoir faire sortir une information
    // vers l'exéterieur sous a forme d'un événément !
    // Et pour émettre un événement, on utilise une instance
    // de la classe EventEmitter tout en précisant que l'information
    // qui sera émise sera une string (le texte tapé dans le formulaire !) :
    @Output()
    onNewTask = new EventEmitter<Facture>();

    form = new FormGroup({
        text: new FormControl(),
        status: new FormControl()
    });
     facture: Facture = {
        idClient: this.id,
        amount:"",
        status:""
      };
    onSubmit() {
        this.facture.amount=this.form.value.text;
        this.facture.status=this.form.value.status;
       
        // Au moment de la soumission, on va déclencher un événement
        // Et la donnée que l'on va émettre sera la valeur du champ 
        // "text" qui se trouve dans notre formulaire !
        
    this.onNewTask.emit(this.facture);

        // On pourra même réinitialiser la valeur du formulaire
        // une fois que le traitement sera terminé :
        this.form.setValue({
            text: '',
            status:""
        });
        
    }
    
}