
function txt(){

  document.getElementById('input').addEventListener('change', pop);


function pop(){

var search = document.getElementById('input').value;

var originalName = search.split(' ').join('')

fetch('https://api.github.com/users/'+originalName)
.then(response => response.json())
.then((data) => {

  document.getElementById('result').innerHTML = `
<img src="${data.avatar_url}"/>
<p>${data.login}</p>
<div class="status">
<p>${data.followers}</p>
<p>${data.following}</p>
</div>
  `
})

}
pop();
}


txt();
