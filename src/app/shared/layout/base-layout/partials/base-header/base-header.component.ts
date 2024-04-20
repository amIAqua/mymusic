import { Component } from '@angular/core';

import { AuthStore } from 'app/store/auth/auth.store';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrl: './base-header.component.css'
})
export class BaseHeaderComponent {
  public tokenData = this.authStore.tokenData();

  public constructor(public authStore: AuthStore) {}

  public getToken() {
    this.authStore.refreshAccessToken();
  }
}
