import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { VideoService } from '../../services/video.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  videos: any[] = [];

  faHeart = faHeart;
  faBell = faBell;

  constructor(private videoService: VideoService){}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }
}
