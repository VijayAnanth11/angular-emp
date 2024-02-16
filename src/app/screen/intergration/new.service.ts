import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  private message!: string;

  constructor() { }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

  getMessage(){
    return this.message;
    // console.log('Hoooo')
  }
}
