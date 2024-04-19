document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.getElementById('searchIcon');
  const searchInput = document.getElementById('searchInput');

  
  searchIcon.addEventListener('click', function() {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.style.width = '200px'; 
      searchInput.focus();
    } else {
      searchInput.style.width = '0'; 
    }
  });
});
