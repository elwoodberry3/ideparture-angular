/** BUTTON [COMPONENT] iDeparture Design System v.3.0.1 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();
  @Input() text: string = '';
  @Input() icon: boolean = false;
  @Input() styleType: 'text-only' | 'text-icon' | 'filled' | 'outline' | 'button-icon' = 'text-only';
  @Input() backgroundColor: string | null = null; // Ensure this property exists
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Ensure size exists as well

  get buttonClasses(): string {
    switch (this.styleType) {
      case 'text-only':
        return 'w-full text-left text-accent-500 bg-transparent hover:text-accent-300';
      case 'filled':
        return 'w-full flex items-center justify-center bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-3 px-6 rounded transition-all';
      case 'outline':
        return 'border border-secondary-600 flex items-center justify-center hover:bg-secondary-500 text-secondary-600 font-medium py-1 px-6 rounded transition-all';
      case 'text-icon':
        return 'w-full text-left text-accent-600 bg-transparent hover:text-accent-300 inline-flex';
      case 'button-icon':
        return 'flex items-center justify-center bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-1 px-6 rounded transition-all';
      default:
        return '';
    }
  }
}
