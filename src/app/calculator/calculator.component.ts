/*
 Title: calculator.components.ts
 Author: Professor Krasso
 Date: 07/24/2022
 Modified By: Allan Trejo
 Description: Assignment 9.2 Capstone Loan App
  Resources: Material Design https://material.angular.io/components
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: [ './calculator.component.scss' ]
})
export class CalculatorComponent implements OnInit {
  /* Variables */
  loanFormCalculator: FormGroup;

  monthlyPayment: number = 0;
  interestPaid: number = 0;
  /* Initialize Form */
  constructor (private fb: FormBuilder) { }

  /*
  Validators */
  ngOnInit(): void {
    this.loanFormCalculator = this.fb.group({
      loanAmount: [ '', Validators.required ],
      interestRate: [ '', Validators.required ],
      numOfYears: [ '', Validators.required ]
    });
  }
  /* On submit initialize variables from form data */
  onSubmit() {
    const formValues = this.loanFormCalculator.value;
    const loanAmount = parseFloat(formValues.loanAmount);
    const interestRate = parseFloat(formValues.interestRate);
    const numOfYears = parseFloat(formValues.numOfYears);

    /* Variables required for loan formula */
    const numOfMonths = (numOfYears * 12);
    const ratePerPeriod = ((interestRate / 100) / 12);

    /* Loan rate formula */
    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
    this.interestPaid = (this.monthlyPayment * numOfMonths) - loanAmount;
  }
  get form() {
    return this.loanFormCalculator.controls;
  }
}
