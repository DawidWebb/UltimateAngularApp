import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { PassangerDashboardModule } from "./passanger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, PassangerDashboardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
