import { Component, OnInit, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthStore } from 'app/store/auth/auth.store';

@Component({
  standalone: true,
  selector: 'app-auth-callback-page',
  template: ``,
})
export class AuthCallbackPageComponent implements OnInit {
  public constructor(
    public authStore: AuthStore,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
) {
    effect(() => {
        if (this.authStore.accessToken()) {
            this.router.navigate([document.referrer]);
        }
    })
}

  ngOnInit(): void {
    let authCode: string = '';
    try {
        authCode = this.activatedRoute.snapshot.queryParams['code'];
    } catch (error) {
        console.error('error while parsing auth code');
    }

    this.authStore.authenticate(authCode);
  }
}