document.querySelector('button').onclick = addPost

function addPost() {
  let textMessage = document.getElementById('fan-message').value
  let currentDate = new Date()

  document.querySelector('.lastHardcode').insertAdjacentHTML(
    'afterend',
    '<div class="text-content text-content-fan "><div>' +
      textMessage +
      '</div> <p class="paragraph"></p> <div class="fotter-message flex"><div class="date">' +
      currentDate.toLocaleString([], {
        dateStyle: 'short',
        timeStyle: 'short',
      }) +
      '</div><div class="username">Guest</div></div></div>'
  )
  document.getElementById('fan-message').value = null
}
