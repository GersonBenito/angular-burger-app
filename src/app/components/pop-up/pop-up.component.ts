import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FieldInfoComponent } from '../field-info/field-info.component';
import { IField } from '../../interface/IField';
import { MatDialogRef } from '@angular/material/dialog';
import { FieldService } from '../../service/field.service';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FieldInfoComponent],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent implements OnInit {

  private dialogRef = inject(MatDialogRef<PopUpComponent>);
  private _fieldService = inject(FieldService);

  public fields: IField[] = [];

  ngOnInit(): void {
    this.getFields(); 
  }

  getFields(){
    this._fieldService.fields.subscribe({
      next: result =>{
        this.fields = result;
      },
      error: error => {
        console.log('error -->',error);
      }
    });
  }

  closePopUp(){
    this.dialogRef.close();
  }
}
