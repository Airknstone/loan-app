/*
 Title: payment.components.ts
 Author: Professor Krasso
 Date: 07/24/2022
 Modified By: Allan Trejo
 Description: Assignment 9.2 Capstone Loan App
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: [ './payments.component.scss' ]
})
export class PaymentsComponent implements OnInit {
  @Input() monthlyPayment: Number;
  @Input() interestPaid: Number;
  constructor () { }

  ngOnInit(): void {
  }

}
