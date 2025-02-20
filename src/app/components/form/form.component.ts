import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  private _snackBar = inject(MatSnackBar);
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
            this._snackBar.open('Спасибо за заказ.', 'OK', { duration: 3000 });
            this.form.reset();
          },
          error: () => this._snackBar.open('Произошла ошибка.', 'OK', { duration: 3000 })
        });
    }
  }
}
