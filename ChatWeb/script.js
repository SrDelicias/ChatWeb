function appendMessage(text, isUser = false) {
  const chat = document.getElementById('chat');
  const msg = document.createElement('div');
  msg.classList.add('message');
  if (isUser) msg.classList.add('user');
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if (text === '') return;

  appendMessage('😎 Tú: ' + text, true);
  input.value = '';

  // Enviar al servidor Python
  try {
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    });
    const data = await res.json();
    appendMessage('👾 Bot: ' + data.response);
  } catch (err) {
    appendMessage('❌ Error al contactar con el servidor');
    console.error(err);
  }
}

document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') sendMessage();
});



