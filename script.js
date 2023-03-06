
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
    },
];

function changeQuestion() {
    var questionText = document.getElementById("question");
    var answerText = document.getElementById("answer");
    if (knowledgeQuestions.length === 0) {
        questionText.textContent = 'No more questions.';
        answerText.innerHTML = "";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * knowledgeQuestions.length);
    const randomQuestion = knowledgeQuestions[randomIndex].question;
    const findAnswer = knowledgeQuestions[randomIndex].answer;
    questionText.innerHTML = randomQuestion;
    answerText.innerHTML = findAnswer;

    knowledgeQuestions.splice(randomIndex, 1);
    }