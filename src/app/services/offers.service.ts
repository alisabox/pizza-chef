import { Injectable } from '@angular/core';
import { Offer } from '../models/offer.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private _menu: Offer[] = [{
    id: 1,
    name: 'Мясная Делюкс',
    ingredients: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    img: '/menu/pizza_deluxe.jpg'
  }, {
    id: 2,
    name: 'Морская Премиум',
    ingredients: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    img: '/menu/pizza_premium.jpg'
  }, {
    id: 3,
    name: 'Бекон и Сосиски',
    ingredients: 'Бекон, сыр, сосиски, ананас, томатная паста',
    img: '/menu/pizza_bacon.jpg'
  }, {
    id: 4,
    name: 'Куриная Делюкс',
    ingredients: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    img: '/menu/pizza_chicken_deluxe.jpg'
  }, {
    id: 5,
    name: 'Барбекю Премиум',
    ingredients: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    img: '/menu/pizza_barbecue.jpg'
  }, {
    id: 6,
    name: 'Пепперони Дабл',
    ingredients: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    img: '/menu/pizza_double.jpg'
  }, {
    id: 7,
    name: 'Куриное трио',
    ingredients: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    img: '/menu/pizza_trio.jpg'
  }, {
    id: 8,
    name: 'Сырная',
    ingredients: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    img: '/menu/pizza_cheese.jpg'
  }]

  constructor() { }

  public getProducts(): Observable<Offer[]> {
    return of(this._menu).pipe(delay(1000));
  }
}
