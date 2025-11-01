import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  pageChangeEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  public setPage(name: string) {
    this.pageChangeEventEmitter.emit(name);
  }
}
