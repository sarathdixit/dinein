import { Component, OnInit } from '@angular/core';
import * as isotope from 'isotope-layout';
import { ShareService } from '../share/share.service';
declare var $: any

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public addedArr = []
  sendArr = []

  public menuArr = [
    {
      name: 'Aloo Paratha',
      price: 100,
      index: 0,
      quantity: 1,
      src: '../../assets/images/images-zasta/roti-05.jpg'
    },
    {
      name: 'Veg Kadai',
      price: 150,
      index: 1,
      quantity: 1,
      src: '../../assets/images/images-zasta/sub-07.jpg'
    },
    {
      name: 'Samosa',
      price: 150,
      index: 2,
      quantity: 1,
      src: '../../assets/images/images-zasta/starter-011.jpg'
    },
    {
      name: 'Butter Naan',
      price: 100,
      index: 3,
      quantity: 1,
      src: '../../assets/images/images-zasta/rsz_roti-06.jpg'
    },
    {
      name: 'Dal',
      price: 150,
      index: 4,
      quantity: 1,
      src: '../../assets/images/images-zasta/rsz_010.jpg'
    },
    {
      name: 'Garlic Naan',
      price: 100,
      index: 5,
      quantity: 1,
      src: '../../assets/images/images-zasta/rsz_panroti-01.jpg'
    },
    {
      name: 'Veg. Hyderabadi',
      price: 250,
      index: 6,
      quantity: 1,
      src: '../../assets/images/images-zasta/sub-08.jpg'
    },
    {
      name: 'Babycorn Masala',
      price: 250,
      index: 7,
      quantity: 1,
      src: '../../assets/images/images-zasta/sub-07.jpg'
    },
    {
      name: 'Kulcha',
      price: 150,
      index: 8,
      quantity: 1,
      src : "../../assets/images/images-zasta/rsz_roti-09.jpg"
    },
    {
      name: 'Spinach Cutlets',
      price: 250,
      index: 9,
      quantity: 1,
      src : "../../assets/images/images-zasta/rsz_starter-07.jpg"
    },
    {
      name: 'Stuffed Kulcha',
      price: 150,
      index: 10,
      quantity: 1,
      src:"../../assets/images/images-zasta/rsz_roti-12.jpg"
    },    {
      name: 'Panner Massala',
      price: 250,
      index: 11,
      quantity: 1,
      src:"../../assets/images/images-zasta/sub-08.jpg"
    }
  ]

  constructor(public service: ShareService) { }

  ngOnInit(): void {
// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  

    
  }

  add(index) {
    console.log(index);
    this.addedArr.push(index)
    console.log(this.addedArr);
    this.service.cartIndicator.next(this.addedArr.length)
    let value = this.menuArr.filter(val => val.index == index)
    console.log(value[0]);

    this.sendArr.push(value[0])
    
    this.service.cartDetail.next(this.sendArr);
    
  }

  isIndexAdded(index) {
    return !this.addedArr.includes(index)
  }

}
