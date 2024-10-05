// object one 
let validation = {
    name: "abhiram",
    age: 22,
    course: "fullstack",
  
    fee: 35000,
    address: {
      doorno: 517,
      street: "near alair",
      mandal: "nellkudur",
    },
    pincode: 506101,
  };
  // object two
  let validation2 = {
      gender : "male",
      name:"abhishek"
  };
  // let newvar = Object.assign(validation,validation2);
  // console.log(newvar);
  validation.age=23;
  // console.log(validation.address.mandal)
  // if(!validation.hasOwnProperty("surname")){
  //     validation.surname="Kaleru"
  // }
  // console.log(validation);
  
  
  for(i in validation2){
    count=0
    for(j in validation){
      if(i===j){
        count++
      }
    }
    if(count==0){
      console.log(i ,"is not present")
      validation[i]=validation2[i]
    }
  
  }
  console.log(validation);