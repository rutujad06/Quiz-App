let currentCategory= '';
let currentQuestionIndex = 0;

let score = 0; 
let startTime, endTime;
let timerInterval;

const questions = {
    "Html" : [
        {
            question : "What is the default value of type attribute?",
            options : ["A","a","1","I"],
            answer : 3
        },
        {
            question : "Which of the following attributes is used to modify the order listing type in the ordered list?",
            options : ["method","type","list_type","List_method"],
            answer : 1
        },
        {
            question : "Which of the following elements is used to specify audio link?",
            options : ["<src>","<source>.","<path>","<audio src>"],
            answer : 2
        },
        {
            question : "Which of the following features can be included in the HTML iframe?",
            options : ["Autoplay","Mute","Loop","All the above"],
            answer : 3
        },
        {
            question : "Which of the following attributes is used to add styles to table cells?",
            options : ["style","styles","tablestyle","tablestyles"],
            answer : 0
        },
        {
            question : "Which of the following tags define the division/section in a HTML document?",
            options : ["<division>","<section>","<div>","<sec>"],
            answer : 2
        },
        {
            question : "Apart from <b> tag, what other tag makes text bold?",
            options : ["<fat>","<strong>","<black>","<emp>"],
            answer : 1
        },
        {
            question : "Which of the following is the most important form element?",
            options : ["<option>","<input>","<value>","select"],
            answer : 1
        },
        {
            question : "In which of the following methods of the form  values will be visible in the address bar of the browser tab after submission?",
            options : ["get","post","put","set"],
            answer : 0
        },
        {
            question : "Which of the following methods should not be used to send sensitive data?",
            options : ["get","post","put","set"],
            answer : 0
        },
    ],
    "Css" : [
        {
            question : "What are the three ways to include styles in CSS?",
            options : ["Inline CSS","Internal CSS","External CSS","All the above"],
            answer : 3
        },
        {
            question : "The selector that uses tag name for applying styles is known as _____________.",
            options : ["Type selector","Element selector","Universal selector","Both a and b"],
            answer : 3
        },
        {
            question : "Which of the following symbols is used to define a universal selector?",
            options : [".","#","*","^"],
            answer : 2
        },
        {
            question : "Which of the following symbols is used to prepend class selectors?",
            options : [".","#","*","^"],
            answer : 0
        },
        {
            question : "Which of the following symbols is used to prepend Id selectors?",
            options : [".","#","*","^"],
            answer : 1
        },
        {
            question : "Which of the following properties is used to adjust the transparency of the background color?",
            options : ["transparency","transparent","opacity","opaque"],
            answer : 2
        },
        {
            question : "Which of the following is the right value range for opacity property?",
            options : ["0 to 5","0.0 to 1.0","0.0 to 0.5","0 to 10"],
            answer : 1
        },
        {
            question : "Which of the following values of opacity have more transparency?",
            options : ["0.1","0.5","0.7","1.0"],
            answer : 0
        },
        {
            question : "What is the default value of background-attachment property?",
            options : ["scroll","fixed","local","initial"],
            answer : 0
        },
        {
            question : "Which of the following CSS properties is used to control the layout?",
            options : ["layout","display","float","clear"],
            answer : 1
        },
    ],
    "Javascript" : [
        {
            question : "The JavaScript language is _______.",
            options : ["Object based","Object oriented","High level","Assembly language"],
            answer : 0
        },
        {
            question : "Which of the following is the name of the data storing containers?",
            options : ["Literals","Variables","Operators","None"],
            answer : 1
        },
        {
            question : "Which of the following keywords are used  to  declare the variables in JavaScript?",
            options : ["let","var","const","All of the above"],
            answer : 3
        },
        {
            question : "JavaScript is a ________ language?",
            options : ["Object Oriented","Typed","Untyped","Structure"],
            answer : 2
        },
        {
            question : "Which of the following variables can be defined anywhere in the JavaScript code?",
            options : ["Global Variable","Local Variable","All of the above","None of the above"],
            answer : 0
        },
        {
            question : "JavaScript is a _______ type language?",
            options : ["Standard","Dynamic","Both 1 and 2","None of the above"],
            answer : 1
        },
        {
            question : "Which of the following provides a new feature to create a multiline string without using \n?",
            options : ["Variables","Identifiers","Literals","Data types"],
            answer : 2
        },
        {
            question : "Which of the following is the primitive data type?",
            options : ["Object","Boolean","Array","RegExp"],
            answer : 1
        },
        {
            question : "Which of the following variables will be visible only within a function where it is defined?",
            options : ["Global Variables","Local Variables","Both 1 and 2","None of the above"],
            answer : 1
        },
        {
            question : "Which of the following keywords is used to reassign a different value to a variable?",
            options : ["let","var","const","Both 1 and 2"],
            answer : 3
        },
    ],
    "React.Js" : [
        {
            question : " ",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
        {
            question : "",
            options : [""],
            answer : 1
        },
    ],

};

// Starts the quiz when the user provides their name
function startQuiz() {
    const name = document.getElementById("name").value;  
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTime = new Date();
    startTimer();
    selectOption();                        
    displayQuestion();
};

// Starts the quiz for a specific category 
function startCategory(category){
    currentCategory = category;
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTime = new Date();
    startTimer();
    selectOption();                        //start the timer when the quiz starts
    displayQuestion();

// Updates the quiz page title based on the selected category
var titleElement = document.querySelector('.header .title');

    if (category === 'Html') {
        titleElement.textContent = 'Html';
    } else if (category === 'Css') {
        titleElement.textContent = 'Css';
    } else if (category === 'Javascript') {
        titleElement.textContent = 'Javascript';
    } else if (category === 'React.Js') {
        titleElement.textContent = 'React.Js';
    }

    document.getElementById('quiz-page').style.display = 'block';
};

// Moves to the next question in the current category
document.getElementById('next-btn').addEventListener('click', nextQuestion);
function nextQuestion() {
    currentQuestionIndex++;
    currentQuestionIndex < questions[currentCategory].length;
    displayQuestion();

    // if (currentQuestionIndex < questions[currentCategory].length) {
    //     displayQuestion();
    // } else {
    //     showResult();
    // }
};
 
// Displays the current question and its options
function displayQuestion(){
    // if(!currentCategory || !question[currentCategory] || currentQuestionIndex >= questions[currentCategory].length){
    //     return;
    // }
    const question= questions[currentCategory][currentQuestionIndex];
    document.getElementById("questionText").textContent = question.question;
    document.getElementById("question-count").textContent = `${currentQuestionIndex + 1}/${questions[currentCategory].length}`;

    const optionButtons = document.querySelectorAll('.option');
    for (let i= 0; i< question.options.length; i++) {
        optionButtons[i].textContent = question.options[i];
    }
};

 
function selectOption(optionIndex) {
    const question = questions[currentCategory][currentQuestionIndex];
    
    // Check if the selected option is correct
    if (optionIndex === question.answer) {
        score++; // Increment the score if the answer is correct
    }else {
        score;
    }
        document.querySelector('.score strong').textContent = score;    // Display the updated score
        nextQuestion();       // Proceed to the next question
};


// Shows the result of the quiz when the user finishes all questions
document.getElementById('showResult').addEventListener('click', showResult);
function showResult() {
    currentQuestionIndex++;
    currentQuestionIndex = questions[currentCategory].length;
    showResult();
};

function showResult() {
    clearInterval(timerInterval); // Stop the timer
    endTime = new Date();
    const totalTime = (endTime - startTime) / 1000; // in seconds
    const totalQuestions = questions[currentCategory].length;
    const attempt = totalQuestions;     //assuming all questions are attempted
    const correctAnswers = score;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentageScore = (score / totalQuestions) * 100;

    // Get the result container and quiz page elements
    const resultPage = document.getElementById('result-page');
    const quizPage = document.getElementById('quiz-page');

    document.getElementById('participant-name').textContent = document.getElementById("name").value;
    document.getElementById('result').textContent = ` ${correctAnswers} out of ${totalQuestions}`;;
    document.getElementById('totalTime').textContent = totalTime;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('attemptQuestions').textContent = attempt;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('percentageScore').textContent = percentageScore.toFixed(2);

    document.getElementById('result-page').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
};

// Restarts the quiz by resetting the question index and score
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    displayQuestion();
};

// Returns the user to the home page, resetting the quiz
function goToHome() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}
    document.getElementById('quiz-page').addEventListener('click', function() {
    
});

// Starts a timer that increments every second during the quiz
function startTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = seconds;
    }, 1000);
};
