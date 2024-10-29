/** ATOM/INPUT [COMPONENT] iDeparture Design System v.3.0.1 */

import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() styleType: 'default' = 'default';
  get inputClasses(): string {
    switch (this.styleType) {
      default:
        return 'w-full px-3 py-3 border border-neutral-400 bg-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-accent';
    }
  }
}
