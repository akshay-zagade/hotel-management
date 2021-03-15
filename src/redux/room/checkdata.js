const axios = require("axios");
const rdata = require('../../resources/data/room-details.json')


function fetchData() {
  axios.get("http://localhost:3010/room-details.json")
    .then((response) => {
      console.log("Room Data", JSON.stringify(response.data,null,2));
    })
    .catch((error) => {
      console.log("Room Erro", error);
    });

  // axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error.message)
  //     });
}

fetchData();
