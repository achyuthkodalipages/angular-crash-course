import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.scss'],
})
export class CreateLoanComponent implements OnInit {
  loanForm: FormGroup = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    type: new FormControl(''),
    maximumLoan: new FormControl('', [
      Validators.required,
      Validators.min(10000),
    ]),
  });

  loanId!: number;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loanService: LoanService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  createLoan() {
    this.submitted = true;
    if (this.loanForm.valid) {
      if (this.loanId) {
        this.loanService
          .editLoan(this.loanId, { ...this.loanForm.value })
          .subscribe((response: any) => {
            console.log('Loan Updated');
            console.log(response);
          });
      } else {
        this.loanService
          .createLoan({ ...this.loanForm.value })
          .subscribe((response: any) => {
            console.log('Loan Created');
            console.log(response);
          });
      }
      this.loanForm.reset();
      this.router.navigate(['/loans/list']);
    }
  }

  ngOnInit(): void {
    const loanId: any = this.ar.snapshot.paramMap.get('loanId');
    if (loanId) {
      this.loanId = parseInt(loanId);
      this.loanService.getLoanById(this.loanId).subscribe((response) => {
        this.loanForm.patchValue(response);
      });
    }
  }
}
