
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
    },
    {
        question: "Could you explain arrays?",
        answer: "An array is a programming structure that is a collection of several data values of the same type. In terms of memory, an array is a group of contiguous memory locations storing data of the same type."
    },
    {
        question: "What do you understand by machine code?",
        answer: "Machine code is a low-level programming language. Unlike high-level programming languages that come with a compiler to transform high-level code into machine code for execution, a microprocessor directly processes machine code without doing such a transformation."
    },
    {
        question: "What do you mean by “beta version” of a computer program?",
        answer: "The beat version of a computer program or software is a release of the same that isn’t yet ready for public release and is meant to be modified after user feedback received from beta testing."
    },
    {
        question: "Can you explain the top-down design approach?",
        answer: "The top-down design approach is a methodology adopted for analyzing software. Instead of tackling a problem as a whole, it is first divided into a number of sub-problems. Each of them is then solved individually. The solutions are then combined to get the best solution."
    },
    {
        question: "What is a compiler?",
        answer: "A compiler is a computer program that translates written code in one programming language into another language. Typically, compiler refers to a program that translates source code pertaining to a high-level programming language to a lower-level programming language for creating an executable program."
    },
    {
        question: "Please explain Fibonacci search.",
        answer: "Fibonacci search is a type of search algorithm that applies to a sorted array. It uses the divide-and-conquer approach for greatly reducing the time required for reaching the target element."
    },
    {
        question: "What is a recursive function?",
        answer: "A function that calls itself is called a recursive function. It is based on a terminating condition and uses a stack. The phenomenon is called recursion."
    },
    {
        question: "What is the difference between NULL and VOID?",
        answer: "While NULL represents a value, VOID represents data type identifier. A variable with a NULL value represents an empty value. Pointers that have no initial size are identified using VOID."
    },
    {
        question: "Please explain data abstraction.",
        answer: "Data abstraction helps in breaking down a complex data problem into easily-manageable sub-problems. Following data abstraction, first data objects and operations to be performed on the same are specified. How the data objects will be stored in the memory becomes a secondary task."
    },
    {
        question: "Please explain how variable declaration affects memory allocation.",
        answer: "A particular data type is defined with a variable declaration. The total amount of memory to be allocated depends on the data type a declared variable belongs to."
    },
    {
        question: "What is Git?",
        answer: "Git is an affordable, open-source version control system and is navigable for non-technical users. A version control system is a software tool that helps record and keep track of files and changes to those files, allowing the management of different projects such as documents, computer programs, large websites or other collections of information. It coordinates working withing a team setting by permitting changes to files by multiple people working on a single source. Contributions or commits to repositories can be seen by others and a specific version of a file can be called whenever needed. Changes to work can be merged together at a later meaning many people can contribute to the collaboration of projects, working on different parts at the same time, using the version control to retrieve snapshots of specific versions of a project when needed. This is very helpful for multi-person or large projects that are prone to bugs as Git processes actively encourage team collaboration and the global sharing of knowledge and best practice. Teams can coordinate their work more efficiently and problem-solve faster via Git, finishing projects faster. Git uses a variety of keyboard commands via the command line interface to interact with Github, allowing authors to edit, save, retrieve and view modifications to code within projects. The main commands include clone (making copy, linking origin, brings repo from server or github to local folder), add (track files and changes in Git), commit (save files in Git), push (upload Git commits to a remote repo, like Github) and pull (download changes from a remote repo to local machine). Git has a branching feature which means new branches of a project’s master branch can be created to independently work and develop on an isolated section of the program."
    },
    {
        question: "What is Github?",
        answer: "Github is the website that hosts and stores all repositories or projects. It has many features that make creating programs within a team setting fluid. Github enables easy project management as work can be easily tracked with the VCS. It promotes effective team management as members can stay organised and dedicate more focus to writing code. This results in improve code quality and readability. Github also increases security as an it uses an industrial-leading semantic analysis system for file management and repositories can be set to public, private or within specific communities. Finally, Github is very easy to use – you can view, host, download and have all of your code in one place and use it as a creative self-promotion platform."
    },
    {
        question: "Explain what computer programming is",
        answer: "Also known as coding or programming, computer programming is the process of encoding an algorithm into a notation, typically a computer program, by means of some programming language so that it can be executed by a computer. Each programming language contains a set of instructions for the computer to execute a set of tasks. Programming is a complex process that includes designing an algorithm, coding the same in a programming language, debugging a program, maintaining, and updating the code."
    },
    {
        question: "Can you enumerate and explain the various types of errors that can occur during the execution of a computer program?",
        answer: "Logical errors: This occurs in the scenario of a computer program implementing the wrong logic. As there is no report generated for these types of programming errors, they are the most difficult ones to deal with. Runtime errors: Occurs when the program contains an illegal operation. For example, dividing a number by 0. These are the only errors that are displayed instantly during the program execution. Upon the occurrence of a runtime error, the program execution is stopped and a diagnostic message is displayed. Syntax errors: Occurs when one or more grammatical rules of the programming language being used is violated. Such errors are detected during compile time."
    },
    {
        question: "Every programming language has reserved words. What are they? Give some examples.",
        answer: "Reserved words, also known as keywords, are the words that have predefined meanings in a particular programming language. These reserved words can’t be used or redefined for serving other purposes. Following are some examples of reserved words: C – break, case, char, default, else, float, if, and int. Java – abstract, boolean, catch, class, const, double, enum, finally, implements, instanceof, throws, transient, and volatile. Python – and, assert, continue, def, del, global, not, lambda, raise, and yield"
    },
    {
        question: "What do you understand by loops? Briefly explain the various types of loops.",
        answer: "A loop is a structure in programming that can repeat a defined set of statements for a set number of times or until a particular condition is satisfied. There are three important types of loops. FOR…NEXT Loop – This is the most effective loop when you know beforehand the total number of times the loop is to be repeated. WHILE…END Loop – It keeps on repeating a particular action until the concerned condition becomes false. This loop is particularly useful when the total number of repetitions is unknown. Nested Loop – When a loop is used inside a loop then it is termed as a nested loop."
    },
    {
        question: "Can you enumerate some coding best practices?",
        answer: "Following are some coding best practices to make programming efficient: Abide by the DRY principle. Follow some easy-to-remember naming convention. Keep the code as straightforward as possible. Limit the length of a line of code. Use comments frequently. Use consistent indentation. Whenever and wherever possible, avoid deep nesting."
    }
];

const behavQuestions = [
    {
        question: "Describe a time you have had to work at pace",
        answer: "Working at pace comes naturally me to an effiecient worker and believer of success with hard work. As a teacher of secondary science, I was responsible for delivering lessons with key content in a limited amount of time. In addition, I needed to relay this knowledge in a way that was understandable, fun and ultimately meaningful to the pupils. I planned lessons in advance in my diary to keep on top of each course syllabus and recycled teaching materials from colleagues to allow more time for planning the important aspects of the lesson over creating new teaching material from scratch. For junior pupils, biology and other specialty science teachers were reponsible for teaching non-specialty subjects including physics and chemistry. For this, it was even more important that I plan lessons ahead to ensure knowledge embedment within a limited time frame."
    },
    {
        question: "Describe a time you dealt with conflict", 
        answer: "In both my teaching and managerial roles, I have had experience of dealing with conflict in different situations. For example, as teacher I observed and resolved conflict among pupils in my classes. It wasn't uncommon and I researched behaviour management tactics, implemented school rules and liaisied with fellow staff. Most of the time, listening to students was the key to resolving conflict and as someone who prides themself being an open listener, I used pupil voice to reduce tension. My efforts to build strong relationships with pupils came in handy for these types of situation and after some give and take and comprimising, peace was usually restored."
    },
    {
        question: "Describe a project you worked on as part of a team", 
        answer: ""
    },
    {
        question: "Tell me about a time you went above and beyond for work.", 
        answer: ""
    },
    {
        question: "Tell me about a time you made a great presentation.", 
        answer: ""
    },
    {
        question: "Describe your biggest work failure. How did you handle it?", 
        answer: ""
    },
    {
        question: "Tell me about a time you used written communication skills.", 
        answer: ""
    },
    {
        question: "Describe a situation where you needed information from a coworker who was slow to respond. What did you do?", 
        answer: ""
    },
    {
        question: "Tell me about a tough challenge you faced. How did you solve it?", 
        answer: ""
    },
    {
        question: "Describe a situation where you used Photoshop to complete a project", 
        answer: ""
    },
    {
        question: "Describe a time when you had too many to do items on your list. How did you solve the problem?", 
        answer: ""
    },
    {
        question: "Tell me about a long-running project you handled. How did you manage your time to meet your deadlines?", 
        answer: ""
    },
    {
        question: "Tell me about a time your workload was very heavy.", 
        answer: ""
    },
    {
        question: "Describe a situation where you had to make a good impression on a customer. How did you do it?", 
        answer: ""
    },
    {
        question: "Tell me about a time you had to work with an important customer or a difficult manager.", 
        answer: ""
    },
    {
        question: "Tell me about a time you had to collaborate with a coworker who was tough to please.", 
        answer: ""
    },
    {
        question: "Describe a situation where you saw a problem and took steps to fix it.", 
        answer: ""
    },
    {
        question: "Describe a time you demonstrated leadership.",
        answer: ""   
    },
    {
        question: "Tell me about a time you reached a big goal at work. How did you reach it?", 
        answer: ""
    },
    {
        question: "Describe a situation where you weren’t satisfied with your job. What could have made it better?", 
        answer: ""
    },
    {
        question: "Tell me about a time you had to choose something else over doing a good job.", 
        answer: ""
    },
    {
        question: "How have you demonstrated self-development in a previous role?",
        answer: ""   
    },
    {
        question: "Describe a time you experienced change.",
        answer: ""   
    }
];


const wildQuestions = [
    {
        question: "Why are you choosing a career in Software Development?",
        answer: ""
    },
    {
        question: "Where do you see yourself in five years time?",
        answer: ""
    },
    {
        question: "What motivates you?",
        answer: ""
    },
    {
        question: "How do you handle stress and pressure at work?",
        answer: ""   
    },
    {
        question: "What makes a good software engineer?",
        answer: ""   
    },
    {
        question: "Tell us about yourself and your experience.",
        answer: ""   
    },
    {
        question: "Do you prefer to work in a startup or established company?",
        answer: ""   
    },
    {
        question: "What are your strengths?",
        answer: ""   
    },
    {
        question: "What are your weaknesses?",
        answer: ""   
    },
    {
        question: "What is your proudest achievement?",
        answer: ""
    },
    {
        question: "Who inspires you?",
        answer: ""
    },
    {
        question: "What makes you think you will be a good fit in this role?",
        answer: ""
    },
    {
        question: "How do you spend time outside of work?",
        answer: ""   
    },
    {
        question: "Why do you want to be a software engineer?",
        answer: ""   
    },
    {
        question: "Describe a project you worked on and the difficulties you faced.",
        answer: ""   
    },
    {
        question: "Describe the differences between SQL and Java",
        answer: ""   
    },
    {
        question: "How do you keep up with current technological trends and news?",
        answer: ""   
    },
    {
        question: "Tell me about a fictional character that best describes you.",
        answer: ""
    },
    {
        question: "If someone wrote a book about you, what would the title be?",
        answer: ""
    },
    {
        question: "What are your hobbies?",
        answer: ""   
    },
    {
        question: "What was your highlight of 2022?",
        answer: ""   
    },
    {
        question: "If you won $20 million in the lottery, what would you do with the money?",
        answer: ""   
    },
    {
        question: "List 3 words that describe your character.",
        answer: ""   
    },
    {
        question: "What are your upcoming goals?",
        answer: ""   
    },
    {
        question: "How do you handle situations and environments you are not familair with?",
        answer: ""   
    },
    {
        question: "Tell me something interesting about you.",
        answer: ""   
    }
];

const techQuestions = [
    {
        question: "How did your education prepare you for this job?",
        answer: ""
    },
    {
        question: "How would you rate your key competencies for this job?",
        answer: ""
    },
    {
        question: "What are your IT strengths and weaknesses?",
        answer: ""
    },
    {
        question: "How do you ensure there are no bugs in your code?",
        answer: ""   
    },
    {
        question: "What do you look for when reviewing your team members' code?",
        answer: ""   
    },
    {
        question: "What is the benefit of designing scalable applications and how is it done?",
        answer: ""   
    },
    {
        question: "Describe the differences between the waterfall SDLC and agile.",
        answer: ""   
    },
    {
        question: "Describe a programming concept in Laymen's terms as though it is to someone who is not technical.",
        answer: ""   
    },
    {
        question: "What is meant by object-oriented programming?",
        answer: ""   
    },
    {
        question: "Explain the differences between Front End and Back End Development.",
        answer: ""   
    },
    {
        question: "Describe how you would plan a new software project.",
        answer: ""
    }
];


const answerBehav = document.getElementById("answerB");
const answerWild = document.getElementById("answerW");
const answerKnow = document.getElementById("answerK");
const answerTech = document.getElementById("answerT");

const questionBehav = document.getElementById("questionB");
const questionWild = document.getElementById("questionW");
const questionKnow = document.getElementById("questionK");
const questionTech = document.getElementById("questionT");

const counterBehav = document.getElementById("counterB");
const counterKnow = document.getElementById("counterK");
const counterTech = document.getElementById("counterT");
const counterWild = document.getElementById("counterW");

//const totalBehav = document.getElementById("lengthB");
//const totalTech = document.getElementById("lengthT");
//const totalWild = document.getElementById("lengthW");


function changeQuestion(questionArray, questionText, answerText, counter) {
    counter.textContent = questionArray.length;
    if (questionArray.length === 0) {
        questionText.innerHTML = 'No more questions.';
        answerText.innerHTML = "";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    const randomQuestion = questionArray[randomIndex].question;
    const findAnswer = questionArray[randomIndex].answer;
    questionText.innerHTML = randomQuestion;
    answerText.innerHTML = findAnswer;

    questionArray.splice(randomIndex, 1);
    };


