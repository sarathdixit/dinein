import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShareService } from '../share/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  public cartArr = []
  public model:any;

  constructor(private service: ShareService, private cd: ChangeDetectorRef) { }

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
    return this.cartArr.reduce((a, b) => a + ( b.price * b.quantity), 0)
  }

  getData(data, index,event) {
    if(event.target.value != 0) {

      console.log(event.target.value, index);
      this.cartArr[index].quantity = event.target.value
      this.cd.detectChanges()
    }
    

  }


}
