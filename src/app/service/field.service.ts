import { Injectable } from '@angular/core';
import { IField } from '../interface/IField';
import { BehaviorSubject } from 'rxjs';
import * as fieldJson from '../data/fields.json';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private listFields: IField[] = [];
  private _listField: BehaviorSubject<IField[]> = new BehaviorSubject<IField[]>([]);
  private _showList: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { 
    this.listFields = (fieldJson as any).default;
    this._listField.next(this.listFields);
  }

  get fields(){
    return this._listField.asObservable();
  }

  get visible(){
    return this._showList.asObservable();
  }

  updateField(option: string){
    this.listFields = this.listFields.map((element: IField) => {
      return {
        ...element,
        value: (element.id === 4) ? option : element.value
      }
    });
    this._listField.next(this.listFields);
    this.hide();
  }

  toogle(value: boolean){
    this._showList.next(value);
  }

  hide(){
    this._showList.next(false);
  }
}
