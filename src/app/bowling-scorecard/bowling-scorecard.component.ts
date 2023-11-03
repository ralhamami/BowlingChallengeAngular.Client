import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  pinsKnockedDown: number | null = null;
  apiError: string | null = null;
  @ViewChild('shotInput', { read: ElementRef }) shotInput: ElementRef | null =
    null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFrames().subscribe({
      next: (response) => {
        this.frames = response;
      },
    });
  }

  makeShot() {
    this.apiService.postShot(this.pinsKnockedDown ?? 0).subscribe({
      next: (response) => {
        this.frames = response;
        this.apiError = null;
      },
      error: (errorResponse) => {
        this.apiError = errorResponse;
      },
    });

    if (this.shotInput !== null) {
      this.pinsKnockedDown = null;
      this.shotInput.nativeElement.focus();
    }
  }

  reset() {
    this.apiService.resetFrames().subscribe({
      next: (response) => {
        this.frames = response;
        this.apiError = null;
      },
      error: (errorResponse) => {
        this.apiError = errorResponse;
      },
    });

    if (this.shotInput !== null) {
      this.pinsKnockedDown = null;
      this.shotInput.nativeElement.focus();
    }
  }
}
