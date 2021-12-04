const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click',checkClickedAnser))

//正しい答え
const correctAnswers ={
    question1: 'A',
    question2: 'A',
    question3: 'D',
    question4: 'B',
    question5: 'B',
};

//liをクリックされた処理
function checkClickedAnser(event){
    //clickされたタグ
    const clickedAnswerElement =event.currentTarget;
    //選択した答え（A,B,C,D）
    const selectedAnser = clickedAnswerElement.dataset.answer;


    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    //正しい答え（A,B,C,D）
    const correctAnser = correctAnswers[questionId];

    //メッセージを入れる変数
    let message;

    //色を変更する変数
    let answerColorCode;

    //正しいかどうか判定
    if(selectedAnser === correctAnser){
        //正しい時
        message = 'おめでとう！正解';
        answerColorCode = '';
    } else{
        //間違った場合
        message = '残念！不正解です。';
        answerColorCode = 'red';
    }

   
    
    alert(message);

    //色を変更
    document.querySelector('#correct-ansewr').style.color = answerColorCode;

    //答えを表示
    document.querySelector('#section-correct-ansewr').style.display = 'block';
}





















