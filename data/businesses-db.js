
 const businesses = [
    {name: 'McDonals', type: 'restaurant'},
    {name: 'Boston Pizza', type: 'restaurant'},
    {name: 'No Frills', type: 'groceries'},
    {name: 'Wal-Mart', type: 'department store'},
    {name: "Mark's", type: 'retail'}

  ];
  
  module.exports = {
    getAll: function() {
      return businesses;
    }
  };