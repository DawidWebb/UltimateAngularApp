import { Http } from "@angular/http";
import { Passanger } from "./models/passanger.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class PassangerdashboardService {
  constructor(private http: Http) {}

  getPassanger(): Passanger[] {
    return [
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
}
