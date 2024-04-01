console.log(1);
theFunc();


async function theFunc() {
  myPromise()
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(`/n/n ${result} /n/n`);
      console.log(3);
    })
    .catch((error) => {
      return console.log(`/n/n ${error} /n/n`);
    });
};

function myPromise() {
    return new Promise(async (resolve, reject) => {
        resolve( await fetch("https://dummy.restapiexample.com/api/v1/employees") );
    });
};

