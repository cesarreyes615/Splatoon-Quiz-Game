var score = 0;
function firstQuestionResult(answer){
    var display = document.querySelector('.current-question');
    var inputArea = document.querySelector('.input-area');
    if(answer === 'They went extinct.'){
        display.innerHTML = "Correct!";
        score++;
    }
    else{
        display.innerHTML = "Incorrect.";
        display.style.color = 'red';
    }
    var responses = document.querySelectorAll('.response');
    for(var i = 0; i < responses.length; i++){
        inputArea.removeChild(responses[i]);
    }
    var nextQuestion = document.createElement('button');
    var text = document.createTextNode('Next Question');
    nextQuestion.appendChild(text);
    nextQuestion.classList.add('btn');
    nextQuestion.classList.add('btn-lg');
    nextQuestion.classList.add('next-question');
    nextQuestion.classList.add('button-styler');
    inputArea.appendChild(nextQuestion);
    nextQuestion.addEventListener('click',secondQuestion);
}

function firstQuestion(){
    document.querySelector('.current-question-number').innerHTML = "1/5";
    document.querySelector('.current-question').innerHTML = "What happened to humans?";
    var inputArea = document.querySelector('.input-area');
    inputArea.removeChild(document.querySelector('.start'));
    for(var i = 0; i < 3; i++){
        var newElement = document.createElement('button');
        var text = document.createTextNode('Question ' + (i + 1));
        newElement.appendChild(text);
        newElement.classList.add('btn');
        newElement.classList.add('btn-lg');
        newElement.classList.add('response');
        newElement.classList.add('button-styler');
        inputArea.appendChild(newElement);
    }
    var responses = document.querySelectorAll('.response');
    responses[0].textContent = "They went extinct.";
    responses[0].addEventListener('click', () => {
        firstQuestionResult(responses[0].textContent);
    });
    responses[1].classList.add('ml-3');
    responses[1].textContent = "They evolved into inklings.";
    responses[1].classList.add('mr-3');
    responses[1].addEventListener('click', () => {
        firstQuestionResult(responses[1].textContent);
    });
    responses[2].textContent = "They left Earth to live in Space.";
    responses[2].addEventListener('click', () => {
        firstQuestionResult(responses[2].textContent);
    });
}

function secondQuestionResult(answer){
    var display = document.querySelector('.current-question');
    var inputArea = document.querySelector('.input-area');
    if(answer === 'He was frozen.'){
        display.innerHTML = "Correct!";
        score++;
    }
    else{
        display.innerHTML = "Incorrect.";
        display.style.color = 'red';
    }
    var responses = document.querySelectorAll('.response');
    for(var i = 0; i < responses.length; i++){
        inputArea.removeChild(responses[i]);
    }
    var nextQuestion = document.createElement('button');
    var text = document.createTextNode('Next Question');
    nextQuestion.appendChild(text);
    nextQuestion.classList.add('btn');
    nextQuestion.classList.add('btn-lg');
    nextQuestion.classList.add('next-question');
    nextQuestion.classList.add('button-styler');
    inputArea.appendChild(nextQuestion);
    nextQuestion.addEventListener('click',thirdQuestion);
}

function secondQuestion(){
    document.querySelector('.current-question-number').innerHTML = "2/5";
    document.querySelector('.current-question').innerHTML = "How did Judd come to live alongisde inklings?";
    document.querySelector('.current-question').style.color = 'rgb(0,255,0)';
    var inputArea = document.querySelector('.input-area');
    inputArea.removeChild(document.querySelector('.next-question'));
    for(var i = 0; i < 3; i++){
        var newElement = document.createElement('button');
        var text = document.createTextNode('Question ' + (i + 1));
        newElement.appendChild(text);
        newElement.classList.add('btn');
        newElement.classList.add('btn-lg');
        newElement.classList.add('response');
        newElement.classList.add('button-styler');
        inputArea.appendChild(newElement);
    }
    var responses = document.querySelectorAll('.response');
    responses[0].textContent = "He lived underground.";
    responses[0].addEventListener('click', () => {
        secondQuestionResult(responses[0].textContent);
    });
    responses[1].classList.add('ml-3');
    responses[1].textContent = "He was frozen.";
    responses[1].classList.add('mr-3');
    responses[1].addEventListener('click', () => {
        secondQuestionResult(responses[1].textContent);
    });
    responses[2].textContent = "He time traveled to the future.";
    responses[2].addEventListener('click', () => {
        secondQuestionResult(responses[2].textContent);
    });
}

function thirdQuestionResult(answer){
    var display = document.querySelector('.current-question');
    var inputArea = document.querySelector('.input-area');
    if(answer === 'Rising sea levels.'){
        display.innerHTML = "Correct!";
        score++;
    }
    else{
        display.innerHTML = "Incorrect.";
        display.style.color = 'red';
    }
    var responses = document.querySelectorAll('.response');
    for(var i = 0; i < responses.length; i++){
        inputArea.removeChild(responses[i]);
    }
    var nextQuestion = document.createElement('button');
    var text = document.createTextNode('Next Question');
    nextQuestion.appendChild(text);
    nextQuestion.classList.add('btn');
    nextQuestion.classList.add('btn-lg');
    nextQuestion.classList.add('next-question');
    nextQuestion.classList.add('button-styler');
    inputArea.appendChild(nextQuestion);
    nextQuestion.addEventListener('click',fourthQuestion);
}

function thirdQuestion(){
    document.querySelector('.current-question-number').innerHTML = "3/5";
    document.querySelector('.current-question').innerHTML = "Why did Inklings and Octarians go into  conflict?";
    document.querySelector('.current-question').style.color = 'rgb(0,255,0)';
    var inputArea = document.querySelector('.input-area');
    inputArea.removeChild(document.querySelector('.next-question'));
    for(var i = 0; i < 3; i++){
        var newElement = document.createElement('button');
        var text = document.createTextNode('Question ' + (i + 1));
        newElement.appendChild(text);
        newElement.classList.add('btn');
        newElement.classList.add('btn-lg');
        newElement.classList.add('response');
        newElement.classList.add('button-styler');
        inputArea.appendChild(newElement);
    }
    var responses = document.querySelectorAll('.response');
    responses[0].textContent = "Rising sea levels.";
    responses[0].addEventListener('click', () => {
        thirdQuestionResult(responses[0].textContent);
    });
    responses[1].classList.add('ml-3');
    responses[1].textContent = "They looked at each other funny.";
    responses[1].classList.add('mr-3');
    responses[1].addEventListener('click', () => {
        thirdQuestionResult(responses[1].textContent);
    });
    responses[2].textContent = "Energy Crisis.";
    responses[2].addEventListener('click', () => {
        thirdQuestionResult(responses[2].textContent);
    });
}

function fourthQuestionResult(answer){
    var display = document.querySelector('.current-question');
    var inputArea = document.querySelector('.input-area');
    if(answer === 'The Great Turf War.'){
        display.innerHTML = "Correct!";
        score++;
    }
    else{
        display.innerHTML = "Incorrect.";
        display.style.color = 'red';
    }
    var responses = document.querySelectorAll('.response');
    for(var i = 0; i < responses.length; i++){
        inputArea.removeChild(responses[i]);
    }
    var nextQuestion = document.createElement('button');
    var text = document.createTextNode('Next Question');
    nextQuestion.appendChild(text);
    nextQuestion.classList.add('btn');
    nextQuestion.classList.add('btn-lg');
    nextQuestion.classList.add('next-question');
    nextQuestion.classList.add('button-styler');
    inputArea.appendChild(nextQuestion);
    nextQuestion.addEventListener('click',fifthQuestion);
}

function fourthQuestion(){
    document.querySelector('.current-question-number').innerHTML = "4/5";
    document.querySelector('.current-question').innerHTML = "What was the name of the conflict between Inklings and Octarians?";
    document.querySelector('.current-question').style.color = 'rgb(0,255,0)';
    var inputArea = document.querySelector('.input-area');
    inputArea.removeChild(document.querySelector('.next-question'));
    for(var i = 0; i < 3; i++){
        var newElement = document.createElement('button');
        var text = document.createTextNode('Question ' + (i + 1));
        newElement.appendChild(text);
        newElement.classList.add('btn');
        newElement.classList.add('btn-lg');
        newElement.classList.add('response');
        newElement.classList.add('button-styler');
        inputArea.appendChild(newElement);
    }
    var responses = document.querySelectorAll('.response');
    responses[0].textContent = "The Ultimate Clam Blitz.";
    responses[0].addEventListener('click', () => {
        fourthQuestionResult(responses[0].textContent);
    });
    responses[1].classList.add('ml-3');
    responses[1].textContent = "The Grand Splatfest.";
    responses[1].classList.add('mr-3');
    responses[1].addEventListener('click', () => {
        fourthQuestionResult(responses[1].textContent);
    });
    responses[2].textContent = "The Great Turf War.";
    responses[2].addEventListener('click', () => {
        fourthQuestionResult(responses[2].textContent);
    });
}

function fifthQuestionResult(answer){
    var display = document.querySelector('.current-question');
    var inputArea = document.querySelector('.input-area');
    if(answer === 'Energy Crisis.'){
        display.innerHTML = "Correct!";
        score++;
    }
    else{
        display.innerHTML = "Incorrect.";
        display.style.color = 'red';
    }
    var responses = document.querySelectorAll('.response');
    for(var i = 0; i < responses.length; i++){
        inputArea.removeChild(responses[i]);
    }
    var nextQuestion = document.createElement('button');
    var text = document.createTextNode('Results');
    nextQuestion.appendChild(text);
    nextQuestion.classList.add('btn');
    nextQuestion.classList.add('btn-lg');
    nextQuestion.classList.add('next-question');
    nextQuestion.classList.add('button-styler');
    inputArea.appendChild(nextQuestion);
    nextQuestion.addEventListener('click',finalResult);
}

function fifthQuestion(){
    document.querySelector('.current-question-number').innerHTML = "5/5";
    document.querySelector('.current-question').innerHTML = "Why did the Octolings steal the Great Zapfish?";
    document.querySelector('.current-question').style.color = 'rgb(0,255,0)';
    var inputArea = document.querySelector('.input-area');
    inputArea.removeChild(document.querySelector('.next-question'));
    for(var i = 0; i < 3; i++){
        var newElement = document.createElement('button');
        var text = document.createTextNode('Question ' + (i + 1));
        newElement.appendChild(text);
        newElement.classList.add('btn');
        newElement.classList.add('btn-lg');
        newElement.classList.add('response');
        newElement.classList.add('button-styler');
        inputArea.appendChild(newElement);
    }
    var responses = document.querySelectorAll('.response');
    responses[0].textContent = "Payback for losing the conflict.";
    responses[0].addEventListener('click', () => {
        fifthQuestionResult(responses[0].textContent);
    });
    responses[1].classList.add('ml-3');
    responses[1].textContent = "Energy Crisis.";
    responses[1].classList.add('mr-3');
    responses[1].addEventListener('click', () => {
        fifthQuestionResult(responses[1].textContent);
    });
    responses[2].textContent = "It was originally theirs.";
    responses[2].addEventListener('click', () => {
        fifthQuestionResult(responses[2].textContent);
    });
}

function finalResult(){
    var display = document.querySelector('.current-question');
    display.innerHTML = "You got " + score + " out of 5 correct.";
    var inputArea = document.querySelector('.input-area');
    inputArea.removeChild(document.querySelector('.next-question'));
    var nextQuestion = document.createElement('button');
    var text = document.createTextNode('Play again?');
    nextQuestion.appendChild(text);
    nextQuestion.classList.add('btn');
    nextQuestion.classList.add('btn-lg');
    nextQuestion.classList.add('start');
    nextQuestion.classList.add('button-styler');
    inputArea.appendChild(nextQuestion);
    nextQuestion.addEventListener('click', () => {
        score = 0;
        firstQuestion();
    });
}

document.querySelector('.start').addEventListener('click',firstQuestion);