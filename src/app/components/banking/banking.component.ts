import { Component, OnInit } from '@angular/core';
import { BankAccountService } from 'src/services/bank-account.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {
  balance = 0;
  constructor(private service: BankAccountService) { }

  ngOnInit(): void {
    this.balance = this.service.getBalance();
  }

  deposit(amountEl: HTMLInputElement): void {
    this.doTx(amountEl, this.service.deposit.bind(this.service));
  }
  withdraw(amountEl: HTMLInputElement): void {
    this.doTx(amountEl, this.service.withdraw.bind(this.service));
  }

  private doTx(amountEl: HTMLInputElement, op: (amount: number) => void): void {
    op(amountEl.valueAsNumber);
    amountEl.value = '';
    amountEl.focus();
    this.balance = this.service.getBalance();
  }
}
