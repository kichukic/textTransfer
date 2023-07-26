const socket = io();

document.getElementById('message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const messageInput = document.getElementById('input-message');
  const message = messageInput.value.trim();
  if (message !== '') {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

socket.on('chat message', (msg) => {
  const messagesList = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = msg;
  messagesList.appendChild(li);
});
