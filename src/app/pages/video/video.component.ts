import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrlPipe } from '../../safe-url.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SafeUrlPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {
  video: any;

  constructor(
    private route: ActivatedRoute, 
    private videoService: VideoService, 
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log('ID do vídeo na URL:', id); 
      if (id) {
        this.loadVideo(+id);
      }
  }

  private loadVideo(id: number): void {
    this.videoService.getVideoById(id).subscribe(
      (data) => {
        this.video = data;
        console.log('Vídeo carregado:', this.video)
      },
      (error) => {
        console.error('Erro ao carregar o vídeo:', error);
      }
    );
  }
}
