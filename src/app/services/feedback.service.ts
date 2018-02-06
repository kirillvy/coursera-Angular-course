import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';
import {Http, Response} from '@angular/http';
import { RestangularModule, Restangular} from 'ngx-restangular';


import { Observable } from 'rxjs/Observable';


import {baseURL} from '../shared/baseurl';
import {ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable()
export class FeedbackService {


  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback);
  }
}
