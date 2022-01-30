import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">

        <main>
          <router-outlet></router-outlet>
        </main>
    </div>
  `,
  styles: []
})
export class AppComponent { }