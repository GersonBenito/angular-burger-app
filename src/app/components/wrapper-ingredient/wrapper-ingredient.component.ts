import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from '../ingredient/ingredient.component';
import * as ingredientsJson from '../../data/ingredients.json';
import { IIngredient } from '../../interface/IIngredient';

@Component({
  selector: 'app-wrapper-ingredient',
  standalone: true,
  imports: [CommonModule, IngredientComponent],
  templateUrl: './wrapper-ingredient.component.html',
  styleUrl: './wrapper-ingredient.component.scss'
})
export class WrapperIngredientComponent implements OnInit {
  public ingredients: IIngredient[] = [];

  ngOnInit(): void {
      this.getIngredientFromJson();
  }

  getIngredientFromJson(){
    this.ingredients = (ingredientsJson as any).default;
  }

}
