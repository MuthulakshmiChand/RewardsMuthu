import { useEffect, useState, memo, useMemo } from 'react'
import './rewards.css';
import getTransactions from './services/transactionService';
import { processTransactions, rewardSummary, rewardSummaryTotal, setTransactions } from './utility/rewardsCalculation';
import RewardChild from './rewardchild';

function Rewards() {

    const [originalTransactions, setOriginalTransactions] = useState([])
    const [rewardsData, setRewardsData] = useState([])
    const [rewardsTotalData, setRewardsTotalData] = useState([])
    const [inputs, setInputs] = useState({});


    //to make API call
    const fetchProductList = async () => {
        try {
            const purchaseDataObj = await getTransactions();
            setOriginalTransactions(processTransactions(purchaseDataObj?.result.data));
        } catch (error) {
            console.error('Error fetching product list:', error);
        }
    }

    // Fetch the transaction data list on component mount
    useEffect(() => {
        fetchProductList();
    }, []);


    //Calculate total reward customer wise and customer+month+year wise
    const getRewardsSummary = (resultProductData) => {
        setRewardsData([]);
        setRewardsTotalData([]);
        if (resultProductData && resultProductData?.length > 0) {
            setRewardsData(rewardSummary(resultProductData));
            setRewardsTotalData(rewardSummaryTotal(resultProductData));
        }
    }



    const monthlyUserRewards = useMemo(() => processTransactions(originalTransactions), [originalTransactions]);
    const transactionsData = useMemo(() => setTransactions(monthlyUserRewards, inputs.from, inputs.to), [monthlyUserRewards, inputs.from, inputs.to]);

    //re fetch transaction list
    const refresh = () => {
        fetchProductList();
    }

    //date change event handling
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    //calculate reward total if change in transaction data
    useEffect(() => {
        getRewardsSummary(transactionsData);
    }, [transactionsData]);

    return (
        <>
            <div className='formSection'>
                <form onSubmit={handleChange}>
                    <label>From:
                        <input
                            type="date"
                            name="from"
                            value={inputs.from}
                            onChange={handleChange}
                        />
                    </label>
                    <label>To:
                        <input
                            type="date"
                            name="to"
                            value={inputs.to}
                            onChange={handleChange}
                        />
                    </label>
                    <button onClick={() => refresh()}>
                        Reset
                    </button>

                    <h3 className="lastthree" hidden={inputs.from !== undefined && inputs.to !== undefined} > Last three months Transactions</h3>
                    {/* <input type="submit" /> */}
                </form>
            </div>
            <RewardChild rewardsTotalData={rewardsTotalData} rewardsData={rewardsData} transactionsDataRewards={transactionsData} />
        </>
    )
}

export default memo(Rewards);
