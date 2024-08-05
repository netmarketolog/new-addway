if (!window.modalInitialized) {
  const modal = document.getElementById("modalHero");
  const btn = document.getElementById("openModalBtn");
  const span = document.getElementsByClassName("close")[0];
  const spanHero = document.getElementsByClassName("closeHero")[0];

  
  window.onload = function() {
    setTimeout(function() {
      modal.style.display = "block";
    }, 150); // 15000 миллисекунд = 15 секунд
  }



  if (span) {
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  if (spanHero) {
    spanHero.onclick = function() {
      modal.style.display = "none";
    }
  }

  

  function closeModal() {
    modal.style.display = "none";
  }

  // Telegram bot 
  const botToken = document.body.getAttribute('data-bot-token');
  const chatId = document.body.getAttribute('data-chat-id');
  const sendMessage = (name, phone, business, competitors) => {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
      chat_id: chatId,
      text: `До Команди\nІм'я: ${name}\nТелефон: ${phone}\nТематіка: ${business}\nКонкуренти:${competitors}`
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


  document.querySelector('.modalHero-form').addEventListener('submit', function(event) {
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
