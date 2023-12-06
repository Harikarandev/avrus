import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { ChartComponent } from 'src/components/chart/chart.component';
import { SliderComponent } from 'src/components/slider/slider.component';
import { RecentsComponent } from 'src/components/recents/recents.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ChartComponent,
    SliderComponent,
    RecentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
