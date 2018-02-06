import { Component, OnInit, Inject } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  errMess: string;
  feedbackcopy = null;
  contactType = ContactType;
  element1 = true;
  element2 = false;
  element3 = false;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long'
    },
    'lastname': {
      'required': 'Last name is required',
      'minlength': 'Last name must be at least 2 characters long',
      'maxlength': 'Last name cannot be more than 25 characters long'
    },
    'telnum': {
      'required': 'Telephone number is required',
      'pattern': 'Telephone number much contain only numbers.'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
    }
  };

  constructor(private feedbackservice: FeedbackService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // set/reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.route.params
      .switchMap((params: Params) => { this.element1 = false; this.element2 = true; return this.feedbackservice.submitFeedback(this.feedback) })
      .subscribe(feedback => { this.element2 = false; this.feedbackcopy = feedback; this.element3 = true; },
          errMess => this.errMess = <any>errMess);
    console.log();

    setTimeout(() => {
      this.element3 = false;
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: '',
        agree: false,
        contacttype: 'None',
        message: ''
      });
      this.element1 = true;
    }, 5000);
  }
};
