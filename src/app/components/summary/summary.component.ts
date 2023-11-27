import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { IInfo } from '../../interface/IInfo';
import { Info } from '../../enum/info';
import { CustomBurgerService } from '../../service/custom-burger.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ButtonComponent, AvatarComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit{

  public kcal: Info = Info.kcal;

  public info: IInfo[] = [
    {
      icon: 'clock',
      color: '#B956F5',
      count: 0,
      name: 'min'
    },
    {
      icon: 'scale',
      color: '#F58F56',
      count: 0,
      name: 'oz'
    },
    {
      icon: 'fire',
      color: '#FF4D4F',
      count: 0,
      name: 'kcal'
    }
  ];

  private _customBurgerService = inject(CustomBurgerService);
  public price: number = 0;

  ngOnInit(): void {
      this._customBurgerService.ingredients
        .pipe(map(ingredients => {
          return ingredients.reduce((prev, curr) => prev + curr.price, 0);
        }))
        .subscribe({
          next: value => {
            this.price = value;
            console.log('value -->',this.price);
          },
          error: error =>{
            console.log('error -->', error);
          }
      })
  }

  handleCheckoup(){
    console.log('checkup');
  }
}
