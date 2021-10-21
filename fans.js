document.querySelector('button').onclick = addPost

function addPost() {
  let textMessage = document.getElementById('fan-message').value

  if (textMessage.length < 1 || textMessage.trim() == '') {
    alert('Введіть мінімум один символ')
  } else if (
    (textMessage.indexOf('>') > -1 && textMessage.indexOf('<') > -1) ||
    textMessage.indexOf('<') === 0
  ) {
    alert(
      'Будь ласка, не використовуйте у одному коментарі обидва символи "<" ">" одночасно, не починайте коментар с символу "<". Я з часом перепишу через map список повідомлень і тоді можна буде використовувати <>'
    )
  } else {
    document.querySelector('.lastHardcode').insertAdjacentHTML(
      'beforeend',
      '<div class="text-content text-content-fan "><div></div> <p class="paragraph">' +
        textMessage +
        '</p> <div class="fotter-message flex"><div class="date">' +
        new Date().toLocaleString([], {
          dateStyle: 'short',
          timeStyle: 'short',
        }) +
        '</div><div class="username">Guest</div></div></div>'
    )
  }
  document.getElementById('fan-message').value = null
}
