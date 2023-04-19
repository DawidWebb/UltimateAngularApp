import { Component, Input } from "@angular/core";
import { Passanger } from "../../models/passanger.interface";

@Component({
  selector: "passanger-count",
  templateUrl: "./passanger-count.component.html",
})
export class PassangerCountComponent {
  @Input()
  items: Passanger[];

  checkInCount(): number {
    if (!this.items) return;
    return this.items.filter((passanger: Passanger) => {
      return passanger.checkedIn;
    }).length;
  }
}
