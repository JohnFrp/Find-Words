import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordFinderComponent } from './word-finder/word-finder.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Use CommonModule instead of BrowserModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordFinderComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected typo: 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'find-words';
}
