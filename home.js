let httprequest = new XMLHttpRequest();
httprequest.open('GET',"https://jsonplaceholder.typicode.com/posts")
httprequest.send();
let posts=[]
httprequest.onreadystatechange = function(){
    if(httprequest.readyState==4){
        posts=JSON.parse(httprequest.response);
        getData();
    }
}

function getData()
{
    let data="" 
    for(let i=0; i<posts.length; i++){
        data +=`
        <li>
        <div>
        <p>user ID :${posts[i].userId}</p>
        <p>ID: ${posts[i].id}</p>
        <p>Title:  ${posts[i].title} .</p>
        <p> ${posts[i].body}</p>

        </div>
        </li>
        
        <hr>
        `
    } 
    document.querySelector("ul").innerHTML =data;

}
// console.log(httprequest.readyState);