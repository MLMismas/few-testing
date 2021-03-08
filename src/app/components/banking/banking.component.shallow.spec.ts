import { BankAccountService } from 'src/services/bank-account.service';
import { BankingComponent } from './banking.component';

describe('The Banking Component', () => {
  describe('Initial', () => {
    it('displays the correct opening balance from the service', () => {
      const stubbedBankAccountService =
        jasmine.createSpyObj<BankAccountService>('service', ['getBalance']);
      stubbedBankAccountService.getBalance.and.returnValue(42);
      const component = new BankingComponent(stubbedBankAccountService);
      component.ngOnInit();

      // i want to read the balance and see that it is the right amount
      expect(component.balance).toEqual(42);
    });


  });
});
