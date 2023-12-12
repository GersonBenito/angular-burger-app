import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitlePageComponent } from '../title-page/title-page.component';
import { BurgerComponent } from '../burger/burger.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TitlePageComponent, BurgerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private title: Title){
    this.title.setTitle('Burger - Discover')
  }
}
