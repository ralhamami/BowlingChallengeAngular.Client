import { Component, OnInit } from '@angular/core';
import { Frame } from '../models/frames-response.model';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bowling-scorecard',
  templateUrl: './bowling-scorecard.component.html',
  styleUrls: ['./bowling-scorecard.component.css'],
})
export class BowlingScorecardComponent implements OnInit {
  frames?: Frame[];
  pinsKnockedDown: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFrames().subscribe({
      next: (response) => {
        this.frames = response;
      },
    });
  }

  makeShot() {
    this.apiService.postShot(this.pinsKnockedDown).subscribe({
      next: (response) => {
        this.frames = response;
      },
    });
  }
}
