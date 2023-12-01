import { Injectable } from '@angular/core';
import { IIngredient } from '../interface/IIngredient';
import { BehaviorSubject } from 'rxjs';
import * as ingredientsJson from '../data/ingredients.json';
import { uuidv4 } from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class CustomBurgerService {

  private ingredientsBueger: IIngredient[] = [];
  private selectIngredintsBurger: IIngredient[] = [];
  private _ingredients: BehaviorSubject<IIngredient[]> = new BehaviorSubject<IIngredient[]>([]);
  private _selectIngredients: BehaviorSubject<IIngredient[]> = new BehaviorSubject<IIngredient[]>([]);
  private uidIngredients: string[] = [];

  constructor() { 
    this.ingredientsBueger = (ingredientsJson as any).default;
    this._ingredients.next(this.ingredientsBueger);
  }

  get ingredients(){
    return this._ingredients.asObservable();
  }

  get selectIngredient(){
    return this._selectIngredients.asObservable();
  }

  addIngredient(ingredient: IIngredient){
    const uid: string = uuidv4();
    this.ingredientsBueger.map((element: IIngredient) => {
      return {
        ...element,
        amount: (element.id === ingredient.id) ? element.amount++ : element.amount
      }
    })
    this._ingredients.next(this.ingredientsBueger);
    this.selectIngredintsBurger.push({...ingredient, uid: uid});
    this._selectIngredients.next(this.selectIngredintsBurger);
    this.uidIngredients.push(uid);
  }

  removeIngredient(id: number | string | undefined){
    this.ingredientsBueger.map((ingredient: IIngredient) => {
      return {
        ...ingredient,
        amount: (ingredient.id === id) ? ingredient.amount-- : ingredient.amount
      }
    })
    this._ingredients.next(this.ingredientsBueger);

    // let ingredient: IIngredient[] = [];
    // this.uidIngredients.forEach(element => {
    //   // console.log('element -->', element);
    //   this.selectIngredintsBurger.filter(item => {
    //     console.log(element === item.uid);
    //   });
    // });

    // console.log(ingredient);
    
    this.selectIngredintsBurger.pop();
    // console.log(this.selectIngredintsBurger);
    
    this._selectIngredients.next(this.selectIngredintsBurger);
  }
}
