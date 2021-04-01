import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartNumber = 0

  constructor(public service: ShareService) { }

  ngOnInit(): void {
    this.service.cartIndicator.subscribe((data:any) => {
      this.cartNumber = data
    })
  }

}
