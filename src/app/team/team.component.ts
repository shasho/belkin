import {Component, OnInit} from '@angular/core';
import {BelkinBoxService} from '../core/services/belkin-box.service';
import {BelkinBox} from '../core/models/belkin-box.model';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ApiService} from '../core/services/api.service';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent  {

  
  constructor(private router: Router) { }
  

}
