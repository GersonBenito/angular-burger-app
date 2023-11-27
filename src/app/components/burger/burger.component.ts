import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss'
})
export class BurgerComponent {

  public router = inject(Router);

  redirectPage(): void{
    this.router.navigate(['process']);
  }

}
