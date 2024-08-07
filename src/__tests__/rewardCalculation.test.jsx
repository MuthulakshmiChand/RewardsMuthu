const { calculateRewards, processTransactions, rewardSummary, rewardSummaryTotal } = require('../utility/rewardsCalculation');


// Mock data for testing
describe('calculateRewards function', () => {

it('price amount between $50 and $100', () => {
    // 80 - 50 = 30 
    const points = calculateRewards(80);
    expect(points).toBe(30); 
});

  it('price amount greater than $100', () => {
    // (140 - 100) * 2 + 50 = 90 
      const points = calculateRewards(140);
      expect(points).toBe(130); 
  });  

  it('should handle amount less than $50', () => {
    // 30 - No points
      const points = calculateRewards(30);
      expect(points).toBe(0); 
  });  




})