import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FixtureElementUtils } from 'src/app/utils/testing';
import { BankAccountService } from 'src/services/bank-account.service';
import { BankingComponent } from './banking.component';

describe('Banking Component', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;
  let bankingServiceSpy: jasmine.SpyObj<BankAccountService>;
  let fixtureElementUtils: FixtureElementUtils;

  beforeEach(() => {
    bankingServiceSpy = jasmine.createSpyObj<BankAccountService>('tacos', ['getBalance', 'deposit', 'withdraw']);
    TestBed.configureTestingModule({
      declarations: [BankingComponent],
      providers: [{ provide: BankAccountService, useValue: bankingServiceSpy }]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    fixtureElementUtils = new FixtureElementUtils(fixture.debugElement);
    component = fixture.componentInstance;
    bankingServiceSpy.getBalance.and.returnValue(42);
    fixture.detectChanges();
  });
  describe('init', () => {
    it('has the appropriate balance displayed', () => {
      // const bankingDe = fixture.debugElement;
      // const bonusDe = bankingDe.query(By.css('[data-t-banking-balance]'));
      // const bonusEl = bonusDe.nativeElement as HTMLSpanElement;
      const bonusEl = fixtureElementUtils.getNativeElement<HTMLSpanElement>('[data-t-banking-balance]');
      expect(bonusEl.textContent).toEqual('$42.00');
    });

  });
  describe('making deposits', () => {
    beforeEach(() => {
      const amountEl = fixtureElementUtils.getNativeElement<HTMLInputElement>('[data-t-banking-amount-input]');
      amountEl.value = '42';
      const depositBtn = fixtureElementUtils.getNativeElement<HTMLButtonElement>('[data-t-banking-deposit-button]');
      bankingServiceSpy.getBalance.and.returnValue(99);
      depositBtn.click();
      fixture.detectChanges();
    });
    it('should call the service with the right amount', () => {
      expect(bankingServiceSpy.deposit).toHaveBeenCalledOnceWith(42);
    });
    it('should get the balance from the service and display it', () => {
      const bonusEl = fixtureElementUtils.getNativeElement<HTMLElement>('[data-t-banking-balance]');
      expect(bonusEl.textContent).toEqual('$99.00');
    });
    it('should clear out the input', () => {
      const amountEl = fixtureElementUtils.getNativeElement<HTMLInputElement>('[data-t-banking-amount-input]');
      expect(amountEl.value).toBe('');
    });

  });
  describe('making withdrawls', () => {

  });
});
