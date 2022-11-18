import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckForUpdateService {
  constructor(private appRef: ApplicationRef, private updates: SwUpdate) {
    // Allow the app to stabilize first, before starting
    // polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(async () => {
      try {
        const updateFound = await this.updates.checkForUpdate();
        console.log(
          updateFound
            ? 'A new version is available.'
            : 'Already on the latest version.'
        );
      } catch (err) {
        console.error('Failed to check for updates:', err);
      }
    });
  }
}
