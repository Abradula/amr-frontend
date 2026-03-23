import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Root component
import { AppComponent } from './app.component';

// Pages (forms)
import { LimsComponent } from './pages/lims/lims.component';
import { WhonetComponent } from './pages/whonet/whonet.component';
import { AmuComponent } from './pages/amu/amu.component';
import { IotComponent } from './pages/iot/iot.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Routes
const routes: Routes = [
  { path: 'lims', component: LimsComponent },
  { path: 'whonet', component: WhonetComponent },
  { path: 'amu', component: AmuComponent },
  { path: 'iot', component: IotComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: '', redirectTo: '/lims', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    //AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }