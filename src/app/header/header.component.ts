import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public date = "";

  constructor(private dataService:DataService){
    this.dataService.get_date().subscribe((res: string)=>{
   console.log("response: " + res);
      this.date = res["date"];
    })
  }
}
