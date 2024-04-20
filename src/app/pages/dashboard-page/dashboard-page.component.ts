import { Component, OnInit } from '@angular/core';

import { BaseLayoutComponent } from 'app/shared/layout/base-layout/base-layout.component';
import { DashboardStore } from 'app/store/dashboard/dashboard-store';

@Component({
  imports: [BaseLayoutComponent],
  standalone: true,
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {

  public constructor(public dashboardStore: DashboardStore) {}

  ngOnInit(): void {
    this.dashboardStore.loadTopArtists();
  }
}
