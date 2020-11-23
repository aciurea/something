import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AdsData {
  name: string;
  metric1: number;
  metric2: number;
  metric3: number;
  metric4: number;
}
@Injectable({
  providedIn: 'root',
})
export class AdsDataService {
  private jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<AdsData[]> {
    return this.http.get<AdsData[]>(this.jsonURL);
  }
}
