import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<void>();


  sidenav(){
    this.toggleSidebar.emit();
  }

  currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Handle navigation end events
        this.handleNavigation();
      }
    });
  }

  private handleNavigation() {

    let route = this.activatedRoute.root;


    while (route.firstChild) {
      route = route.firstChild;
    }

    this.currentRoute = route.snapshot.url.join('/');
    console.log('Current Route:', this.currentRoute);

 
  }
 


}
