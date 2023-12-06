document.querySelector('.nav-item #jeux-plateforme').addEventListener('click', function(event) {
  event.preventDefault();
  var dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});
