import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mybool: boolean;
  title = 'Ems-chain';

  constructor(private router: Router) {
    let recex = new RegExp("(\\/(login))+[^]*");
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (recex.test(event.url)) {
          this.mybool = false;
        }else{
          this.mybool = true;
        }
      }
    });

  }

  ngOnInit() {
  }
}
