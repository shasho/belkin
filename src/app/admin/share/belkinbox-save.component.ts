import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BelkinBox} from '../../core/models/belkin-box.model';
import {BelkinBoxService} from '../../core/services/belkin-box.service';


@Component({
  selector: 'belkinbox-save',
  templateUrl: './belkinbox-save.component.html'
})
export class BelkinBoxSaveComponent implements OnInit {
  constructor(private belkinboxService: BelkinBoxService) {
  }

  imageField: string = "";
  postURL :string = "blekinbox/"
  newObj:boolean // when adding new its true, for update is false
  belkinBox: BelkinBox
  errorMessage:string = ""
  synonym:string = ""

  @Input()  inBelkinBox: BelkinBox
  @Output() outBelkinBox = new EventEmitter<BelkinBox>();

  ngOnInit() {
      if (this.inBelkinBox) {
        this.belkinBox = this.inBelkinBox
      }
      else {
        this.belkinBox = new BelkinBox()
        this.newObj = true
        this.belkinBox.isActive = false
      }
  }

  showImage(showAddImage) {
    this.imageField = showAddImage
  }


  finishLoad(fileName) {
    this.belkinBox[this.imageField] = fileName
    this.imageField = ''
  }


  saveNew() {
    this.errorMessage = ''
      this.belkinboxService.save(this.belkinBox)
        .subscribe(data => {
            //console.log("save artist", data)
            this.outBelkinBox.emit(data)
          },
          (err) => {
            this.outBelkinBox.emit()
          });

  }


}
