import { Component } from '@angular/core';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentRoute = '';
  showFooter = true;
  toggleSidebar = false;
  toggleSettings = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      // if (event instanceof NavigationStart) {
      //   console.log('Route change detected');
      // }
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute === '/profile') {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }

        // console.log(this.currentRoute);
      }
    });
  }
  sidebar_toggler() {
    this.toggleSidebar = !this.toggleSidebar;
  }
  Settings_toggler() {
    this.toggleSettings = !this.toggleSettings;
  }
}
