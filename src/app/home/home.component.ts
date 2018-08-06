import {Component, OnInit} from '@angular/core';
import {BelkinBoxService} from '../core/services/belkin-box.service';
import {BelkinBox} from '../core/models/belkin-box.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ApiService} from '../core/services/api.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  belkinBoxList: Array<BelkinBox> = [];
  temp = Array;
  math = Math;

  constructor(private belkinBoxService: BelkinBoxService,
              private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.belkinBoxService.getList({onlyActive: true, homePage: true}).subscribe(
      data => {
        this.belkinBoxList = data;
        console.log('belkinBoxList ', this.belkinBoxList);
        for (let i = 0; i < this.belkinBoxList.length; i++) {
          if (this.belkinBoxList[i].youTubeID) {
            this.belkinBoxList[i].videoURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.belkinBoxList[i].youTubeID);
          } else {
            if (this.belkinBoxList[i].imageName) {
              this.belkinBoxList[i].imageURL = this.sanitizer.bypassSecurityTrustUrl(environment.base_url + 'blekinbox/' + this.belkinBoxList[i].imageName);
            }
            if (this.belkinBoxList[i].urlLink) {
              this.belkinBoxList[i].linkURL = this.sanitizer.bypassSecurityTrustUrl(this.belkinBoxList[i].urlLink);
            }
          }
        }
      },
      error => {
        console.log('this.belkinBoxService err', error);
      }
    );
  }


}
