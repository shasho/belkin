import {SafeUrl} from '@angular/platform-browser';

export class BelkinBox { //TODO should be interface
  mongoID?: string;
  title: string;
  homePage: boolean;
  priority: number;
  header: string;
  imageName:  string;
  content: string;
  contentFull: string;
  urlLink: string;
  youTubeID: string;
  isActive:  boolean;
  videoURL: SafeUrl;
  imageURL: SafeUrl;
  linkURL: SafeUrl;
  createdAt?: Date;
  updatedAt?: Date;
}
