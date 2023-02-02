import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Outbound, Root } from 'src/models/interface';

@Injectable({
  providedIn: 'root',
})
export class TrainsService {
  private url = './assets/results.json';

  constructor(private http: HttpClient) {}

  fetchTrainsData$: Observable<Outbound[]> = this.http.get<Root>(this.url).pipe(
    map(({ outbound }) => outbound),
    shareReplay(1),
    catchError((err) => {
      throw 'error in source. Details: ' + err;
    })
  );
}
