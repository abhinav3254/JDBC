import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { PasswordModule } from 'primeng/password';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsCardComponent } from './components/dashboard/stats-card/stats-card.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { ChartModule } from 'primeng/chart';
import { RecentOrdersComponent } from './components/dashboard/recent-orders/recent-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    ProductComponent,
    StatsCardComponent,
    SummaryComponent,
    RecentOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    DropdownModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
