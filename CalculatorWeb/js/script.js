const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json' );
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (/* request.readyState === 4 &&  */request.status === 200) { // 4-все данные пришли с сервера && 200 запрос успешно завершён
            console.log(request.response);
            const data = JSON.parse(request.response); //перевести данные в нормальный вид объекта
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3);
        } else {
            inputUsd.value = 'Какая-то ошибка';
        }
    });
});