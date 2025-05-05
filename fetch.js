
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    function findComplexWebsiteUsers() {
      const complexWebsiteUsers = data.filter(user => {
        return (user.website.match(/,/g) || []).length >= 2; 
      });

      console.log(`Users with complex websites: ${complexWebsiteUsers.length}`);

      complexWebsiteUsers.forEach(user => {
        console.log(JSON.stringify(user, null, 2)); ty
      });

      return complexWebsiteUsers;
    }

    findComplexWebsiteUsers(); 
  })
  .catch(error => console.error('Error fetching data:', error));
