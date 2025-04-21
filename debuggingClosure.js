
function createFunctionList() {
    let functions = [];
  
    for (var i = 0; i < 5; i++) {
      (function(index) {
        functions.push(function () {
          console.log("Index:", index);
        });
      })(i); 
    }
  
    console.log(functions);
  }
  