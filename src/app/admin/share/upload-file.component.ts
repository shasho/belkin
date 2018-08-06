import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html'
})
export class UploadFileComponent {
  constructor(
  ) {}

  uploadURL:String = environment.upload_url
  imgURL:String

  @Input() postURL: string;
  @Output() fileName = new EventEmitter<string>();
  isSubmitting = false;
  uploader:FileUploader =  new FileUploader({url: this.postURL});

  ngOnInit() {
    //console.log("this.postURL",this.postURL,"uploadURL",this.uploadURL)
    this.uploader = new FileUploader({url: this.uploadURL +  this.postURL});
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      //console.log("ImageUpload:uploaded:", item, status);
      if (status==200) {
        this.imgURL = environment.base_url + this.postURL + item.file.name
        this.fileName.emit(item.file.name)
      }
      else this.fileName.emit("")
    };
  }

  delete() {
    this.fileName.emit("")
  }

}
