import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  public get name(): AbstractControl | null {
    return this.form.get('name');
  }

  public get address(): AbstractControl | null {
    return this.form.get('address');
  }

  public get phone(): AbstractControl | null {
    return this.form.get('phone');
  }

  constructor(private rest: RestService) { }

  public preventDot(event: KeyboardEvent): void {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.rest.postForm(this.form.value)
        .subscribe({
          next: () => {
            alert('Спасибо за заказ.');
            this.form.reset();
          },
          error: () => alert('Произошла ошибка.')
        });
    }
  }
}
