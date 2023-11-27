import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { RouterModule } from '@angular/router';
import { IMenu } from '../../interface/IMenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AvatarComponent, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  public menu: IMenu[] = [
    {
      label: 'Discover',
      link: 'discover',
      animation: 'animate__fadeInLeft'
    },
    {
      label: 'Make Your Burger',
      link: 'process',
      animation: 'animate__fadeInRight'
    }
  ];
}
