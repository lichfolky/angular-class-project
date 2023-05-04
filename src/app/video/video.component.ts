import { Component, Input, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() videoId: string = "px7dr7ofHv0";
  url: string = "https://www.youtube.com/embed/px7dr7ofHv0";

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
  onReady(event: YT.PlayerEvent) {
    event.target.mute();
    event.target.playVideo();
  }

}
