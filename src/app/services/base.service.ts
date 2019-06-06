import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  static currentUrl = '';
  constructor() {

  }

  getPerviousUrl(): string {
    return BaseService.currentUrl.substring(0, BaseService.currentUrl.lastIndexOf('/')) || '';
  }
}
