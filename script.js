
const knowledgeQuestions = [
    {
        question: "What is meant by pseudocode?",
        answer: "Pseudocode is a step-by-step way to represent an algorithm. It is a verbal outline that uses English and computer terminology and functions as an informal and transferrable guide to solving a problem."
    },
    {
        question: "Please explain an algorithm. What are some of its important features?", 
        answer: "An algorithm can be defined as a set of finite steps that when followed helps in accomplishing a particular task. Important features of an algorithm are clarity, efficiency, and finiteness."
    },
    {
        question: "Please provide a brief explanation on variables.",
        answer: "Variables are used for storing the input of a program as well as the computational results during program execution. These are actually named memory locations. The value stored in a variable can change during the program execution."
    }
];

// const questionText = document.querySelector("#question");
// const answerText = document.querySelector("#answer");

/* newQuestion.addEventListener('click', function() {
    if (knowledgeQuestions.length === 0) {
        questionText.innerHTML = 'No more questions.';
        return;
      } else {
      const randomIndex = Math.floor(Math.random() * knowledgeQuestions.length);
      const randomQuestion = knowledgeQuestions[randomIndex].question;
      questionText.innerHTML = randomQuestion;
    
      knowledgeQuestions.splice(randomIndex, 1);
      }
    }); */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

const newQuestion = document.querySelector("#newQuestionButton");
const questionText = document.getElementById("#question").innerHTML;
console.log(questionText);

// let questionText = document.querySelector("#question");
  console.log(knowledgeQuestions[0].question);
  console.log(knowledgeQuestions.length);
  // console.log(randomQuestion);
  // console.log(randomIndex);

