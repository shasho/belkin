import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {BelkinBox} from '../models/belkin-box.model';
import {catchError, map} from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class BelkinBoxService {
  constructor (
    private http: HttpClient,
    private apiService: ApiService
  ) {}


  get(slug): Observable<BelkinBox> {
    return this.apiService.get('/belkin-boxs/one/' + slug)
      .pipe(map(data => data.belkinBox));
  }

  getList(filter): Observable<BelkinBox[]> {
    return this.apiService.get('/belkin-boxs/list?', filter  )
      .pipe(map(data => data.belkinBoxList));
  }

  getListHome(): Observable<any> {
    return this.apiService.get('/belkin-boxs/listHome')
      .pipe(map(data => data));
  }

  save(belkinBox): Observable<BelkinBox> {
    return this.apiService
      .post(`/belkin-boxs`,{belkinBox: belkinBox})
      .pipe(map(data => data.belkinBox));
  }

  saveLead(contact): Observable<any> {
    const urlReq = 'https://new.odialer.com/api_dialer/api/general/addNew?project=belkin&firstName=' +
        contact.firstName + '&phone=' + contact.phone + '&email=' + contact.email + '&remark=' + contact.remark
    //const urlReq = 'http://localhost:3000/api/general/addNew?firstName=' + contact.firstName + '&phone=' + contact.phone + '&email=' + contact.email
    return this.apiService.pureGet(urlReq)
      .pipe(map(data => data));
  }

}
