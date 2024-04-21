import { Component } from '@angular/core';

import { BaseLayoutComponent } from 'app/shared/layout/base-layout/base-layout.component';

import { DashboardMainComponent } from 'app/components/dashboard/components/main.component';

@Component({
  imports: [
    BaseLayoutComponent,
    DashboardMainComponent,
  ],
  standalone: true,
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
