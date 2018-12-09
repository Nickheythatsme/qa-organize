import { Component, OnInit } from '@angular/core';
import { HeaderItem } from './headerItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  headerItems: HeaderItem[] = [
    new HeaderItem(0, 'Available', '/'),
    new HeaderItem(1, 'Assigned', '/assigned'),
    new HeaderItem(2, 'Previous', '/previous'),
    new HeaderItem(3, 'Profile', '/profile'),
  ];

  constructor() { }

  onClick(id: Number) {
    console.log('item clicked: ' + id);
  }

  ngOnInit() {
  }

}
