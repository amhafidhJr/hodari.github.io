import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  closeOffcanvasMenu(): void {
    // Use JavaScript to close the offcanvas menu by toggling the 'show' class
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    if (offcanvasNavbar) {
      offcanvasNavbar.classList.remove("show");
    }
  }
}
