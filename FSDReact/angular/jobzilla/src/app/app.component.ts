import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { JoblistingsComponent } from './components/joblistings/joblistings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobsComponent, JoblistingsComponent],
  //templateUrl: './app.component.html',
  template: `
    <header>
      <h1>Jobzilla</h1>

    </header>
 
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jobzilla';
}
