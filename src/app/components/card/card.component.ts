import { Component, Input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { NgTiltModule } from '@geometricpanda/angular-tilt'
import { RouterLink } from '@angular/router'
import * as heroicons from '@ng-icons/heroicons/outline'
import * as lucide from '@ng-icons/lucide'

interface LinkButton {
	text: string
	url: string
	icon: string
	isExternal: boolean
}

@Component({
	selector: 'app-card',
	imports: [NgIcon, NgTiltModule, RouterLink],
	providers: [provideIcons({ ...heroicons, ...lucide })],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
})
export class CardComponent {
	@Input() iconName!: string
	@Input() title!: string
	@Input() description!: string
	@Input() confirmButton!: boolean
	@Input() confirmButtonText!: string
	@Input() confirmButtonAction!: () => void
	@Input() cancelButton!: boolean
	@Input() cancelButtonText!: string
	@Input() cancelButtonAction!: () => void
	@Input() linkButtons!: LinkButton[]

	getUrlDomain(url: string) {
		return new URL(url).hostname
	}
}
