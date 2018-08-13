import {Component, OnInit} from '@angular/core';
import {BelkinBoxService} from '../core/services/belkin-box.service';
import {BelkinBox} from '../core/models/belkin-box.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ApiService} from '../core/services/api.service';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  errorMsg = ''
  errInput = ['', '', '']
  contact = {
    firstName: '',
    phone: '',
    email: '',
    remark: ''
  };

  constructor(private belkinBoxService: BelkinBoxService,
              private router: Router) { }

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
      console.log('belkinBoxService.saveLead', this.contact)
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
