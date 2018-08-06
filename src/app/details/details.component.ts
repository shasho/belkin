import { Component, OnInit } from '@angular/core';
import {BelkinBox} from '../core/models/belkin-box.model';
import {BelkinBoxService} from '../core/services/belkin-box.service';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../environments/environment';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  belkinBoxList: Array<BelkinBox> = [];
  temp = Array;
  math = Math;

  constructor(private belkinBoxService: BelkinBoxService,
              private router: Router,
              private sanitizer: DomSanitizer) {
    this.scrollToSectionHook();
  }

  ngOnInit() {

    this.belkinBoxService.getList({onlyActive: true}).subscribe(
      data => {
        this.belkinBoxList = data;
        console.log('belkinBoxList ', this.belkinBoxList);
        for (let i = 0; i < this.belkinBoxList.length; i++) {
          if (this.belkinBoxList[i].youTubeID) {
            this.belkinBoxList[i].videoURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.belkinBoxList[i].youTubeID);
          } else {
            if (this.belkinBoxList[i].imageName) {
              this.belkinBoxList[i].imageURL = this.sanitizer.bypassSecurityTrustResourceUrl(environment.base_url + 'blekinbox/' + this.belkinBoxList[i].imageName);
            }
            if (this.belkinBoxList[i].urlLink) {
              this.belkinBoxList[i].linkURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.belkinBoxList[i].urlLink);
            }
          }
        }

      },
      error => {
        console.log('this.belkinBoxService err', error);
      }
    );
  }

  private scrollToSectionHook() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          const tree = this.router.parseUrl(this.router.url);
          if (tree.fragment) {
            const element = document.querySelector('#' + tree.fragment);
            if (element) {
              setTimeout(() => {
                element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
              }, 10);
            }
          }
        }, 1000)
      }
    });
  }

}
