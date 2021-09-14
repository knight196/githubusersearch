
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
<br>
<p>${data.login}</p>
<br>
<div class="status">
<p>Followers ${data.followers}</p>
<p>Following ${data.following}</p>
<p>Repos ${data.public_repos}</p>
</div>
<div class="status">
<p>${data.location}</p>
<p>${data.company}</p>
</div>
  `
})

}
pop();
}


txt();
