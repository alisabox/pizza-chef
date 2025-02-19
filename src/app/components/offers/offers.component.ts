import {Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Offer} from '../../models/offer.model';
import {OffersService} from '../../services/offers.service';
import {ReplaySubject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-offers',
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent implements OnInit, OnDestroy {
  @ViewChildren('image')
  private _image: QueryList<ElementRef<HTMLImageElement>> | undefined;
  private _menu: Offer[] = [];
  private _isLoaded: boolean = false;
  private _destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  public get menu(): Offer[] {
    return this._menu;
  }

  public get isLoaded(): boolean {
    return this._isLoaded;
  }

  constructor(private _service: OffersService) { }

  public ngOnInit(): void {
    this._service.getProducts()
      .pipe(takeUntil(this._destroy$))
      .subscribe((menu) => {
        this._menu = menu;
        this._isLoaded = true;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  public requestFullscreen(index: number): void {
    this._image?.get(index)?.nativeElement.requestFullscreen();
  }
}
