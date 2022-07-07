import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGooglePlusG, faYoutube, faInstagram  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGooglePlusG = faGooglePlusG ;
  faYoutube = faYoutube  ;
  faInstagram = faInstagram;


  constructor() { }

  ngOnInit(): void {
  }

}
