import { Component } from '@angular/core';
import { EmitterService } from './emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmitterService]
})

export class AppComponent {
    title = 'phaneven!';
    constructor (private emitterService: EmitterService) {}
}
