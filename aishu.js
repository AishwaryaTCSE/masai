
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    function calculateCompanyEmployees() {
      const uniqueCompanies = data.reduce((acc, user) => {
        acc.add(user.company.name);
        return acc;
      }, new Set()); 
      
      return uniqueCompanies.size;
    }

    console.log(`Total unique companies: ${calculateCompanyEmployees()}`);
  })
  .catch(error => console.error('Error fetching data:', error));
