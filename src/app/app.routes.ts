import type { Routes } from '@angular/router'
import { HomeComponent } from './views/home/home.component'
import { NotFoundComponent } from './views/not-found/not-found.component'

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
]
