import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { BrocolistComponent } from "./components/brocolist/brocolist.component";
import { provideHttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="pr-u-padding200">
      <h1 class="u-textSuccess">Hello dear brocolis</h1>
      <bro-brocolist />
    </div>
  `,
  imports: [
    BrocolistComponent
  ],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
