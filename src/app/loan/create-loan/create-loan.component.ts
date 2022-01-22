import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.scss'],
})
export class CreateLoanComponent implements OnInit {
  loanForm: FormGroup = this.formBuilder.group({
    id: new FormControl(),
    type: new FormControl(),
    maximumLoan: new FormControl(),
  });

  loanId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private loanService: LoanService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  createLoan() {
    if (this.loanForm.valid) {
      if(this.loanId) {
        this.loanService.editLoan(this.loanId, { ...this.loanForm.value });
      } else {
        this.loanService.createLoan({ ...this.loanForm.value });
      }
      this.loanForm.reset();
      this.router.navigate(['/loans/list']);
    }
  }

  ngOnInit(): void {
    const loanId: any = this.ar.snapshot.paramMap.get('loanId');
    if(loanId) {
      this.loanId = parseInt(loanId);
      const loan = this.loanService.getLoanById(this.loanId);
      this.loanForm.patchValue(loan);
    }
  }
}
