import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  public model:any = {}

  data = []
  public confirmDlt 

  constructor() { }

  ngOnInit(): void {

    
    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  
  });


  }

  add() {
    console.log(this.model);
    
    let obj = {
      name: this.model.dishname,
      price: this.model.price,
      category: this.model.category
    }
    this.data.push(obj)
  }
  edit(index) {
    this.confirmDlt = index
    let newModel = this.data[index]
    console.log(newModel);
    this.model.dishname =this.data[index].name
    this.model.price =this.data[index].price
    this.model.category =this.data[index].category
    
  }
  delete(index) {
    console.log(index
      );
    this.confirmDlt = index
    // this.data.splice(index, 1)
    // console.log(this.data);
    
  }

  deleteIt() {
     this.data.splice(this.confirmDlt, 1)
    console.log(this.data);
  }
  saveEdited() {

    this.data[this.confirmDlt].name = this.model.dishname;
    this.data[this.confirmDlt].price = this.model.price;
    this.data[this.confirmDlt].category = this.model.category;
  }

}
