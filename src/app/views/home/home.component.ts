import { Component } from '@angular/core'
import { NgxTypedWriterComponent } from 'ngx-typed-writer'
import { CardComponent } from '../../components/card/card.component'

@Component({
	selector: 'app-home',
	imports: [NgxTypedWriterComponent, CardComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
