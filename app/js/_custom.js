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
    const btnControl = document.querySelectorAll('.btn-icon');
    btnControl.forEach((current)=>{
        current.addEventListener('click', (e) => {
            current.classList.toggle('active');
            if(document.querySelector('.btn-message.active')){
                document.querySelector('.chat').classList.add('active');
                document.querySelector('.btn.msg').classList.add('active');
            }else{
                document.querySelector('.chat').classList.remove('active');
                document.querySelector('.btn.msg').classList.remove('active');
            }
            if(document.querySelector('.btn-call.active')){
                document.querySelector('.btn.call').classList.add('active');
            }else{
                document.querySelector('.btn.call').classList.remove('active');
            }
        });
    });
    document.querySelector('.close-chat').addEventListener('click',function (evt) {
        document.querySelector('.chat').classList.remove('active');
    });
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