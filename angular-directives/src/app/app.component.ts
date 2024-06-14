import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showElement: boolean = true;
  fruits: string[] = ['Apple', 'Banana', 'Orange','Cherry','Blueberry','WaterMelon'];
  fruit: string = 'Apple';
  condition: string = 'four';
}
