import { Component, OnInit, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { IInfo } from '../../interface/IInfo';
import { Info } from '../../enum/info';
import { CustomBurgerService } from '../../service/custom-burger.service';
import { map } from 'rxjs';
import { getProperty } from '../../helper/helper';
import { Summary } from '../../interface/ISummary';
import * as summaryJson from '../../data/summay.json';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ButtonComponent, AvatarComponent, MatDialogModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit{

  public kcal: Info = Info.kcal;

  public info: IInfo[] = [];

  private _customBurgerService = inject(CustomBurgerService);
  public summary: Summary = {
    kcal: 0,
    oz: 0,
    price: 0,
    time: 0
  };

  private dialog = inject(MatDialog)

  ngOnInit(): void {
    this.getSummary();
    this.handleSummary();
  }

  handleCheckoup(){
   this.dialog.open(PopUpComponent, {
      width: '50%',
      disableClose: true
   });
  }

  getSummary(){
    this.info = (summaryJson as any).default;
  }

  handleSummary(){
    this._customBurgerService.selectIngredient
    .pipe(map(ingredients => {
      return {
        price: getProperty(ingredients, 'price'),
        time: getProperty(ingredients, 'time'),
        oz: getProperty(ingredients, 'ounce'),
        kcal: getProperty(ingredients, 'calorie'),
      }
    }))
    .subscribe({
      next: result => {
        this.summary = result;
        this.info = this.info.map(element => {
          return {
            ...element,
            count: element.name === Info.min ? this.summary.time : element.name === Info.oz ? this.summary.oz : this.summary.kcal
          }
        })
      },
      error: error => {
        console.log('error -->', error);
      }
    });
  }
}
