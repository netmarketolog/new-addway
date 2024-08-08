
if (!window.modalInitialized) {
  const modal = document.getElementById("modalHero");
 
  const span = document.getElementsByClassName("close")[0];
  const spanHero = document.getElementsByClassName("modal__close modal__close--hero")[0];

  // Проверяем состояние модального окна в localStorage
  const modalState = localStorage.getItem('modalHeroState');

  if (modalState !== 'closed') {
    window.onload = function() {
      setTimeout(function() {
        modal.style.display = "block";
      }, 15000); // 15000 миллисекунд = 15 секунд
    }
  }

  function closeModal() {
    modal.style.display = "none";
    localStorage.setItem('modalHeroState', 'closed');
  }

  if (span) {
    span.onclick = closeModal;
  }

  if (spanHero) {
    spanHero.onclick = closeModal;
  }

  // Telegram bot 
let botToken= null;
let chatId = null;

// Обработчик события для получения данных
window.addEventListener('firebaseDataLoaded', (event) => {
  botToken = event.detail.botToken;
  chatId = event.detail.chatId;
  console.log("botToken in modalFirst.js:", botToken);
  console.log("chatId in modalFirst.js:", chatId);
});

// Пример функции для отправки сообщения
const sendMessage = (name, phone, business, competitors) => {
  if (!botToken || !chatId) {
    console.error('botToken or chatId is not set');
    return;
  }

  const message = `Name: ${name}\nPhone: ${phone}\nBusiness: ${business}\nCompetitors: ${competitors}`;

  if (!message.trim()) {
    console.error('Message text is empty');
    alert('Message text is empty');
    return;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const data = {
    chat_id: chatId,
    text: message
  };

  console.log("Sending request to:", url);
  console.log("Request data:", data);

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

  document.querySelector('.modal__form--hero').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value || 'не заполнено';
    const phone = document.getElementById('phone').value || 'не заполнено';
    const business = document.getElementById('business').value || 'не заполнено';
    const competitors = document.getElementById('competitors').value || 'не заполнено';
    sendMessage(name, phone, business, competitors);
    closeModal();
    this.reset();
  });

  window.modalInitialized = true;
} 


  