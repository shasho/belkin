import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  headerClassList =  ['HeaderContainer'];
  navClassList = ['sidenav'];
  private router: Router;
  pageLocation = ['', '', '', '', '', '', '', '', '', '', '']
  headerText = ' תודה על הנכונות להצטרף ולסייע.'


  constructor(public el: ElementRef, router: Router) {
    this.router = router
  }

  ngOnInit() {
    console.log(this.router.url);
    if ('/' === this.router.url) this.pageLocation[0] = 'active';
    else if ('/%D7%90%D7%95%D7%93%D7%95%D7%AA' === this.router.url) this.pageLocation[1] = 'active';
    else if ('/%D7%94%D7%9E%D7%A6%D7%A2' === this.router.url) this.pageLocation[2] = 'active';
    else if ('/%D7%92%D7%9C%D7%A8%D7%99%D7%94' === this.router.url) this.pageLocation[3] = 'active';
    else if ('/%D7%AA%D7%A8%D7%95%D7%9E%D7%95%D7%AA' === this.router.url) this.pageLocation[4] = 'active';
    else if ('/%D7%A6%D7%95%D7%A8_%D7%A7%D7%A9%D7%A8' === this.router.url) this.pageLocation[5] = 'active';
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const yOffset = 0;
    const currYOffSet = window.pageYOffset;

    if (yOffset < currYOffSet) {
      this.headerClassList =  ['HeaderContainer', 'fixed-theme'];
    } else {
      this.headerClassList =  ['HeaderContainer'];
    }

  }

  openNav() {
    this.navClassList = ['sidenav', 'sidenav_open'];
  }

  closeNav() {
    this.navClassList = ['sidenav'];
  }


}
