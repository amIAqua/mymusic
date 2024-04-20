import { Component } from '@angular/core';

import { BaseHeaderComponent } from 'app/shared/layout/base-layout/partials/base-header/base-header.component';

@Component({
  imports: [BaseHeaderComponent],
  standalone: true,
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent {

}
