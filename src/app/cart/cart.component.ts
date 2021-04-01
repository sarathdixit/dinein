import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartArr = []

  constructor(private service: ShareService) { }

  ngOnInit(): void {
    this.service.cartDetail.subscribe(data => {
      console.log(data);
      
      this.cartArr = data
      console.log(this.cartArr);
      
    })
  }
  removeItem(i) {
    console.log(i);
    this.cartArr.splice(i, 1);
    this.service.cartIndicator.next(this.cartArr.length)
  }
  totalvalue() {
    return this.cartArr.reduce((a, b) => a + b.price, 0)
  }

}
