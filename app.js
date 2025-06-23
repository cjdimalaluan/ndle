// app.js
// This file contains all the data and interactive logic for the NDLE Review Hub.

// --- Data Section ---
// This section holds all the content for the website.

const tableOfSpecs = [
    { id: 'nbcd', title: 'Nutritional Biochemistry & Clinical Dietetics', weight: '35%', competencies: [
        { id: 'A1', title: 'Anatomy and Physiology', weight: '13%', topics: ['Digestive, Endocrine, Cardiopulmonary, Circulatory, Excretory, Skeletal, Muscular systems and their relation to nutrition', 'Cell, tissue, and membrane structure and function', 'Anatomical locations and physiological functions of major body systems'] },
        { id: 'A2', title: 'Biochemistry', weight: '15%', topics: ['Nutrient digestion, absorption, metabolism, and excretion', 'GIT hormones, enzymes, and organ roles in metabolism', 'Krebs Cycle and energy metabolism pathways (CHO, PRO, FAT)', 'Fluid & electrolytes, anabolic vs. catabolic reactions'] },
        { id: 'A3', title: 'Basic Nutrition', weight: '12%', topics: ['Macro & micronutrients: RENI, food sources, bioavailability, deficiency/toxicity', 'Using nutrition tools: Dietary Standards, Food Guides, FEL, FCT', 'Nutrient vs. calorie density', 'Interpreting food labels'] },
        { id: 'A4', title: 'Clinical Nutrition 1 (General MNT)', weight: '25%', topics: ['Role of the Clinical ND', 'Nutrition Care Process (NCP): Screening & Assessment', 'Differentiating nutrition vs. medical diagnosis', 'Computing nutrient requirements', 'Interpreting lab data (biochemical tests)', 'Drug-nutrient interactions', 'MNT for Diabetes Mellitus', 'MNT for Renal Disorders', 'MNT for GI, cardiovascular, and other conditions'] },
        { id: 'A5', title: 'Clinical Nutrition 2 (MNT Practice)', weight: '25%', topics: ['Planning MNT interventions for high-risk conditions', 'MNT for Critical Care (trauma, surgery, burns)', 'MNT for Metabolic disorders & Inborn Errors', 'MNT for Oncology & HIV/AIDS', 'Food texture modification for dysphagia', 'Enteral and Parenteral nutrition calculations', 'Counseling techniques and patient education'] },
        { id: 'A6', title: 'Nutrition Updates', weight: '10%', topics: ['Current diet trends (vegetarianism, keto, etc.)', 'Alternative medicine, supplements, functional foods', 'Corporate Nutrition & Wellness', 'Sports Nutrition', 'Gerontology, Dental, and Eye Nutrition'] },
    ]},
    { id: 'cphn', title: 'Community & Public Health Nutrition', weight: '30%', competencies: [
        {id: 'C1', title: 'Role of the ND in Community Nutrition', weight: '4%', topics: ['Principles of Community Nutrition', 'Roles and functions of a community ND', 'Health delivery system and teams', 'Quality assurance procedures']},
        {id: 'C2', title: 'Nutrition Assessment', weight: '14%', topics: ['Principles of community nutrition assessment', 'Tools for assessment (surveys, anthropometry, etc.)', 'Methods of food consumption surveys', 'Interpreting clinical signs of deficiency', 'Biochemical tests in nutrition surveys']},
        {id: 'C3', title: 'Nutrition Education', weight: '12%', topics: ['Principles of nutrition education', 'Designing nutrition education programs', 'Developing and selecting teaching aids', 'Measuring customer satisfaction']},
        {id: 'C4', title: 'Program Planning and Management', weight: '20%', topics: ['The program planning cycle', 'Writing SMART goals and objectives', 'Designing and implementing nutrition interventions', 'Program monitoring and evaluation', 'Data collection and analysis for program admin']},
        {id: 'C5', title: 'Nutrition Networking', weight: '12%', topics: ['Government & non-government nutrition programs', 'Coordination with health agencies and community leaders', 'Relevant laws and legislation on nutrition', 'Teamwork concepts']},
        {id: 'C6', title: 'Nutrition in the Life Cycle', weight: '20%', topics: ['Growth and development at all life stages', 'Nutritional needs and feeding principles for each stage', 'Health problems and risk factors by age group', 'Interpersonal communication and counseling skills']},
        {id: 'C7', title: 'Nutrition Research', weight: '8%', topics: ['Methodologies in food and nutrition research', 'Sampling techniques', 'Nutrition surveys vs. surveillance', 'Interpreting National Nutrition Survey (NNS) findings']},
        {id: 'C8', title: 'Nutrition Projects and Programs in the Philippines', weight: '10%', topics: ['Philippine Plan of Action for Nutrition (PPAN)', 'Major nutrition problems in the Philippines', 'Organizational structure of the NNC', 'Analysis of vital statistics and health indicators']},
    ]},
    { id: 'ffss', title: 'Foods & Food Service Systems', weight: '35%', competencies: [
        { id: 'F1', title: 'Understanding Foods', weight: '10%', topics: ['Composition and chemical properties of all food groups', 'Classification and market forms of food', 'Functions of ingredients in food preparation', 'Principles of cookery and chemical reactions', 'Storage procedures for each food class'] },
        { id: 'F2', title: 'Basic Cookery Principles', weight: '10%', topics: ['Culinary techniques and vocabulary', 'Methods of heat transfer (conduction, convection, radiation)']},
        { id: 'F3', title: 'Meal Planning and Evaluation', weight: '5%', topics: ['Planning meals for individuals and large quantities', 'Considerations: nutritive value, cost, sanitation, satisfaction']},
        { id: 'F4', title: 'Food Formulation & Recipe Development', weight: '1%', topics: ['Recipe development and evaluation process']},
        { id: 'F5', title: 'Food Microbiology', weight: '10%', topics: ['Food safety hazards (biological, chemical, physical)', 'FATTOM - Factors affecting microbial growth', 'Monitoring food safety (HACCP)', 'Government food safety regulations']},
        { id: 'F6', title: 'Food Processing and Preservation', weight: '4.8%', topics: ['Principles of food preservation techniques', 'Effects of preservation on food quality']},
        { id: 'F7', title: 'Quality Assurance', weight: '1.2%', topics: ['Methods for food evaluation and quality control']},
        { id: 'F8', title: 'Food Service Institutions', weight: '2%', topics: ['Types of foodservice institutions', 'Systems approach to foodservice organizations']},
        { id: 'F9', title: 'Quantity Food Production, Assembly & Service', weight: '20%', topics: ['Food production objectives and standards', 'Principles of quantity food production', 'Recipe standardization and adjustment', 'Food safety procedures (HACCP), waste management, pest control', 'Food distribution and service systems']},
        { id: 'F10', title: 'Purchasing, Receiving, Storage & Inventory', weight: '12%', topics: ['Procedures for purchasing, receiving, storage', 'Inventory control methods (FIFO)', 'Cost control methods for materials, utilities, labor']},
        { id: 'F11', title: 'Facilities & Equipment', weight: '8%', topics: ['Foodservice facility design and layout', 'Evaluating foodservice equipment']},
        { id: 'F12', title: 'Foodservice Management', weight: '14%', topics: ['Theories and functions of management', 'Staffing and human resource management', 'Financial operations and budgeting', 'Marketing and promotional strategies', 'Labor laws and Code of Ethics']},
    ]},
];

const allQuestions = [
    // This array should contain all 600 questions from the FNDRC mock exams.
    // For brevity, only a few samples are included here.
    // FFSS
    {id:1, subject:"ffss", question:"Sentence A. Crystals are formed from concentrated sugar solutions.<br>Sentence B. Crystallization is inversely related to the ease of solubility.", options:["Sentence A is correct", "Sentence B is correct", "Both sentences are correct", "Both sentences are incorrect"], answer:"Sentence A is correct", rationale:"Sentence A is correct. As a sugar solution becomes more concentrated (supersaturated), sugar molecules come out of the solution to form crystals. Sentence B is incorrect; crystallization is inversely related to solubility. Sugars that are less soluble (like lactose) crystallize more easily than highly soluble sugars (like fructose)."},
    {id:2, subject:"ffss", question:"Sentence A. Shortening impedes gluten development by hydrolysis.<br>Sentence B. Impeding gluten development would result in flaky products.", options:["Sentence A is correct", "Sentence B is correct", "Both sentences are correct", "Both sentences are incorrect"], answer:"Sentence B is correct", rationale:"Sentence A is incorrect. Shortening impedes gluten development by physically coating gluten strands, preventing them from forming long, elastic networks. It does not work by hydrolysis. Sentence B is correct. By shortening the gluten strands, the resulting baked product is tender and flaky rather than chewy."},
    // NBCD
    {id:201, subject:"nbcd", question:"Which of the following is/are sources of energy during starvation? <br>I. B-hydroxybutyric acid <br>II. Glucose <br>III. Acetoacetic acid", options:["I only", "I and II only", "II and III only", "All of the above"], answer:"All of the above", rationale:"During starvation, the body relies on multiple energy sources. Glucose is used initially, primarily by the brain. As starvation progresses, the body produces ketone bodies (B-hydroxybutyric acid and acetoacetic acid) from fatty acid breakdown to provide energy for the brain and other tissues, sparing glucose. Thus, all three are used."},
    {id:202, subject:"nbcd", question:"___ is a hormone that diminishes appetite and increases energy expenditure while ___ increases appetite and decreases energy expenditure.", options:["Neuropeptide Y, leptin", "Leptin, neuropeptide Y", "Cortisol, leptin", "Leptin, glucagon"], answer:"Leptin, neuropeptide Y", rationale:"Leptin, produced by adipose tissue, acts as a satiety hormone, diminishing appetite and increasing energy expenditure. Neuropeptide Y (NPY) is a potent appetite stimulant that decreases energy expenditure."},
    // CPHN
    {id:401, subject:"cphn", question:"The tolerable upper intake level (UL) is the largest daily nutrient intake shown to harbor no adverse side effects to", options:["Half the individuals in a particular age or gender group", "A large majority of individuals in a particular age or gender group", "Everyone in a particular age or gender group", "None of the above"], answer:"A large majority of individuals in a particular age or gender group", rationale:"The Tolerable Upper Intake Level (UL) is the highest level of daily nutrient intake that is likely to pose no risk of adverse health effects to almost all individuals (a large majority, ~97-98%) in a particular life stage and gender group. It is not a level safe for absolutely everyone, as some individuals may have unique sensitivities."},
    {id:402, subject:"cphn", question:"Based on the Acceptable Macronutrient Distribution Ranges (AMDRs), energy from fat as a percentage of total energy for adults should be within the range?", options:["<10%", "10-20%", "15-30%", "35-50%"], answer:"15-30%", rationale:"The AMDR for adults for fat is 15-30% of total energy intake. This range is associated with reduced risk of chronic diseases while providing adequate amounts of essential fatty acids."},
];

// --- Alpine.js Logic ---
// This section defines the interactive components for the website.

document.addEventListener('alpine:init', () => {
    // Component for sitewide data, like the mobile navigation state
    Alpine.data('appData', () => ({
        navOpen: false,
    }));

    // Logic for the countdown timer on the homepage
    Alpine.data('homepage', () => ({
        countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        init() {
            const examDate = new Date('2025-11-06T08:00:00');
            this.updateCountdown(examDate);
            const timer = setInterval(() => {
                const diff = examDate - new Date();
                if (diff < 0) {
                    clearInterval(timer);
                    this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
                    return;
                }
                this.updateCountdown(examDate);
            }, 1000);
        },
        updateCountdown(examDate) {
            const now = new Date();
            const diff = examDate - now;
            this.countdown.days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
            this.countdown.hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.countdown.minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
            this.countdown.seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
        }
    }));

    // Logic for the interactive Blueprint page
    Alpine.data('blueprintPage', () => ({
        tos: tableOfSpecs,
        init() {
            // On page load, check which topics are already marked as complete in localStorage
            this.$nextTick(() => {
                const completed = JSON.parse(localStorage.getItem('ndleProgress') || '[]');
                completed.forEach(topicId => {
                    const checkbox = document.getElementById(topicId);
                    if (checkbox) checkbox.checked = true;
                });
            });
        },
        toggleTopicCompletion(topicId) {
            let completed = JSON.parse(localStorage.getItem('ndleProgress') || '[]');
            if (document.getElementById(topicId).checked) {
                if (!completed.includes(topicId)) completed.push(topicId);
            } else {
                completed = completed.filter(id => id !== topicId);
            }
            localStorage.setItem('ndleProgress', JSON.stringify(completed));
            // Send a signal that other components might care about
            window.dispatchEvent(new CustomEvent('progress-updated'));
        }
    }));

    // Logic for the interactive quiz on the Practice page
    Alpine.data('quiz', () => ({
        quizActive: false,
        quizFinished: false,
        selectedSubject: 'ffss',
        numQuestions: 10,
        quizQuestions: [],
        currentQuestionIndex: 0,
        score: 0,
        selectedOption: null,
        submitted: false,
        startQuiz() {
            this.quizFinished = false;
            this.quizActive = true;
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.generateQuestions();
        },
        generateQuestions() {
            const filtered = allQuestions.filter(q => q.subject === this.selectedSubject);
            this.quizQuestions = filtered.sort(() => 0.5 - Math.random()).slice(0, this.numQuestions);
            this.submitted = false;
            this.selectedOption = null;
        },
        selectAnswer(option) {
            if (this.submitted) return;
            this.submitted = true;
            this.selectedOption = option;
            if (option === this.quizQuestions[this.currentQuestionIndex].answer) {
                this.score++;
            }
        },
        nextQuestion() {
            if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
                this.currentQuestionIndex++;
                this.submitted = false;
                this.selectedOption = null;
            } else {
                this.quizFinished = true;
            }
        },
        resetQuiz() {
            this.quizActive = false;
            this.quizFinished = false;
        }
    }));

    // Logic for the progress dashboard
    Alpine.data('dashboard', () => ({
         completedTopics: 0,
         totalTopics: 0,
         progressPercentage: '0.0',
         init() {
            this.totalTopics = tableOfSpecs.reduce((total, subject) => {
                return total + subject.competencies.reduce((subTotal, comp) => subTotal + comp.topics.length, 0);
            }, 0);
            this.updateProgress();
            // Listen for signals from the blueprint page to update progress in real-time
            window.addEventListener('progress-updated', () => {
                this.updateProgress();
            });
         },
         updateProgress() {
            const completed = JSON.parse(localStorage.getItem('ndleProgress') || '[]');
            this.completedTopics = completed.length;
            if (this.totalTopics > 0) {
                this.progressPercentage = ((this.completedTopics / this.totalTopics) * 100).toFixed(1);
            }
         }
    }));
});
