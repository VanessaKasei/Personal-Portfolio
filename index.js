//const event = new Promise((resolve, reject)=> {
  //  var name = "vee";
    //if (name == "kasei") {
      //  resolve(name);

//    }
  //  else {
    //    reject("your name is "  + name);
    //}
//});

//event.then((name) => {
  //  console.log(name)
//})
//.catch((error) => {
    //console.log(error)
//}).finally(() => {
  //  console.log("Promise is finished")
//});


//const userLeft = true;
/*function watchTutorialPromise() {
    new Promise((resolve, reject) =>{
        if (userLeft == true) {
            reject( 'userLeft')
        }
        else {
            resolve('thumbs up and subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})*/



/*async function myDisplay() {
  let  myPromise  = new Promise((resolve, reject) => {
    resolve ("I love you!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();*/


/*function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log('making request to ${location}')
    if (location === 'Google') {
      resolve('Google says hi')
    } else {
      reject ('we can only talk to Google')
    }
  })
}
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('processing response')
    resolve('extra information + ${response}')
  })
}

makeRequest('facebook').then(response => {
  console.log('response received')
  return processRequest(response)
}).then(processedResponse => {
  console.log(processedResponse)
}).catch(error => {
  console.log(error)
})*/


/*async function doWork() {
  try{ 
    const response = await makeRequest('Google')
    console.log('response received')
    const processedResponse = await processedResponse(response)
    console.log(processedResponse)
  } catch (err) {
  console.log(err)
  }
}
 doWork()*/



 /*var person = {
  firstname : "vanessa",
  lastname : "kasei",
  age : 22,
  city : "nairobi",
  fullname : function() {
    return "my name is " + this.firstname + " " + this.lastname;
  }
 };


document.write(person.fullname());*/

 


/*class Person {
  constructor (name, hobby, location) { // when we create a "person" object, we will want the following properties
    this.name = name; // assigns values to the properties of the object being created
    this.hobby = hobby;
    this.location = location;
  }

  live(){
    console.log( "you live in " + this.location+ "!");
  }

}

let person1 = new Person ("vanessa", "drawing", "nairobi");
let person2 = new Person ("deus", "watching", "nakuru");

//console.log(person1.name)

person1.live()*/





/*<button type="button"
onclick="document.getElementById('demo').style.color = 'red'">
Click Me!</button>*/

