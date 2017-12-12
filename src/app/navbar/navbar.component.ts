import {Component, OnInit} from '@angular/core';
import {UserService} from "../_services/user.service";
import{User} from '../_models/user'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;


  constructor(private userService:UserService) {
    this.currentUser = userService.getCurrentUser();
  }

  ngOnInit() {
  }
}
