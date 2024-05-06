document.getElementById('logout-link').addEventListener('click', function(e) {
    e.preventDefault();
    fetch('/logout', { method: 'GET' })
      .then(response => response.redirect('/'))
      .catch(error => console.error('Error:', error));
  });