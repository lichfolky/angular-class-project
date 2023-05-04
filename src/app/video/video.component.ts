import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() title: string = "Animals";

  url: string = "https://www.youtube.com/embed/px7dr7ofHv0";


}
