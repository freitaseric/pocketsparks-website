import type { Routes } from '@angular/router'
import { HomeComponent } from './components/views/home/home.component'
import { DownloadComponent } from './components/views/download/download.component'
import { NotFoundComponent } from './components/views/not-found/not-found.component'

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'download',
		component: DownloadComponent,
	},

	{
		path: '**',
		component: NotFoundComponent,
	},
]
