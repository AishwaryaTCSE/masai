// Fetching data from the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    function searchUser(username) {
      const user = data.find(user => user.username === username);
      if (user) {
        console.log(user); 
      } else {
        console.log('User not found'); 
      }
    }

    searchUser("Bret"); 

    function totalCompanyEmployees() {
      console.log(`Total Company Employees: ${data.length}`);
    }

    totalCompanyEmployees(); 
  })
  .catch(error => console.error('Error fetching data:', error));
