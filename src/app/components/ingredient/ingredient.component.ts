import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IIngredient } from '../../interface/IIngredient';
import { Info } from '../../enum/info';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent {
  @Input() ingredient: IIngredient = {
    id: 0,
    image: 'cutlet',
    name: 'cutlet',
    amount: 0,
    price: 0.10,
    time: 5,
    ounce: 1.2,
    calorie: 2.1
  }

  public cucumber: string = Info.cucumber;

  increment(){
    this.ingredient = {
      ...this.ingredient,
      amount: this.ingredient.amount++
    }
  }
}
