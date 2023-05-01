import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() heading = '';
  @Input() subheading = '';
  @Input() content = '';
  @Input() image = '';
}


