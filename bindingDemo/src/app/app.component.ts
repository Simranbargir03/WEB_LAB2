import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bindingDemo';

  name: string = 'SIMRAN';
  prn: string = '';
  address: string = '';
  profileImageUrl: string = 'assets/i1.png';
  submitted: boolean = false;
  submittedName: string = '';
  submittedPrn: string = '';
  submittedAddress: string = '';

  displayInfo(name: string, prn: string, address: string) {
    this.submitted = true;
    this.submittedName = name;
    this.submittedPrn = prn;
    this.submittedAddress = address;
  }
}
