import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
	lucideChevronDown,
	lucideChevronRight,
	lucideExternalLink,
} from '@ng-icons/lucide'

@Component({
	selector: 'app-navbar',
	imports: [RouterLink, NgIcon],
	providers: [
		provideIcons({ lucideChevronDown, lucideChevronRight, lucideExternalLink }),
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
	isLinkMenuExpanded = false

	toggleLinksMenu() {
		this.isLinkMenuExpanded = !this.isLinkMenuExpanded
	}
}
