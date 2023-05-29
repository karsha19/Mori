document.querySelector('main footer button').addEventListener('click', function() {
  navigator.clipboard.writeText(location);
  function toggleNotification() {
    document.getElementById('notification').toggleAttribute('hidden');
  }
  toggleNotification();
  setTimeout(toggleNotification, 1500);
});