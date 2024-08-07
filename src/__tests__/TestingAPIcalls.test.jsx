const { rewardSummary, rewardSummaryTotal, processTransactions, setTransactions } = require('../utility/rewardsCalculation');
import { render, screen, waitFor} from '@testing-library/react'
import Rewards from '../rewards'
import getTransactions from '../services/transactionService';
import {expect, jest, test} from '@jest/globals';
import { mockData, processedData, mockData1 } from './../data/mockdata'
import App from "./../App";
import RewardChild from './../rewardchild';




describe('fetchTransactions', () => {
    beforeEach(() => {
      global.fetch = jest.fn();
    });
   
    afterEach(() => {
      jest.resetAllMocks();
    });
   
    it('should fetch transaction data successfully asdsa', async () => {
      const mockData = mockData1;
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });
   
      const data = await getTransactions();
      expect(data).toEqual(mockData);
    });
    it('should handle empty transactions array', () => {
        const transactions = [];
        const result = processTransactions(transactions);
        expect(result).toEqual([]); // Empty array should result in empty output
    });
    it('should fetch transaction data successfully', async () => {
    //    const mockData = mockData1;
        global.fetch.mockResolvedValueOnce({
          ok: false,
          json: async () => JSON.parse` {
            
                "statusText": "error",
          }`,
        });    
      
        await expect(getTransactions()).rejects.toThrow('not found');
      });

      


it('should Process transactions', () => {
    const result = processTransactions(mockData);
    expect(result).toEqual(processedData); // Empty array should result in empty output
});
it('should handle rewardSummaryTotal method', () => {    
    const result = processTransactions(mockData); 
    const rewTot = rewardSummaryTotal(result);
    expect(rewTot[0]['customer_id']).toEqual('C00001'); 
    expect(rewTot[0]['reward']).toEqual(6180); 
    expect(rewTot[0]['customer_name']).toEqual("Lakshmi");   
    const transactionProcessed = setTransactions(result, null, null);
    const rewardSummary1 = rewardSummary(transactionProcessed);
    const rewardSummaryTotal1 = rewardSummaryTotal(transactionProcessed);

 render(<App/>);
 render (   <RewardChild rewardsTotalData = { rewardSummaryTotal1} rewardsData = { rewardSummary1 } transactionsDataRewards = {transactionProcessed} /> )

});
it('should handle rewardSummary method', () => {
    const result = processTransactions(mockData);
    const rewSum = rewardSummary(result);   
    expect(rewSum[0]['key']).toEqual("C00001-2024-3"); 
    expect(rewSum[0]['reward']).toEqual(1500);    
});




})
