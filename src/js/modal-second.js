import Inputmask from "inputmask";
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("modal__close modal__close--second")[0];

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
let botTokenSecond = null;
let chatIdSecond = null;

// Обработчик события для получения данных
window.addEventListener('firebaseDataLoaded', (event) => {
  botTokenSecond = event.detail.botToken;
  chatIdSecond = event.detail.chatId;
  console.log("botToken in modalSecond.js:", botTokenSecond);
  console.log("chatId in modalSecond.js:", chatIdSecond);
});

// Пример функции для отправки сообщения
const sendMessageSecond = (message) => {
  if (!botTokenSecond || !chatIdSecond) {
    console.error('botToken or chatId is not set');
    return;
  }

  const url = `https://api.telegram.org/bot${botTokenSecond}/sendMessage`;


  const data = {
    chat_id: chatIdSecond,
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

// Handle form submission
document.querySelector('.modal__form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  sendMessageSecond(name, phone);
  closeModal();
  this.reset();
});
 const phoneInput = document.getElementById('phone');
     const im = new Inputmask({ 
       mask: "+38 (999) 999-99-99",
       showMaskOnHover: false,
       showMaskOnFocus: true,
       onincomplete: function() {
         phoneInput.setSelectionRange(4, 4); 
       }
     });
     im.mask(phoneInput);

     phoneInput.addEventListener('focus', function() {
       setTimeout(function() {
         phoneInput.setSelectionRange(4, 4); 
       }, 0);
     });