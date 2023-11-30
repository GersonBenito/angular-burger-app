import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBurgerService } from '../../service/custom-burger.service';
import { IIngredient } from '../../interface/IIngredient';

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
        console.log(result);
        this.ingredients = result;
      },
      error: error => {
        console.log('error ->', error);
      }
    })
  }
}
