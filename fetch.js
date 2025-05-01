
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Convert response to JSON
      .then(users => {
        users.forEach(user => {
          console.log(user.name); 
        });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }
  
  
  fetchUsers();