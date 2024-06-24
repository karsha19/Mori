function toggleNotification() {
  document.getElementById('notification').toggleAttribute('hidden');
}

document.querySelector('main footer button').addEventListener('click', function() {
  navigator.clipboard.writeText(location);
  toggleNotification();
  setTimeout(toggleNotification, 2000);
});
