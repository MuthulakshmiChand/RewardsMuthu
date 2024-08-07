import { useState, memo } from 'react'
import { sortByField } from "./utility/utility";
// import { ErrorBoundary } from 'react-error-boundary';
function RewardChild(props) {
    const [custId, setCustId] = useState('')
    const [custIdMonth, setCustIdMonth] = useState('')
    
    // function MyFallbackComponent({ error, resetErrorBoundary }) {
    //     return (
    //       <div role="alert">
    //         <p>Something went wrong:</p>
    //         <pre>{error.message}</pre>
    //         <button onClick={resetErrorBoundary}>Try again</button>
    //       </div>
    //     )
    //   }
    const setCustIdMethod = (id) => {
        setCustId(id);
        setCustIdMonth('');
    }
    return (
        <>

{/* <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
    
    >  */}
            <div className="overAll">
            
                <div className='parentDiv'>
                 
                    <div className='floatLeft1'>
                        <div className='table-header total-rewards'>Total rewards </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>

                                    <th>Reward Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.rewardsTotalData && props.rewardsTotalData.length > 0 && sortByField(props.rewardsTotalData, 'reward', '').map((row, key) => {
                                    return (
                                        <tr  onClick={()=>setCustIdMethod(row.customer_id)} onMouseLeave={()=>setCustIdMethod('')} onMouseEnter={()=>setCustIdMethod(row.customer_id)} key={key}>
                                            <td >{row.customer_name}</td>

                                            <td className='rightAlign'>{row.reward}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className='floatLeft'>
                        <div className='table-header monthly-rewards'>User Monthly rewards </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Cust. Id</th>
                                    <th>Name</th>
                                    <th>Month & Year</th>
                                    <th>Reward Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByField(props.rewardsData, 'customer_name', 'string').map((row, key) => {
                                    return (
                                        <tr  onMouseLeave={()=>setCustIdMonth('')}  onMouseEnter={()=>setCustIdMonth(row.key)} className={row.customer_id === custId ? 'highlight' : undefined} key={key}>
                                            <td>{row.customer_id}</td>
                                            <td>{row.customer_name}</td>
                                            <td>{row.month} - {row.year}</td>
                                            <td className='rightAlign'>{row.reward}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="transactions">
                    <div className='table-header monthly-rewards'>Transactions</div>
                    <table className='tranTable'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Transaction Id</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Reward Points</th>
                                <th hidden>Month</th>

                            </tr>
                        </thead>
                        <tbody>
                            {sortByField(props.transactionsDataRewards, 'purchased_date', 'date')
                                .map((row, key) => {
                                    return (
                                        <tr className={row.key === custIdMonth ? 'highlight' : undefined} key={key}>
                                            <td>{key + 1}</td>
                                            <td>{row.transaction_id}</td>
                                            <td>{row.customer_name}</td>
                                            <td>{row.purchased_date}</td>
                                            <td>{row.purchased_product}</td>
                                            <td className='rightAlign'>${row.price.toFixed(2)}</td>
                                            <td className='rightAlign'>{row.reward}</td>
                                            <td hidden>{row.key}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                <div>

                </div>
            </div>
            {/* </ErrorBoundary> */}
        </>
    )
}
export default memo(RewardChild);