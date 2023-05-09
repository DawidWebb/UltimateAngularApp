import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

//container
import { PassangerDashboardComponent } from "./containers/passanger-dashboard/passange-dashboard.component";

//components
import { PassangerCountComponent } from "./components/passanger-count/passanger-count.component";
import { PassangerDetailComponent } from "./components/passanger-detail/passanger-detail.component";

//service
import { PassangerdashboardService } from "./passanger-dashboard.service";

@NgModule({
  declarations: [
    PassangerDashboardComponent,
    PassangerCountComponent,
    PassangerDetailComponent,
  ],
  imports: [CommonModule, HttpModule],
  exports: [PassangerDashboardComponent],
  providers: [PassangerdashboardService],
})
export class PassangerDashboardModule {}
