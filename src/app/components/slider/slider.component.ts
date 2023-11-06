import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
  currentPage = 0;
  constructor(){}
  ngOnInit(): void {
    console.log('this.images.length :>> ', this.images.length);
  }

  images = [
    {
      title:"Görsel 1",
      url: '../assets/image/1.jpg'
    },
    {
      title:"Görsel 2",
      url: '../assets/image/2.jpg'
    },
    {
      title:"Görsel 3",
      url: '../assets/image/3.jpg'
    },
    {
      title:"Görsel 4",
      url: '../assets/image/4.jpg'
    },
    {
      title:"Görsel 5",
      url: '../assets/image/5.jpg'
    },
    {
      title:"Görsel 6",
      url: '../assets/image/6.jpg'
    },
    {
      title:"Görsel 7",
      url: '../assets/image/7.jpg'
    },
    {
      title:"Görsel 8",
      url: '../assets/image/8.jpg'
    },
    {
      title:"Görsel 9",
      url: '../assets/image/9.jpg'
    },
    {
      title:"Görsel 10",
      url: '../assets/image/10.jpg'
    },
    {
      title:"Görsel 11",
      url: '../assets/image/11.jpg'
    },
    {
      title:"Görsel 12",
      url: '../assets/image/12.jpg'
    },
  ]

  next() {  //Ben yapmadım jurassic yaptı.
    this.currentPage = (this.currentPage + 1) % this.images.length;
  } 
  //this.images.length = 12
  prev() {
    this.currentPage = (this.currentPage - 1 + this.images.length) % this.images.length;
  }//Mevcut currentPage = 5 ise -> (4 + 12) % 12 = 4 
}
