document.addEventListener("DOMContentLoaded", function() {
  // Копирование ссылки при нажатии на кнопку
  const copyLink = document.querySelector('.link');
    document.querySelector('.copy-link').addEventListener('click',function () {
            if (document.selection) {
                var range = document.body.createTextRange();
                range.moveToElementText(copyLink);
                range.select().createTextRange();
                document.execCommand("Copy");

            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(copyLink);
                window.getSelection().addRange(range);
                document.execCommand("Copy");
                console.log('copy');
            }
    });
    // Клик на кнопки
    const btnControl = document.querySelectorAll('.btn');
    btnControl.forEach((current)=>{
        current.addEventListener('click', (e) => {
            current.classList.toggle('active');
            if(document.querySelector('.btn-message.active')){
                document.querySelector('.chat').classList.add('active');
            }else{
                document.querySelector('.chat').classList.remove('active');
            }
        });
    });
    // Скролл сообщений
    const messageContainer = document.querySelector(".messages-container");
    messageContainer.addEventListener("wheel", function(event) {
        /*Mouse wheel scrolled down*/
        if (event.deltaY > 0)
            messageContainer.scrollTop += 30;

        /*Mouse wheel scrolled up*/
        else
            messageContainer.scrollTop -= 30;
    }, false);
    // Добавление новой кнопки на мобильных устройствах
    const buttonScreen = document.querySelector('.btn-screen');
    const windowWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    function changeButton(e) {
        const resizeWidth = e.target.outerWidth;
        if(resizeWidth < 891){
            buttonScreen.classList.add('btn-more');
            buttonScreen.classList.remove('btn-screen');
        }else{
            buttonScreen.classList.remove('btn-more');
            buttonScreen.classList.add('btn-screen');
        }

    }
    if(windowWidth < 891){
        buttonScreen.classList.add('btn-more');
        buttonScreen.classList.remove('btn-screen');
    }else{
        buttonScreen.classList.remove('btn-more');
        buttonScreen.classList.add('btn-screen');
    }
    window.addEventListener('resize',changeButton);
    if(document.querySelector('.control.hidden')){
        document.querySelector('.user-container').style.height = '';
    }
});