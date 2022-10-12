import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logo: string = '../../../../assets/img/logo02.jpeg';

  constructor() {}

  ngOnInit(): void {}
}
