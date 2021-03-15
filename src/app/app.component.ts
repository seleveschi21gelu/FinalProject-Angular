import { Edit } from './components/models/edit';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
//   styles:[`
//   .hero {
//     background-image: url('/assets/img/folder.jpeg') !important;
//     background-size: cover;
//     background-position: center center;
//   }
// `] 
})
export class AppComponent {
  title = 'final-project-ui'; 
myimage:string ="assets/images/folder.jpeg"
 
}
