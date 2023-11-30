import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IIngredient } from '../../interface/IIngredient';
import { Info } from '../../enum/info';
import { CustomBurgerService } from '../../service/custom-burger.service';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent {

  private _customBurgerService = inject(CustomBurgerService);

  @Input() ingredient: IIngredient = {
    id: 0,
    uid: 0,
    image: 'cutlet',
    name: 'cutlet',
    amount: 0,
    price: 0.10,
    time: 5,
    ounce: 1.2,
    calorie: 2.1
  }

  public cucumber: string = Info.cucumber;

  addNewIngredient(ingredient: IIngredient){
    this._customBurgerService.addIngredient(ingredient);
  }

  removeIngredient(id: number | string | undefined){
    this._customBurgerService.removeIngredient(id);
  }
}
