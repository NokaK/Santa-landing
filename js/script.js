const bMenu = document.getElementById('burger-menu');
const menuDiv = document.getElementById('menu-div');

bMenu.addEventListener('click', function () {
    if (menuDiv.style.display === "none") {
        menuDiv.style.display = "block";
      } else {
        menuDiv.style.display = "none";
      }
});

window.addEventListener('mouseup', function(e) {
    if (e.target != menuDiv) {
        menuDiv.style.display = "none";
    }
});

// ----- chatbot ------ 
document.querySelector('.chatbot__btn').addEventListener('click', (e) => {
  let child = e.currentTarget.querySelector('div');

  if (child.className == "chatbot__open__btn") {
    child.className = "chatbot__close__btn"
    document.getElementById('chatbotIframe').setAttribute('style', 'display: block; width: 370px;height: 480px;')

  } else {
    child.className = "chatbot__open__btn"
    document.getElementById('chatbotIframe').setAttribute('style', 'display: none');
  }
});
let btns = document.querySelectorAll('button')

btns.forEach(btn => {
  btn.addEventListener('click', ()=> {
    let chatBtn = document.querySelector('.chatbot__open__btn');
    console.log(chatBtn);
    if(chatBtn) {
      chatBtn.className = "chatbot__close__btn"
    document.getElementById('chatbotIframe').setAttribute('style', 'display: block; width: 370px;height: 480px;')
    }
  })
}) 
  // addEventListener('click', () => {
  // let btn = document.querySelector('.chatbot__open__btn');
  // if (btn) {
    // btn.className = "chatbot__close__btn"
    // document.getElementById('chatbotIframe').setAttribute('style', 'display: block; width: 370px;height: 480px;')
  // }
  // console.log(btn);
// })

// -------- close chat button click event ------- //
// const closeBtn = document.querySelector('.chatbot__close__btn');
// closeBtn.addEventListener('click', function() {
//   document.getElementById('chatbotIframe').setAttribute('style', 'display: none');
// })