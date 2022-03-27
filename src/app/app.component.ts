import { Component, OnInit } from '@angular/core';
import { ObservableEventsService } from 'dataprotection';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(private _sObservableEventService: ObservableEventsService) {

  }

  ngOnInit(): void {

  }

  recuperarEvento() {
    debugger;
    // window.addEventListener('addToCart', (event) => {
    //   console.log(event);
    // });
    const data = this._sObservableEventService.subscribeEvent('event');
  }


}
