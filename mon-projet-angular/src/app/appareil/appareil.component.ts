import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  appareilName = 'Machine à laver';
  appareilStatus = 'étient';

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }

}
