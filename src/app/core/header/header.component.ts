import {Component, OnInit} from '@angular/core';
import SideNavigationService from 'src/app/shared/services/side-navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private sideNavService: SideNavigationService) {}

  ngOnInit(): void {}

  /**
   * Handles the click-callback of the menu-button.
   *
   * @memberof HeaderBarComponent
   */
  toggleMenu(key: string): void {
    this.sideNavService.toggle(key);
  }
}
