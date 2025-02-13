import { Component, Input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { NgTiltModule } from '@geometricpanda/angular-tilt'
import * as heroicons from '@ng-icons/heroicons/outline'

@Component({
	selector: 'app-card',
	imports: [NgIcon, NgTiltModule],
	providers: [provideIcons({ ...heroicons })],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
})
export class CardComponent {
	@Input('width') cardWidth = '400px'
	@Input() iconName!: string
	@Input() title!: string
	@Input() description!: string
	@Input() confirmButton!: boolean
	@Input() confirmButtonText!: string
	@Input() confirmButtonAction!: () => void
	@Input() cancelButton!: boolean
	@Input() cancelButtonText!: string
	@Input() cancelButtonAction!: () => void

	width = `width: ${this.cardWidth}`
}
