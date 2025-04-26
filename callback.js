
const fetchData = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  });
  
  fetchData
    .then(result => console.log(result))
    .catch(error => console.error(error));