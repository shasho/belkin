import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BelkinBoxService} from '../../core/services/belkin-box.service';
import {BelkinBox} from '../../core/models/belkin-box.model';


@Component({
  selector: 'belkinbox-list',
  templateUrl: './belkinbox-list.component.html',
  styleUrls: ['obj.component.less'],
})

export class BelkinBoxListComponent implements OnInit {
  constructor(private belkinBoxService: BelkinBoxService) {
  }

  @Output() finish = new EventEmitter<boolean>();

  belkinBoxList: Array<BelkinBox> = []
  showDetails:boolean = false
  curDetails:String
  badMessage:String = "";
  goodMessage:String = "";
  search:String = ""
  onlyActive:Boolean = true

  ngOnInit() {
    this.belkinBoxService.getList({onlyActive: false}).subscribe(
      data => {
        this.belkinBoxList = data
      },
      error => {
        console.log("this.belkinBoxService err",error)
      }
    );
  }


  boxIsOpen(obj: Object): boolean {
    return this.showDetails && this.curDetails == obj['mongoID'];
  }

  show(obj: Object) {
    this.badMessage = "";
    this.goodMessage = "";
    if (this.curDetails == obj['mongoID']) {
      // same lead
      this.showDetails = !this.showDetails;
    } else {
      this.showDetails = true;
      this.curDetails = obj['mongoID'];
    }
  }

  afterSave(obj: Object) {
    this.badMessage = "";
    this.goodMessage = "";
    if (obj["mongoID"]) {
      this.showDetails = false
      this.goodMessage = "הרכיב נשמר"
    }
    else this.badMessage = "בעיה בשמירה, שם כפול"
  }

  gridLineClass(obj: Object): String {
    if (this.boxIsOpen(obj)) return 'open-grid-line'
    else if (obj["isActive"]) return 'row-line-purchase';
    else if (obj["hasEvent"]) return 'row-line-return';
  }


}
