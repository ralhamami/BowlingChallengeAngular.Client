import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BowlingScorecardComponent } from './bowling-scorecard/bowling-scorecard.component';

const routes: Routes = [
  { path: 'bowling', component: BowlingScorecardComponent },
  { path: '', redirectTo: '/bowling', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
