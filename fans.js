document.querySelector('button').onclick = addPost

function addPost() {
  let textMessage = document.getElementById('fan-message').value

  let currentDate = new Date()

  if (textMessage.length < 1 || textMessage.trim() == '') {
    alert('Введіть мінімум один символ')
  } else if (textMessage.indexOf('>') > -1 && textMessage.indexOf('<') > -1) {
    alert(
      'Будь ласка, не використовуйте теги у коментарях. Я з часом перепишу через map список повідомлень і тоді можна буде використовувати <>'
    )
  } else {
    document.querySelector('.lastHardcode').insertAdjacentHTML(
      'beforeend',
      '<div class="text-content text-content-fan "><div></div> <p class="paragraph">' +
        textMessage +
        '</p> <div class="fotter-message flex"><div class="date">' +
        currentDate.toLocaleString([], {
          dateStyle: 'short',
          timeStyle: 'short',
        }) +
        '</div><div class="username">Guest</div></div></div>'
    )
  }
  document.getElementById('fan-message').value = null
}
