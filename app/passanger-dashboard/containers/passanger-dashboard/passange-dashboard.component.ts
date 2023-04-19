import { Component, OnInit } from "@angular/core";
import { Passanger } from "../../models/passanger.interface";

@Component({
  selector: "passanger-dashboard",
  styleUrls: ["passanger-dashboard.component.scss"],
  templateUrl: "./passanger-dashboard.component.html",
})
export class PassangerDashboardComponent implements OnInit {
  passangers: Passanger[];

  constructor() {}

  ngOnInit(): void {
    this.passangers = [
      {
        id: 1,
        fullname: "Binden",
        checkedIn: true,
        checkInDate: 1490742000000,
      },
      {
        id: 2,
        fullname: "Ursula",
        checkedIn: false,
        checkInDate: null,
        children: [
          { name: "Ted", age: 12 },
          { name: "Chloe", age: 7 },
        ],
      },
      {
        id: 3,
        fullname: "James",
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null,
      },
      {
        id: 4,
        fullname: "Luise",
        checkedIn: true,
        checkInDate: 1488412000000,
        children: [{ name: "Jessica", age: 1 }],
      },
      {
        id: 5,
        fullname: "Zofiaa",
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
    ];
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
