import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "./component/header-component/header-component";
import { FooterComponent } from "./component/footer-component/footer-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-catalog';
}
