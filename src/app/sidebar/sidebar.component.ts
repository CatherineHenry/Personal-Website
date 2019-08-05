import { Component, HostBinding, OnInit, ElementRef } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;
  githubLink = "https://github.com/CatherineHenry"; 
  linkedinLink = "https://www.linkedin.com/in/catherine-henry-b1244873/";
  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {
    // close the sidemenu when you navigate to a new page 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && this.isOpen==true){
        this.sidebarService.toggle();
      }
    });
   }

  ngOnInit() {
    this.sidebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }


}