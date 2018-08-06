import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {BelkinBoxService} from '../core/services/belkin-box.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  {

  @Input() headerText: string;

  errorMsg = ''
  errInput = ['', '', '']
  contact = {
    firstName: '',
    phone: '',
    email: ''
  };



  constructor(private belkinBoxService: BelkinBoxService,
        private router: Router) {
  }



  add2NewsLetter() {

    this.errorMsg = ''
    this.errInput = ['', '', '']
    if (this.contact.firstName.length < 2) {
      this.errInput[0] = 'input-err-box';
      this.errorMsg = 'שגיאות בנתונים';
    }

    const mobile = this.contact.phone.trim().replace('-', '')
    if (mobile === '' || mobile.length < 9 || mobile.length > 10 || mobile.substring(0, 1) !== '0') {
      this.errInput[1] = 'input-err-box';
      this.errorMsg = 'שגיאות בנתונים';
    }

    const email = this.contact.email.trim()
    if (email === '' || email.indexOf('@') < 1 || email.length < 4) {
      this.errInput[2] = 'input-err-box';
      this.errorMsg = 'שגיאות בנתונים';
    }

    if (this.errorMsg === '') {
      this.belkinBoxService.saveLead(this.contact).subscribe(
        data => {
          this.router.navigate(['תודה/']);
        },
        error => {
          console.log('this.belkinBoxService err', error);
          this.errorMsg = 'בעיה בשליחה נסה שנית';
        }
      );
    }

  }




}
