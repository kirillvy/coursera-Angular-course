import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import {Http, Response} from '@angular/http';
import { RestangularModule, Restangular} from 'ngx-restangular';

import { Observable } from 'rxjs/Observable';

import {baseURL} from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular,
  private processHTTPMsgService: ProcessHTTPMsgService) { }


  getPROMOTIONS(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }
  getPromotion(id: number): Observable<Promotion> {
      return this.restangular.all('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured:true})
    .map(dishes => dishes[0]);
  }
}
