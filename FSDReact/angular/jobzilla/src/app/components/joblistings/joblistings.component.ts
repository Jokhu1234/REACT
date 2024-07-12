import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListings } from '../../components/job-listings';
@Component({
  selector: 'app-joblistings',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="job">
    <h2 class="job-title">{{jobListings.title}}</h2>
    <h2 class="job-company">{{jobListings.company}}</h2>
    <h2 class="job-location">{{jobListings.location}}</h2>
    <p class="job-description">{{jobListings.description}}</p>

  </section>
  `,
  styleUrl: './joblistings.component.css'
})
export class JoblistingsComponent {
  @Input() jobListings!:JobListings;

}
