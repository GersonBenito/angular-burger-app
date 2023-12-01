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

  customStyle(name: string, index: number): string{
    return name === Info.mayo ? 
          `${((index + 1) * 40) - 30}px`
          : name === Info.cheese || name === Info.salad ? 
          `${((index + 1) * 40) - 60}px` 
          :`${(index + 1) * 40}px`;
    // return `${(index + 1) * 40}px`;
  }

  customStyleBunTop(index: number): string{
    const bottom = ((index + 1) * 40) + 40;
    return `${bottom}px`;
  }

}
