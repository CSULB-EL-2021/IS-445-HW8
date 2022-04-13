/*
 * Ex 2
 */


const form = document.querySelector('#form_search');

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const username = document.querySelector('#github_username').value;

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Not Found') return alert('User not found');
      document.querySelector('#result').innerHTML = `
        <div>
            <p><img src="${data.avatar_url}" class="img-fluid"></p>
            <table>
                <tr>
                  <td>Name</td>
                  <td>${data.name ?? 'Unknown'}</td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td>${data.blog ?? 'Unknown'}</td>
                </tr>
                <tr>
                  <td>Created</td>
                  <td>${data.created_at ?? 'Unknown'}</td>
                </tr>
            </table>
        </div>
      `;
    })
    .catch(err => console.log(err))

})