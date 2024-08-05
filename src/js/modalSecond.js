const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("closeSecondModal")[0];

// Открываем модалку при клике на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закрываем модалку при клике на крестик
span.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модалку при клике вне её
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function closeModal() {
  modal.style.display = "none";
}

// Получаем токен бота и ID чата из атрибутов data-*
const botToken = document.body.getAttribute('data-bot-token');
const chatId = document.body.getAttribute('data-chat-id');

const sendMessage = (name, message) => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const data = {
    chat_id: chatId,
    text: `До Команди\nІм'я: ${name}\nТелефон: ${message}`
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message. Error: ' + data.description);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending message');
  });
};

// Handle form submission
document.querySelector('.modal-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  sendMessage(name, phone);
  closeModal();
  this.reset();
});