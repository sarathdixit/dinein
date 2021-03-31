import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  

  public offerData = [
    {
      id: 1,
      src: '../../assets/images/images-zasta/offers1.jpg'
    },
    {
      id: 2,
      src: '../../assets/images/images-zasta/offer2.jpg'
    },
    {
      id: 3,
      src: '../../assets/images/images-zasta/offer10.jpg'
    },
    {
      id: 3,
      src: '../../assets/images/images-zasta/offer12.jpg'
    }
  ]

  public dishArr = [
    {
      src: '../../assets/images/Menu/001.jpg',
      name: 'Rasmalai',
      type: 'Desserts'
    },
    {
      src: '../../assets/images/Menu/022.jpg',
      name: 'Palak Panner',
      type: 'Curries'

    },
    {
      src: '../../assets/images/Menu/020.jpg',
      name: 'Aloo Parata',
      type: 'Roti'

    },
    {
      src: '../../assets/images/Menu/021.jpg',
      name: 'Pulka',
      type: 'Roti'

    },
    {
      src: '../../assets/images/Menu/016.jpg',
      name: 'Biriyani',
      type: 'Rice'

    }
  ]

  public feedbackData = [
    {
      id: 1,
      src: '../../assets/images/testimonial/client-1.jpg',
      message: 'Fast Delivery Service.',
      name: 'Ramesh',
      rating: 5
    },
    {
      id: 2,
      src: '../../assets/images/testimonial/client-2.jpg',
      message: 'Tasty and Healthy dishes.',
      name: 'Abhishek',rating: 3

    },
    {
      id: 3,
      src: '../../assets/images/testimonial/client-3.jpg',
      message: 'Good Service and very tasty food.',
      name: 'Chandrika',
      rating: 4

    },

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
