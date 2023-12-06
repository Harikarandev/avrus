import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  public sliderTitle: string = 'Browser';
  public sliderContents: any[] = [
    {
      title: 'browser',
      items: ['Chrome', 'Safari', 'Firefox'],
    },
    {
      title: 'mobiles',
      items: ['Apple']
    }
  ];
  
  currentIndex: number = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.sliderContents.length) % this.sliderContents.length;
    console.log('Current Index:', this.currentIndex);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.sliderContents.length;
    console.log('Current Index:', this.currentIndex);
  }
}
