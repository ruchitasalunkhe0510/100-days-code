// function returnPromises() {
//   var newPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Promise Executed...");
//       resolve("Sample Data");
//     }, 3000);
//   });
// }

// function ExecuteFunction() {
//   var newData = "Rucha";
//   var getPromise = returnPromises();
//   console.log(newData);
// }
// ExecuteFunction();

//promise
//promise produce

const project = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 4, 6, 7];
    resolve(roll_no);
    // reject("Error while communication");
  }, 2000);
});
const getBiodata = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        let biodata = {
          name: "rucha",
          age: 21,
        };
        resolve(
          `My roll no is ${indexdata}. My name is ${biodata.name} and  I am ${biodata.age} years old.`
        );
      },
      2000,
      indexdata
    );
  });
};
//promise consume
project
  .then((roll_no) => {
    console.log(roll_no);
    return getBiodata(roll_no[1]);
  })
  .then((kuchbhi) => {
    console.log(kuchbhi);
  })
  .catch((error) => {
    console.log(error);
  });
