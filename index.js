// fetch("https://www.google.com/", { mode: "no-cors" })
//   .then((response) => {
//     console.log(response);
//     return response.text();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const xhr = new XMLHttpRequest();
const url = "https://bar.other/resources/public-data/";

xhr.open("GET", url);
xhr.onreadystatechange = someHandler;
xhr.send();
