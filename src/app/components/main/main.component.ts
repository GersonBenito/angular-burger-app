import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitlePageComponent } from '../title-page/title-page.component';
import { BurgerComponent } from '../burger/burger.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TitlePageComponent, BurgerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
