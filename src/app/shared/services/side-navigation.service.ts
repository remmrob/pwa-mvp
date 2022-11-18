import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import ensure from '@shared/utils/ensure';

@Injectable({
  providedIn: 'root',
})
export default class SideNavigationService {
  /**
   * Referenced SideNav
   *
   * @private
   * @type {MatSidenav}
   * @memberof SideNavigationService
   */
  private sideNavMap: Map<string, MatSidenav> = new Map();

  /**
   * indicates whether the sidenav can be toggled or not
   *
   * @private
   * @type {boolean}
   * @memberof SideNavigationService
   */
  public isLocked: boolean = false;

  /**
   * Sets the sidenav for which the actions should be done
   *
   * @param {MatSidenav} sidenav
   * @memberof SideNavigationService
   */
  public setSidenav(key: string, sidenav: MatSidenav) {
    this.sideNavMap.set(key, sidenav);
  }

  /**
   * Open the referenced sidenav
   *
   * @returns
   * @memberof SideNavigationService
   */
  public open(key: string) {
    return ensure(this.sideNavMap.get(key)).open();
  }

  /**
   * Close the referenced sidenav
   *
   * @returns
   * @memberof SideNavigationService
   */
  public close(key: string) {
    return ensure(this.sideNavMap.get(key)).close();
  }

  /**
   * Toggle the referenced sidenav
   *
   * @memberof SideNavigationService
   */
  public toggle(key: string): void {
    if (this.isLocked) return;
    ensure(this.sideNavMap.get(key)).toggle();
  }
}