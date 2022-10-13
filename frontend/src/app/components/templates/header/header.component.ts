import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logo: string = '../../../../assets/img/logo02.jpeg';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  public getTitle(): string {
    return this.headerService.headerData.title;
  }

  public getIcon(): string {
    return this.headerService.headerData.icon;
  }

  public getRouterUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
