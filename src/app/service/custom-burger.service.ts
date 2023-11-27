import { Injectable } from '@angular/core';
import { IIngredient } from '../interface/IIngredient';
import { BehaviorSubject } from 'rxjs';
import * as ingredientsJson from '../data/ingredients.json';

@Injectable({
  providedIn: 'root'
})
export class CustomBurgerService {

  private ingredientsBueger: IIngredient[] = [];
  private _ingredients: BehaviorSubject<IIngredient[]> = new BehaviorSubject<IIngredient[]>([]);

  constructor() { 
    this.ingredientsBueger = (ingredientsJson as any).default;
    this._ingredients.next(this.ingredientsBueger);
  }

  get ingredients(){
    return this._ingredients.asObservable();
  }

  addIngredient(id: number | string | undefined){
    this.ingredientsBueger.map((ingredient: IIngredient) => {
      return {
        ...ingredient,
        amount: (ingredient.id === id) ? ingredient.amount++ : ingredient.amount
      }
    })
    this._ingredients.next(this.ingredientsBueger);
  }

  removeIngredient(id: number | string | undefined){
    this.ingredientsBueger.map((ingredient: IIngredient) => {
      return {
        ...ingredient,
        amount: (ingredient.id === id) ? ingredient.amount-- : ingredient.amount
      }
    })
    this._ingredients.next(this.ingredientsBueger);
  }
}
