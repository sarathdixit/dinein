import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public cartIndicator = new BehaviorSubject<number>(0)
  public cartDetail = new BehaviorSubject<any>([])

  constructor() { }
}
