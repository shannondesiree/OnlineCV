
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
        answer: "As someone who is always looking for opportunities to grow professionally, I respond positively to increased workload and put 100% effort into everything I do. For example, as manager of a busy tattoo studio, I went the extra mile to savalge a situation that had a major financial impact on the daily running of the studio. Our long-term head piercer announced his leave which meant that weeks of piercing bookings were going to be lost affecting the company's income and reputation. I began with promoting our piercing course which was a 10-day course taught by our head piercer. With 4 weeks notice, we didn't have much time to train potential replacements. "
    },
    {
        question: "Tell me about a time you made a great presentation.", 
        answer: "as a teacher, observed lesson was out of my control and fell on a physics lesson for broad general education (S1-S3) which was not my strong point as a biology teacher. This meant I had to ensure I was knowledgeable on lesson content and surrounding background to answer pupil questions sufficiently and deliver a clear and understandable lesson. Plan a lesson that hits all learning objects, incorporates a variety of pedagogical techniques, body language and class atmosphere is controlled and engaged. Encourage team working and fun formative assessments to enthuse pupils and embed learning. Scored highly on observed lesson and pupils were able to recall key points during plenary at the end of the lesson and during the recap at the beginning of the following lesson. "
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
        answer: "As a teacher, I was faced with challenges daily depending on my pupils and how they were all feeling that day. I had some particularly tough students that projected during class making embedding learning difficult. "
    },
    {
        question: "Describe a situation where you used Photoshop to complete a project", 
        answer: "I often practice photo-editing as part of my wildlife photography hobby which came in esepcially useful during my time as a marine wildlife guide with SeaLife Adventures. Here, I presented talks on a variety of spotted wildlife whilst on board a small boat for 3, 4 and 5 hour tourism excursions in the Inner Hebrides. When we weren't out on a trip, I was occassionally required to edit some of the pictures that had been taken from our recent trips. For this, we used Adobe Photoshop Lightroom which worked perfect for our intended use and using the raw images I was able to colour-correct, crop and bring out the best of the animal in the picture. This helped towards social media marketing projects, petitions we were passionate about and important wildlife monitoring and recording purposes."
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
        answer: "As a perfectionist, it can be hard for me to take a step back from the small details to envision the bigger picture and I actively remind myself of the end goal to keep witihn timelines. This part of me made my role as an educator challenging in the sense that ensuring all relevent information is delivered in each lesson with the limitied 50 minutes duration. Initially, there were oftentimes I ran over lessons and in trying to correct this, there were even occasions where lessons fell short and I would be forced to think of a quick time burning task on the spot.   "
    },
    {
        question: "Tell me about a time you had to choose something else over doing a good job.", 
        answer: ""
    },
    {
        question: "How have you demonstrated self-development in a previous role?",
        answer: "Mentor meetings as NQT(Newly-Qualified Teacher) involved reflecting on lessons and lesson planning, lesson content and pedagogy techniques. How to improve teaching and embed learning within pupils. This also involved interview training and allowed me to practice metacognition myself in thinking about my own learning path to becoming a great educator. I took notes to remind myself of my own strengths and areas for development and found ways to implement them in the classroom for the benefit of the learners and my teaching career."   
    },
    {
        question: "Describe a time you experienced change.",
        answer: "Change for me is important because it allows for adaptation, specialisation and evolution but I don't deny that it doesn't come with its own concerns. When I worked as a manager of a tattoo studio, the shop in Glasgow was unable to meet it's full demand and therefore potential and the company owner decided to open a second studio around the corner to maintain the demand from the client base. After the building had been renovated and was fit for purpose, the artists had proposed an initial idea of having the second, and smaller studio, as a workplace for the artists who specialised in the black and grey realistic style - since it was this style that was causing the demand, the tattoos in this style were all generally full day sessions and would all take the same timeframe to complete in most cases and since "   
    }
];


const wildQuestions = [
    {
        question: "Why are you choosing a career in Software Development?",
        answer: "Software development is the right career choice for me because I believe it will marry the best of my strengths and fulfil my professional needs in terms of providing challenege, opportunities for growth and the chance to work on incredible, innovative products like artificial intelligence that will shape the future in the fastest growing industry in the world."
    },
    {
        question: "Where do you see yourself in five years time?",
        answer: "5 years time is a long time and with my high expectations of myself, I would love to see me in ownership of at least two properties. I would love to have travelled parts of South America by then and be content with my pets and my family. In terms of work, I would love to be settled in a long-term position within a company that embraces my differences and brings out the best of me. For me, I think this is a realistic expectation."
    },
    {
        question: "What motivates you?",
        answer: "I am motivated by my family and my goals in life. I've always enjoyed having something to work towards within different aspects of my life. For example, setting goals, writing to-do lists and seeing the bigger picture have allowed me to reach milestones faster and reflect on my progress. If I feel a goal is too difficult to reach, I will often break this down into smaller, more reachable targets and I apply this same process to my work to push through particularly challenging tasks and meeting deadlines on time."
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
        answer: "My family inspire me. I don't have the best or most affectionate relationship with my parents and siblings but they have never made me feel like I am not capable of something and have always believed in me and my dreams. As I've gotten older, I have become more appreciative of the sacrifices they have made for me and I realise that they did their very best to give me the life I deserve, despite our adverse background and cultural stigma. I'm fortunate to say that my parents give me strength and hope because I know that doesn't apply for everybody and I am proud to have such a inspirational family."
    },
    {
        question: "What makes you think you will be a good fit in this role?",
        answer: "I think I would work great as a Software Developer because I have spent the last 8 months or so soaking in every piece of information I can with limitless online learning tools and rescources. I discovered this would be the ideal career for me if there ever was one, because I believe I can learn the required knowledge but mostly becasue I believe I have the right mindset for this kind of work. Not only do I work smoothly in a team setting, but I am naturally a logical diagnostition where problem-solving has been my talent consistently throughout my previou sprofessional roles and within my personal life. I understand technoology and admire the industry. I have the hunger, willpower and ideal characteristics that will see me go far, just as I have done in prior workplaces."
    },
    {
        question: "How do you spend time outside of work?",
        answer: "Outside of work, I like to keep active and social, spedning time with my family and friends when I can. I enjoy dancing and maintiaining a healthy lifestyle as well as being outdoors with my camera in all weathers. I really enjoy learning new things - especially anything science, language or psychology-related. I enjoy watching TedTalks, listening to podcasts and attending relevant shows, conventions and exhibitions when I can. This year, I'd like to attend an airshow and have a planned trip to the Shetland Isles in an attempt to photograph wild Orcas this Summer, which I am really excited for!"   
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
        answer: "Java is a high-level programming language that is preferred by most of the developers to develop different programs that can run on windows. On the other side, SQL is the query language that deals with databases such as update, delete, manage are some features for which programmers use the SQL."   
    },
    {
        question: "How do you keep up with current technological trends and news?",
        answer: "Stack overflow, StackExchange, Quora"   
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
        answer: "I try to be myself and observe my surroundings and colleagues to adapt faster and gain familiarity/experience. I ask questions and accept that I will likely make mistakes and try not to interpret too much."   
    },
    {
        question: "Tell me something interesting about you.",
        answer: "I consider myself very much an open book and will happily talk about the experiences that make me who I am. "   
    }
];

const techQuestions = [
    {
        question: "How did your education prepare you for this job?",
        answer: "I've set myself different short and long-term objectives in preparattion for this job. For example, I know Rome wasn't built in a day and there was no way I would be able to grasp the concepts of programming overnight having no prior experience or training. I devoted a timeline from August 2022 to study and research and I spent hours practicing with tutorials, threads, blogs and online courses. I completed Harvard's CS50: Intro to Computer Science which introduced me to the fundamentals of programming and lessons on languages including C, Python, JavaScript and HTML as well as practice in SQL, PHP and CSS. I was able to secure a formal qualification in March 2023 shortly after when I attended the PDA (Professional Development Award) in Software Development SCQF Level 7 at Glasgow Clyde college where I was able to explore the background, history and planning of programming with opportunities to expand my lnaguage library to Java."
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
        answer: "I plan projects that can benefit from test-driven development which validates the expected results of each section before I move on to the next. I keep consistent with my syntax and use recognisable variable names. I divide my code and keep it simple for when I am writing and comment when appropriate. I establish code standards and make use of any existing libraries to make sure my code is succinct and efficient to identify potential bugs more easily. I use build in debugging extentions in my IDE and employ the 'rubber duck' walkthrough method if necessary."   
    },
    {
        question: "What do you look for when reviewing your team members' code?",
        answer: "Establish a background context and understand the purpose of the code. Make sure I am familair with the language and software tools before inspecting the code. I would check that the author has used appropriate naming conventions and has DRY principles. I would ensure that the code accounts for error-handling and compiles without errors. I would look for comments to clarify code readability and compare it with other code sections of the product to maintain consistency. I would make sure that any feedback I give the author afterwards is concise and constructive, outline any adjustments advisories."   
    },
    {
        question: "What is the benefit of designing scalable applications and how is it done?",
        answer: "Scalability has both long- and short-term benefits. At the outset it lets a company purchase only what they immediately need, not every feature that might be useful down the road. For example, a company launching a data intelligence pilot program could choose a massive enterprise analytics bundle, or they could start with a solution that just handles the functions they need at first. A popular choice is a dashboard that pulls in results from their primary data sources and existing enterprise software. When they grow large enough to use more analytics programs, those data streams can be added into the dashboard instead of forcing the company to juggle multiple visualization programs or build an entirely new system. Building this way prepares for future growth while creating a leaner product that suits current needs without extra complexity. It requires a lower up-front financial outlay, too, which is a major consideration for executives worried about the size of big data investments. Scalability also leaves room for changing priorities. That off-the-shelf analytics bundle could lose relevance as a company shifts to meet the demands of an evolving marketplace. Choosing scalable solutions protects the initial technology investment. Businesses can continue using the same software for longer because it was designed to be grow along with them. When it comes time to change, building onto solid, scalable software is considerably less expensive than trying to adapt less agile programs. There’s also a shorter “ramp up” time to bring new features online than to implement entirely new software. As a side benefit, staff won’t need much training or persuasion to adopt that upgraded system. They’re already familiar with the interface, so working with the additional features is viewed as a bonus rather than a chore."   
    },
    {
        question: "Describe the differences between the waterfall SDLC and agile.",
        answer: "Waterfall breaks down software development into isolated phases that flow into each other, while Agile advocates iterative development cycles in which multiple lifecycle phases can run in parallel. The waterfall is a regimented software development approach, while Agile is a dynamic software development strategy. Waterfall is particularly useful for small, well-planned physical projects and agile works well for large or complex software developments that may involve many team members."   
    },
    {
        question: "Describe a programming concept in Laymen's terms as though it is to someone who is not technical.",
        answer: "Programming is an attempt to create a representation of reality on the computer. There's a lot of tools and devices that exist that do this already -- think about how a spreadsheet makes it easier for us to represent accounting or statistics, or how a Powerpoint presentation allows us to store and display our presentations. Sometimes we need to build custom representations of reality into new or existing applications that reflect our business processes. There's lots of ways to program, and one of the most common ways to program is object oriented programming, where the code we build is specifically designed to replicate the concepts of reality. The 'things' in reality have attributes and behaviors. For instance, a human being often has arms and legs, hair color, ethnicity, and can often Speak and Walk.  Speaking and Walking can come in different varieties, such as what language one is speaking, or the speed or manner at which one is walking. Human Beings often have interactions with other types of 'things', whether they be animals, other humans, other living organisms, or inanimate objects. There are themes in reality that often need a way to be represented, such as interactions between 'things', categorization of things, etc. Consider business processes that go on in our organization. There exists very complicated 'business logic' that needs to get represented in the software that our organization uses. Object-Oriented programming provides a means to accurately represent these 'real world concepts' and 'business logic'."   
    },
    {
        question: "What is meant by object-oriented programming?",
        answer: "Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well-suited for programs that are large, complex and actively updated or maintained. This includes programs for manufacturing and design, as well as mobile applications; for example, OOP can be used for manufacturing system simulation software. The organization of an object-oriented program also makes the method beneficial to collaborative development, where projects are divided into groups. Additional benefits of OOP include code reusability, scalability and efficiency. The first step in OOP is to collect all of the objects a programmer wants to manipulate and identify how they relate to each other -- an exercise known as data modeling. Examples of an object can range from physical entities, such as a human being who is described by properties like name and address, to small computer programs, such as widgets. Once an object is known, it is labeled with a class of objects that defines the kind of data it contains and any logic sequences that can manipulate it. Each distinct logic sequence is known as a method. Objects can communicate with well-defined interfaces called messages."   
    },
    {
        question: "Explain the differences between Front End and Back End Development.",
        answer: "Front-end development focuses on the visual aspects of a website – the part that users see and interact with. Back-end development comprises a site's structure, system, data, and logic. There are three people in any Web Development team. Front End Developer - Let's call him John, Back End Developer - Let's call him Dave. Web Designer - Let's call him Leo. John codes what you see on your screen when you visit a website. This includes the buttons, text fields, forms and animations. John doesn't design the website. He doesn't choose the colors and the layout to use.  Leo does.  Leo creates a design for pages in an image format, and then John converts that image into live a page with code. Dave's code handles all the data that is required by the application. If John, Dave and Leo create a registration page for their website, here's what the process will look like: Leo creates a design with a tool like Adobe Photoshop or Adobe InDesign.This design is currently in Image format and is non-interactive. You cannot click any of the buttons or interact with the forms. Leo, the Web Designer, sends this image file to the Front End Developer, John. Now, John writes code that builds a real page that looks just like the one in the image. At this stage, the page has a form that can be submitted, but if a user tries to submit the form, the data goes nowhere. This is where Dave, the Back-End Developer, comes in. He writes some magical code that handles all the data that comes from the user when she submits the form. Dave's code validates the data for errors like invalid email, empty password field, etc. If Dave's code finds no validation errors in the data, the data is stored in the database. Now, the user is able to login to the website. The same process is followed for every page of a website."   
    },
    {
        question: "Describe how you would plan a new software project.",
        answer: "I would start by defining and analysing the project's scope in terms of the proposed functional and non-functional requirements. I would take into account any budgets and constraints as well as assign roles to team members, if any. I would break down the meain components of the program into small, manageable sections, isolating tasks within the project. I would design time-based objectives to plan coding, I would start by implementing psuedocode and using step-wise refinement to add depth to the algorithm before beginning to code, making any adjustments to ensure success. "
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


