const form = document.querySelector('form');
const reposList = document.getElementById('repos');

form.addEventListener('submit', event => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
      reposList.innerHTML = '';
      data.forEach(repo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = repo.html_url;
        a.target = '_blank';
        a.textContent = repo.name;
        li.appendChild(a);
        reposList.appendChild(li);
      });
    })
    .catch(error => {
      console.error(error);
    });
});