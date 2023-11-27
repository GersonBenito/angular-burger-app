import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { IInfo } from '../../interface/IInfo';
import { Info } from '../../enum/info';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ButtonComponent, AvatarComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

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

  handleCheckoup(){
    console.log('checkup');
  }
}
