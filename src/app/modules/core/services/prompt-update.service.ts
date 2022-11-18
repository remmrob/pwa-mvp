import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptUpdateService {
  constructor(private updates: SwUpdate) {
    this.updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe((_) => {
        if (confirm("There is a new version for the WebApp available. Would you like to update?")) {
          // Reload the page to update to the latest version.
          document.location.reload();
        }
      });
  }
}
