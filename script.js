let questions = [   
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
 ];

function randomize(array){
    let current=array.length;
    let random;
    while(current!=0){
        random=Math.floor(Math.random()*current);
        current--;
        let temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}
let option1 = document.getElementsByClassName('optionend')[0];
let option2 = document.getElementsByClassName('optionend')[1];
let option3 = document.getElementsByClassName('optionend')[2];
let option4 = document.getElementsByClassName('optionend')[3];
let question = document.getElementsByClassName('question')[0];
let scorenumber = document.getElementsByClassName('scorenumber')[0];
let questioncounter = document.getElementsByClassName('questioncount')[0];
let currentQuestion = 0;
let score = 0;
let options = document.getElementsByClassName('option');
questions = randomize(questions);
let totalQuestions = questions.length;

function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    question.innerText = q.question;
    option1.innerText = q.choice1;
    option2.innerText = q.choice2;
    option3.innerText = q.choice3;
    option4.innerText = q.choice4;
}

loadQuestion(currentQuestion);
let optionselected = false;
Array.from(options).forEach(option => {
    option.addEventListener('click', () => {
        if (optionselected) return;
        optionselected = true;
        currentQuestion++;
        if (option.id == questions[currentQuestion-1].answer) {
        option.style.backgroundColor = 'green';
        score+=10;
        scorenumber.innerText = score;
        localStorage.setItem('score', score);
        }
        else{
            option.style.backgroundColor = 'red';
        }
        if (currentQuestion < totalQuestions) {
            setTimeout(() =>{ 
                loadQuestion(currentQuestion);
                questioncounter.innerText = `${currentQuestion+1}/${totalQuestions}`;
                option.style.backgroundColor = 'white';
                optionselected = false;
            }, 2000);
        }
        else{
            setTimeout(() =>{ 
                window.location.href='end.html'
            }, 2000);
        }
    });
});

