import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent implements OnInit {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const end = new Date("Jan 12, 2024 00:00:00").getTime();
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const x = setInterval(() => {
      let now = new Date().getTime();
      const difference = end - now;

      if (difference < 0) {
        clearInterval(x);
        this.renderer.setProperty(
          this.el.nativeElement.querySelector("#done"),
          "innerHTML",
          "We're married! 🎉"
        );
        return;
      }

      this.days = Math.floor(difference / days);
      this.hours = Math.floor((difference % days) / hours);
      this.minutes = Math.floor((difference % hours) / minutes);
      this.seconds = Math.floor((difference % minutes) / seconds);
    }, seconds);
  }
}
