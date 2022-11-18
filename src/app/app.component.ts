import {Component, OnInit, ViewChild} from '@angular/core';
import {CheckForUpdateService} from './core/services/check-for-update.service';
import {HandleUnrecovableStateService} from './core/services/handle-unrecovable-state.service';
import {LogUpdateService} from './core/services/log-update.service';
import {PromptUpdateService} from './core/services/prompt-update.service';
import {MatSidenav} from '@angular/material/sidenav';
import SideNavigationService from './shared/services/side-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Contains a reference to the SideNav
   *
   * @type {MatSidenav}
   * @memberof AppComponent
   */
  @ViewChild('menuPanel', {static: true}) public menuPanel!: MatSidenav;

  constructor(
    private logUpdateService: LogUpdateService,
    private checkForUpdateService: CheckForUpdateService,
    private promptUpdateService: PromptUpdateService,
    private handleUnrecovableService: HandleUnrecovableStateService,
    private sideNavService: SideNavigationService
  ) {}

  ngOnInit(): void {
    this.sideNavService.setSidenav('menuPanel', this.menuPanel);
  }

  /**
   * Handles the click-callback of the menu-button.
   *
   * @memberof HeaderBarComponent
   */
  toggleMenu(key: string): void {
    this.sideNavService.toggle(key);
  }
}
