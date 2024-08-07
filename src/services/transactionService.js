
const getTransactions = () => {

  
    return fetch('./transactions.json')
    .then((res) => {
      if (res.ok) {
        const purchaseDataResponse = res.json()
      //  logger.log('purchaseDataResponse: ', purchaseDataResponse)
        return purchaseDataResponse
      } else {
      //  logger.error(res.statusText)
        throw new Error(res.statusText)
      }
    })
    .catch((error) => {
   //   logger.error(error)
   throw new Error("not found")
    })
}

export default getTransactions
