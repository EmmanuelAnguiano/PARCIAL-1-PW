mystyle.css
.btncargar{
    color: yellow;
    background-color: blue;
}

.idusu{
    background-color: burlywood;
}

.idposts{
    padding: 10px;
}

body{
    background-color: cornsilk;
}

.btnver{
    background-color: violet;
}

.btnbor{
    background-color: red;
    position: relative;
    left: 500px;
}

.commen{
    margin: 5px;
    background-color: thistle;
    border: 2px solid red;
}

.tittlec{
    text-shadow: 2px 2px 5px red;
    text-decoration: underline blue;
}

.bodyc{
    color: blueviolet;
    background-color: khaki;
    opacity: 0.6;
}

.valjs{
    color: darkblue;
    background-color: yellow;
}

.comh3{
    text-decoration: underline 2px red;
}

.comh4{
    color: sienna;
}

html
<!DOCTYPE html>
<head><link rel="stylesheet" href="css/mystyle.css"></head>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btnusers" class="btncargar">CARGAR USUARIOS</button>
    <div id="usuarios" class="idusu"></div>

    <label>USUARIOS</label>

<select name="usu" id="usu">
</select>
<div id="posts" class="idposts"></div>


    <script src="js/jsonplaceholder.js"></script>
</body>
</html>


js
let btnusers=document.getElementById('btnusers');
  btnusers.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        let usuarios=document.getElementById('usuarios');
        let usu=document.getElementById('usu');
        console.log(json);
        let lista="";
        for(let i=0;i<json.length;i++)
            lista+="<option class='valjs' value='"+ json[i].id +"'>" + json[i].name + "</option>"
        usu.innerHTML=lista;

    });
  })

  let usu=document.getElementById('usu');
  usu.addEventListener('change',()=>{
      let userId=document.getElementById('usu').value;
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then((response) => response.json())
    .then((json) => {
        let posts=document.getElementById('posts');
        let lista="";
        lista+="<div id='iddatos'></div>"
        lista+="<button id='btndatos' onclick='cargardatos()' >VER DATOS</button>"
        for(let i=0; i<json.length; i++){
          lista+="<h3 class='tittlec'>" + json[i].title + "</h3>"
          lista+="<p class='bodyc'>" + json[i].body + "</p>"
          lista+="<button type='button' class='btnver' onclick='cargarcomm(" + json[i].id +")'>VER COMENTARIOS</button>"
          lista+="<div class='commen' id='comm" + json[i].id + "'></div>"
        }
        posts.innerHTML=lista;
    });
  } )

  function cargarcomm(postid){
    let comm=document.getElementById('comm' + postid);
   fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postid)
   .then((response)=> response.json())
   .then((json)=>{
      let lista="<button type='button' class='btnbor' onclick='borrarcomm("+ postid +")'>BORRAR </button>";
      for(let i=0; i<json.length; i++)
         lista+=`
         <div id="idcomm${json[i].id}"> 
            <h3 class='comh3'> ${json[i].name} </h3>
            <h4 class='comh4'> ${json[i].email} </h4>
            <p> ${json[i].body} </p>
         </div>
         `
      comm.innerHTML=lista;
   });
  }


  function borrarcomm(idcomm){
   let comments=document.getElementById(`comm${idcomm}`);
   comments.innerHTML="";
  }

  function cargardatos(){
    let datosposts=document.getElementById('usu').value;
    console.log(datosposts);
    fetch('https://jsonplaceholder.typicode.com/users/' + datosposts)
    .then((response)=> response.json())
    .then((json)=>{
        let lista=""
        let datosp=document.getElementById('iddatos');
        lista+=`
        <div id="iddatos${json[i].id}">
        <h3>${json[i].username}</h3>
        </div>
        `
        datosp.innerHTML=lista;
    });

  }
