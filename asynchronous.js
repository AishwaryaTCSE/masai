
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data.");
        }
      }, 2000); 
    });
  }