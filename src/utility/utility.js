
//asc, desc can be also added
const sortByField = (data, fieldName, type) => {

  switch (type) {
      case "date":
        const x = data?.sort((a, b) => new Date(...b[fieldName], 'DD/MMM/YYY') - new Date(...a[fieldName], 'DD/MMM/YYY'))
          return (x);                
      case "string":
          return (data?.sort((a, b) => a[fieldName].toLowerCase() < b[fieldName].toLowerCase() ? -1 : 1));
      default:
          return (data?.sort((a, b) => b[fieldName] - a[fieldName]));
  }
  
  
}
  module.exports = { sortByField };