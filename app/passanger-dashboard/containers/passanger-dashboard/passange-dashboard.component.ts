import { Component, OnInit } from "@angular/core";
import { Passanger } from "../../models/passanger.interface";
import { PassangerdashboardService } from "../../passanger-dashboard.service";

@Component({
  selector: "passanger-dashboard",
  styleUrls: ["passanger-dashboard.component.scss"],
  templateUrl: "./passanger-dashboard.component.html",
})
export class PassangerDashboardComponent implements OnInit {
  passangers: Passanger[];

  constructor(private passangerService: PassangerdashboardService) {}

  ngOnInit(): void {
    this.passangers = this.passangerService.getPassanger();
  }

  handleRemove(event: Passanger) {
    this.passangers = this.passangers.filter((item: Passanger) => {
      return item.id !== event.id;
    });
  }

  handleEdit(event: Passanger) {
    this.passangers = this.passangers.map((item: Passanger) => {
      if (item.id === event.id) {
        item = Object.assign({}, item, event);
      }
      return item;
    });
  }
}
