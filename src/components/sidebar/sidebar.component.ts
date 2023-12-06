import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 

  public activeLinkIndex: number | null = null;

  sidelink(index: number): void {

    this.activeLinkIndex = index;
    console.log(this.activeLinkIndex)
  }

}
