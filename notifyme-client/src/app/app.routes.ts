import { Routes } from '@angular/router';
import { PriceMonitorComponent } from './price-monitor/price-monitor.component';

export const routes: Routes = [
  { path: 'price', component: PriceMonitorComponent },
  { path: '', redirectTo: 'price', pathMatch: 'full' },
  { path: '**', redirectTo: 'price' }
];
