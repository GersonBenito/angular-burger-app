import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { IIngredient } from '../../interface/IIngredient';
import { CustomBurgerService } from '../../service/custom-burger.service';

@Component({
  selector: 'app-wrapper-ingredient',
  standalone: true,
  imports: [CommonModule, IngredientComponent],
  templateUrl: './wrapper-ingredient.component.html',
  styleUrl: './wrapper-ingredient.component.scss'
})
export class WrapperIngredientComponent implements OnInit {
  public ingredients: IIngredient[] = [];

  private _customBurgerService = inject(CustomBurgerService);

  ngOnInit(): void {
    this._customBurgerService.ingredients.subscribe({
      next: result =>{
        this.ingredients = result;
      },
      error: error => {
        console.log('error -->', error);
      }
    })
  }
  
}
