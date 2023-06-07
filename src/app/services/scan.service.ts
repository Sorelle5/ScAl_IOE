import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  code: string = "";
    department: number;
    commune: number;
    postalCode: number;

  constructor() {
    this.code = '';
    this.department = 0;
    this.commune = 0;
    this.postalCode = 0;
  }
}
