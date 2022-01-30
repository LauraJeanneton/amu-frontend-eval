import { TaskFormComponent } from "../forms/task-form.component";

export type Client = {
    id: number;
    fullName: string;
    email: string;
}

export type Clients = Client[];