import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//container
import { PassangerDashboardComponent } from "./containers/passanger-dashboard/passange-dashboard.component";

//components
import { PassangerCountComponent } from "./components/passanger-count/passanger-count.component";
import { PassangerDetailComponent } from "./components/passanger-detail/passanger-detail.component";

@NgModule({
  declarations: [
    PassangerDashboardComponent,
    PassangerCountComponent,
    PassangerDetailComponent,
  ],
  imports: [CommonModule],
  exports: [PassangerDashboardComponent],
})
export class PassangerDashboardModule {}
