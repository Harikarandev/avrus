import { Component } from '@angular/core';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent {
 viewtest:boolean = false

ViewTest(visible: boolean): void {
  this.viewtest = visible;
}
}
