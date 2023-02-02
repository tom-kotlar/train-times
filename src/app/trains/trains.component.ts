import { Component, OnDestroy } from '@angular/core';
import { SingleJourneyFare } from 'src/models/interface';
import { TrainsService } from './trains.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.scss'],
})
export class TrainsComponent implements OnDestroy {
  singleJourneyFares!: SingleJourneyFare[];
  fersSubs!: Subscription;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private trainsService: TrainsService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.fersSubs = this.getTrainsData$.subscribe((data) =>
      data.map((value) => {
        this.singleJourneyFares = value.singleJourneyFares;
      })
    );
  }

  getTrainsData$ = this.trainsService.fetchTrainsData$;

  sortTrainByTimeAsc() {
    this.getTrainsData$ = this.getTrainsData$.pipe(
      map((data) =>
        data.sort(
          (a, b) =>
            new Date(a.arriveDateTime).getTime() -
            new Date(b.arriveDateTime).getTime()
        )
      )
    );
  }

  sortTrainByTimeDesc() {
    this.getTrainsData$ = this.getTrainsData$.pipe(
      map((data) =>
        data.sort(
          (a, b) =>
            new Date(b.arriveDateTime).getTime() -
            new Date(a.arriveDateTime).getTime()
        )
      )
    );
  }

  sortTicketsByPriceAsc() {
    this.singleJourneyFares.sort((a, b) => a.price - b.price);
  }

  sortTicketsByPriceDesc() {
    this.singleJourneyFares.sort((a, b) => b.price - a.price);
  }

  ngOnDestroy(): void {
    this.fersSubs.unsubscribe();
  }
}
