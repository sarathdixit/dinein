import { Component, OnInit } from '@angular/core';

declare var $: any
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  
  });

}
}
