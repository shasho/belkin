import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';

@Component({
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.css']
})
export class AdminCmsComponent implements OnInit {

  showAddNew: boolean = false;
  showList: boolean = false;
  isAuthenticated: boolean;
  errorMsg: string =  ''
  okMsg: string =  ''


  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        // set the topic list accordingly
        if (!authenticated) this.router.navigateByUrl('/login');
      }
    );
  }

  addNew() {
    this.showAddNew = true
    this.showList = false
  }

  getList() {
    this.showList = true
    this.showAddNew = false
  }


  resetShow() {
    this.showAddNew = false
    this.showList = false
  }

  afterSaveObject(obj: Object) {
    this.errorMsg = ''
    this.okMsg = ''
    if (obj && obj["mongoID"]) {
      this.showAddNew = false
      this.okMsg = 'הרכיב נשמר'
    }
    else this.errorMsg = 'בעיה בשמירה, שם כפול'
  }

  afterListFinish(finish) {
    this.showList = !finish
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}

