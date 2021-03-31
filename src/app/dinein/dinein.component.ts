import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinein',
  templateUrl: './dinein.component.html',
  styleUrls: ['./dinein.component.scss']
})
export class DineinComponent implements OnInit {
  public offerData = [
    {
      id: 1,
      src: '../../assets/images/Dinein/dine01.jpg'
    },
    {
      id: 2,
      src: '../../assets/images/Dinein/dine03.jpg'
    },
    {
      id: 3,
      src: '../../assets/images/Dinein/dine04.jpg'
    },
    {
      id: 4,
      src: '../../assets/images/Dinein/dine08.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
