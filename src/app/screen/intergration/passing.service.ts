import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PassingService{

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() {}

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }

}
