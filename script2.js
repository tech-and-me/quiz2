const quizData =[
    {
        question:"Which language runs in a web browser?",
        choices:["JavaScript","Python","Java","C++"],
        correct:"a",
    },
    {
        question:"What does CSS stand for?",
        choices:["Central Style Sheets","Cascading Style Sheets","Cascading Simple Sheets","Cars SUVs Sailboats"],
        correct:"b",
    },
    {
        question:"What does HTML stand for?",
        choices:["Hypertext Markup Language","Hypertext Markdown Language","Hyperloop Machine Language","Helicopers Terminals Motorboats Lamborginis"],
        correct:"a",
    },
    {
        question:"What year was JavaScript Launched?",
        choices:["1996","1995","1994","none of the above"],
        correct:"b",
    }
]

const nameEl = document.getElementById("name");
const nameDivEl = document.getElementById("nameDiv");
const questionEl = document.getElementById("question");
const choicesEl = document.querySelectorAll(".answer");
const option_aEl = document.getElementById("option_a");
const option_bEl = document.getElementById("option_b");
const option_cEl = document.getElementById("option_c");
const option_dEl = document.getElementById("option_d");
const score_El = document.getElementById("score");
const submitBtn = document.getElementById("submit");
const quizFormEl = document.getElementById("quizForm");


let currentQuestionNumber = 0;
let score = 0;



// const checkName(e){
//     console.log("hi")
// }


const deselectAnswers=()=>{
    choicesEl.forEach(element => {
        element.checked = false;        
    });
}


const loadQandA=()=>{
    //deselect answer
    deselectAnswers();
    //get current question data from the quizData array
    const questionText = quizData[currentQuestionNumber].question;
    //get option a
    const option_aText = quizData[currentQuestionNumber].choices[0];
    //get option b
    const option_bText = quizData[currentQuestionNumber].choices[1];
    //get option c
    const option_cText = quizData[currentQuestionNumber].choices[2];
    //get option 
    const option_dText = quizData[currentQuestionNumber].choices[3];
    
    //adding question text to html
    questionEl.innerText = questionText;

    //adding option_a to html
    option_aEl.innerText = option_aText;
    //adding option_b to html
    option_bEl.innerText = option_bText;
    //adding option_c to html
    option_cEl.innerText = option_cText;
    //adding option_d to html
    option_dEl.innerText = option_dText;

}



const getSelectedAnswer=()=>{
    console.log("call");
    console.log(choicesEl);
    choicesEl.forEach(element => {
        if (element.checked){
            //get selected answer
            let answer;
            answer = element.value;
            
            console.log(currentQuestionNumber);
            console.log(answer);
            console.log(quizData[currentQuestionNumber].correct);

            //check score
            if (answer===quizData[currentQuestionNumber].correct){
                score++;
                console.log(`current score is ${score}`);
            }
            currentQuestionNumber++;
        }
    });

    //update score label
    score_El.innerText = `Score : ${score}`;

    //moving to the next question
    if (currentQuestionNumber<quizData.length){
        loadQandA();
    }else{
        quizFormEl.innerHTML=`<h2>You have answered ${score} of ${quizData.length} correctly.</h2>
        <button id="reload">Reload</button>`
        const reloadBtn = document.getElementById("reload");
        reloadBtn.addEventListener("click",()=>location.reload());
    }

}


nameDivEl.addEventListener("keydown",(e)=>{
    if (e.key === "Enter" && nameEl.value){
        var name;
        name = nameEl.value;
        nameDivEl.style.display="none";
        quizFormEl.style.display="block";

    }
});
submitBtn.addEventListener("click",getSelectedAnswer);

loadQandA();