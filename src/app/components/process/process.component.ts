import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from '../title-page/title-page.component';
import { CustomBurgerComponent } from '../custom-burger/custom-burger.component';
import { SummaryComponent } from '../summary/summary.component';
import { WrapperIngredientComponent } from '../wrapper-ingredient/wrapper-ingredient.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, TitlePageComponent, CustomBurgerComponent, SummaryComponent, WrapperIngredientComponent],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  constructor(private title: Title){
    this.title.setTitle('Burger - Process')
  }
}
