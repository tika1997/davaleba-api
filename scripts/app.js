//https://apiv1.biblusi.ge/api/author?book=1$random=1

fetch("https://apiv1.biblusi.ge/api/author?book=1$random=1")
  .then((response) => response.json())
   .then((data) => {
   let container = document.getElementById("container");
    data.data.forEach((author) => {
    container.innerHTML += `     
     <div class="card">
      <img src="${author.img}">
       <p>${author.fullname}</p>
        <p>${author.description}</p>
    
       </div>

       `;
   });
 });