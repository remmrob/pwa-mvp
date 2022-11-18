import { Component, OnInit } from '@angular/core';
import { CheckForUpdateService } from './modules/core/services/check-for-update.service';
import { HandleUnrecovableStateService } from './modules/core/services/handle-unrecovable-state.service';
import { LogUpdateService } from './modules/core/services/log-update.service';
import { PromptUpdateService } from './modules/core/services/prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isOnline: boolean;

  constructor(
    private logUpdateService: LogUpdateService,
    private checkForUpdateService: CheckForUpdateService,
    private promptUpdateService: PromptUpdateService,
    private handleUnrecovableService: HandleUnrecovableStateService
  ) {
    this.isOnline = false;
  }

  public ngOnInit(): void {
    this.updateOnlineStatus();

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info(`isOnline=[${this.isOnline}]`);
  }
}
