import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FieldService } from '../../service/field.service';

@Component({
  selector: 'app-field-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './field-info.component.html',
  styleUrl: './field-info.component.scss'
})
export class FieldInfoComponent implements OnInit{
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() color: string = '#5243C2';
  @Input() data: string[] = [];

  private _fielService = inject(FieldService);

  public show: boolean = false;

  ngOnInit(): void {
    this.getValue();
  }
  getOption(option: string){
    this._fielService.updateField(option);
  }

  getValue(){
    this._fielService.visible.subscribe({
      next: value => {
        this.show = value;
      },
      error: error =>{
        console.log('error -->',error);
      }
    })
  }

  showListOption(){
    this._fielService.toogle(!this.show);
  }
}
