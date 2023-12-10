import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBurgerService } from '../../service/custom-burger.service';
import { IIngredient } from '../../interface/IIngredient';
import { Info } from '../../enum/info';

@Component({
  selector: 'app-custom-burger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-burger.component.html',
  styleUrl: './custom-burger.component.scss'
})
export class CustomBurgerComponent implements OnInit{

  private _customBurgerService = inject(CustomBurgerService);
  public ingredients: IIngredient[] = [];
  public top: number = 0;
  private count: number = 0;

  ngOnInit(): void {
      this.getSelectIngredients();
  }

  getSelectIngredients(){
    this._customBurgerService.selectIngredient.subscribe({
      next: result => {
        this.ingredients = result;
      },
      error: error => {
        console.log('error ->', error);
      }
    })
  }

  customStyle(name: string, index: number, amount: number): number{
    return (index + 1) * 55;
  }

  customStyleBunTop(length: number){
    return ((length + 1) * 55)
  }

  customWidth(name: string): number{
    // const width = (name === Info.onion || name === Info.tomato || name === Info.cucumber) ? 200 : 365;
    return (name === Info.onion || name === Info.tomato || name === Info.cucumber) ? 200 : 365;
  }

  setClass(name: string, amount: number): string{
    let customClass = (name === Info.onion && amount === 1) ? 'left' : (name === Info.onion && amount === 3) ? 'right': ''; 
    return customClass;
  }

}
