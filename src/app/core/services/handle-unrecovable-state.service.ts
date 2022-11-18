import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class HandleUnrecovableStateService {
  constructor(private updates: SwUpdate) {
    this.updates.unrecoverable.subscribe((event) => {
      //TODO: Let the user reload the page for more control
      alert(
        'An error occurred that we cannot recover from:\n' +
          event.reason +
          '\n\nThe page will be reloaded.'
      );

      // Reload the page to update to the latest version.
      document.location.reload();
    });
  }
}
