import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-finder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './word-finder.component.html',
  styleUrls: ['./word-finder.component.css']
})
export class WordFinderComponent {
  inputText: string = '';
  wordLength: number | null = null;
  wordLengths: number[] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  uniqueWords: string[] = [];
  numColumns: number = 5;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustColumnCount();
  }

  ngOnInit() {
    this.adjustColumnCount(); // Adjust columns initially based on the screen size
  }

  adjustColumnCount() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      this.numColumns = 3; // Extra small screens (phones)
    } else if (screenWidth < 768) {
      this.numColumns = 4; // Small screens (tablets)
    } else if (screenWidth < 992) {
      this.numColumns = 5; // Medium screens (small laptops)
    } else {
      this.numColumns = 10; // Large screens (desktops)
    }
  }

  generateUniqueWords() {
    if (!this.wordLength || !this.inputText) {
      alert('Please enter text and select a word length.');
      return;
    }

    const pattern = new RegExp(`\\b\\w{${this.wordLength}}\\b`, 'g');
    const matches = this.inputText.match(pattern);

    this.uniqueWords = [...new Set(matches?.map(word => word.toUpperCase()) || [])].sort();
  }

  splitIntoRows(array: string[], columns: number): string[][] {
    const rows: string[][] = [];
    for (let i = 0; i < array.length; i += columns) {
      rows.push(array.slice(i, i + columns));
    }
    return rows;
  }
}
