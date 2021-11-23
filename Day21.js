function returnPromises() {
  var newPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Executed...");
      resolve("Sample Data");
    }, 3000);
  });
}

function ExecuteFunction() {
  var newData = "Rucha";
  var getPromise = returnPromises();
  console.log(newData);
}
ExecuteFunction();
