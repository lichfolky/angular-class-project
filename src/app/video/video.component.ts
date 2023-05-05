import { Component, Input, OnInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
let apiLoaded = false;

@Component({
  // template: '<youtube-player videoId="PRQCAL_RMVo"></youtube-player>',
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() videoId: string = "px7dr7ofHv0";
  playerVars = { 'autoplay': 1, 'controls': 0 };

  url: string = "https://www.youtube.com/embed/px7dr7ofHv0";
  player: YouTubePlayer | undefined;

  ngOnInit() {
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
    let player = event.target;
    player.mute();
  }
}
