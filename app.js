
var button = document.getElementById('search');

button.addEventListener('click', () => {

  document.getElementById('input').addEventListener('change', pop);


function pop(){

var search = document.getElementById('input').value;

var originalName = search.split(' ').join('')

fetch('https://api.github.com/users/'+originalName)
.then(response => response.json())
.then((data) => {
document.getElementById('searchprofile').innerHTML = `
<img src="${data.avatar_url}"/>
<br>
<p>${data.login}</p>
<br>
<div class="status">
<p>Followers</p>
<p>Following</p>
<p>Repos</p>
</div>

<div class="status">
<p>${data.followers}</p>
<p>${data.following}</p>
<p>${data.public_repos}</p>
</div>

<div class="status">
<p>${data.location}</p>
<p>${data.company}</p>
</div>
  `
})
document.querySelector('.defaultview').style.display="none";
}
pop();
});
