import { BonusCalculatorService } from "./bonus-calc-service";

describe('Bonus Calculator', () => {
  it('gives a bonus for gold accts', () => {
    const bonusCalculator = new BonusCalculatorService();
    const balanceOnAccount = 10_000;
    const amountOfDeposit = 100;

    const bonus = bonusCalculator.calculateBonusFor(
      balanceOnAccount,
      amountOfDeposit
    );

    expect(bonus).toEqual(10);
  });

  it('does not give a bonus for standard accounts', () => {
    const bonusCalculator = new BonusCalculatorService();
    const balanceOnAccount = 9_999
    const amountOfDeposit = 100;

    const bonus = bonusCalculator.calculateBonusFor(
      balanceOnAccount,
      amountOfDeposit
    );

    expect(bonus).toEqual(0);
  });
});
