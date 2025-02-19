import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('navigationMenu')
  private _navigationMenu!: ElementRef<HTMLDivElement>;

  public toggleMenu(): void {
    console.log("here");
    this._navigationMenu.nativeElement.classList.toggle('navigation--active');
  }
}
