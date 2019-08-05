import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'toggle-sidebar-icon',
  templateUrl: './toggle-sidebar-icon.component.html',
  styleUrls: ['./toggle-sidebar-icon.component.css']
})
export class ToggleSidebarIconComponent {

  constructor(private SidebarService: SidebarService
  ) { }

  @HostListener('click')
  click() {
    this.SidebarService.toggle();
  }

}