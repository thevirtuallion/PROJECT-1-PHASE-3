import './style.css';

fetch ("https://picsum.photos/v2/list?page=2&limit=100")
  .then((res) => res.json())
  .then((listOfPhotos) => {
    const i = Math.floor(Math.random()* 100);

    console.log(i, listOfPhotos[i].id, listOfPhotos [i].download_url);

    const button = document.querySelector('#button');

    button.addEventListener("click", () => {
      location.reload();
    });

    document.querySelector("#app").innerHTML += `
    <h2> ${listOfPhotos[i].author} - ${listOfPhotos[i].id} </h2>
    
    <img src="${listOfPhotos[i].download_url}" alt="Random Picture" />
`
  });

  