const axios = require("axios");

let foo = async ()=>{
  let bar = await axios.get("https://www.alexanderbenko.dev/");
  return Promise.resolve(bar.data)

}

foo()
.then((res)=>{
  console.log(res)
})