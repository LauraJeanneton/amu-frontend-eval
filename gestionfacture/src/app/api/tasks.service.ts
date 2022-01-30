// src/app/api/tasks.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Clients } from "../types/task";
import { Facture, Factures } from "../types/facture";
import { BoundElementProperty } from "@angular/compiler";

const SUPABASE_URL = 'https://tabibcoqujeidnjexfoi.supabase.co/rest/v1/customers';
const SUPABASE_URL_FACTURE = 'https://tabibcoqujeidnjexfoi.supabase.co/rest/v1/invoices';

const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ3NjUzNCwiZXhwIjoxOTU5MDUyNTM0fQ.0qJa4eUcVYkSMRp6yoTkkgwkR9bb5J1Ukj3-wp-jC0U';


@Injectable()
export class TasksService {

    
    constructor(private http: HttpClient) { }

    findAll(): Observable<Clients> {
        return this.http.get<Clients>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    findAllFacture(id:number): Observable<Factures> {
        return this.http.get<Factures>(SUPABASE_URL_FACTURE+"?idclient=eq."+id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

    /**
     * Créé une tâche auprès de l'API qui nous retournera un tableau contenant la tâche
     * nouvellement créée
     */
    create(name: string,mail:string): Observable<Clients> {
        console.log("Ajout de "+name+ + " et "+mail)
        return this.http.post<Clients>(SUPABASE_URL, {
            fullName: name,
            email: mail
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    createFacture(idClient:number,amount:string,status:string): Observable<Factures> {
        console.log("Ajout de "+idClient+" "+amount +" "+ status)
        return this.http.post<Factures>(SUPABASE_URL_FACTURE, {
            idclient: idClient,
            amount: amount,
            status:status
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    findOne(id: number): Observable<Clients> {
        return this.http.get<Clients>(SUPABASE_URL + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }
}