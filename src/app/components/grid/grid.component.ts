import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}


  posts = [
    {
      title:"TACİ'NİN BORNOZU",
      imageUrl: '../assets/image/1.jpg',
      desc : 'Taci duştan çıktıktan sonra bornozu ile kameralara yansıdı!'
    },
    {
      title:"TACİ İYİLEŞİYOR",
      imageUrl: '../assets/image/2.jpg',
      desc : 'Taci, parol ilacını içmeyerek doğru karar verdi ve iyileşti!'
    },
    {
      title:"TACİ PERİ OLUYOR",
      imageUrl: '../assets/image/3.jpg',
      desc : 'Taci, peri oluyor. İddialara göre Dudu Periyi kediye dönüştürecekmiş!'
    },
    {
      title:"TACİ'NİN DEĞİŞİMİ",
      imageUrl: '../assets/image/4.jpg',
      desc : 'Taci, kabakulak hastalığına yakalandı!'
    },
    {
      title:"TACİ BEBEK OLUYOR",
      imageUrl: '../assets/image/5.jpg',
      desc : 'Taci, Benjamin Button filmine özeniyor.'
    },
    {
      title:"TACİ KULAKLIK TAKTI",
      imageUrl: '../assets/image/6.jpg',
      desc : 'Taci JBL TUNE 500 kulaklığı ile müzik dinlerken görüntülendi.'
    },
    {
      title:"TACİ HER GECE ALEMLERE AKIYOR",
      imageUrl: '../assets/image/7.jpg',
      desc : 'Taci, Sihirli Annem barlar sokağında görüntülendi!'
    },
    {
      title:"SEN BANA KÖPEK DİYEMEZSİNNN",
      imageUrl: '../assets/image/8.jpg',
      desc : 'Taci çok sinirlendi. Kendisine köpek denilmesinden hiç ama hiç hoşlanmadı!'
    },
    {
      title:"TACİ ÇOK HASTALANDI",
      imageUrl: '../assets/image/9.jpg',
      desc : 'Taci çok hastalandı. Parol içmemesi tavsiye edildi.'
    },
    {
      title:"TACİ ÇOK HEYECANLI",
      imageUrl: '../assets/image/10.jpg',
      desc : 'Taci çok heyecanlı. Yerinde duramıyor.'
    },
    {
      title:"ŞIK TACİ",
      imageUrl: '../assets/image/11.jpg',
      desc : 'Taci, gözlerimizi ışıldatıyor. Görenleri şok etti!'
    },
    {
      title:"TACİ KÜSTÜ!",
      imageUrl: '../assets/image/12.jpg',
      desc : 'Taci, Duduya küsüp şatodan kaçtı!!!'
    },
  ]

}
