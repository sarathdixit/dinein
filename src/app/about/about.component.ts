import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public offerData = [
    {
      id: 1,
      src: '../../assets/images/team/team-12.jpg'
    },
    {
      id: 2,
      src: '../../assets/images/team/team-9.jpg'
    },
    {
      id: 3,
      src: '../../assets/images/team/team-7.jpg'
    },
    {
      id: 4,
      src: '../../assets/images/team/team-8.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
