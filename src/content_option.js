const logotext = "Youssef Jedidi";
const meta = {
    title: "Youssef Jedidi - Computer Engineering Student",
    description: "Computer Engineering student at Concordia University specializing in AI/ML, full-stack development, and innovative software solutions in Montreal, QC.",
};

const introdata = {
    title: "I’m Youssef Jedidi,",
    animated: {
        first: "I build AI-powered solutions",
        second: "I develop scalable software systems",
        third: "I optimize ML models for production",
        fourth: "I create intuitive web experiences",
        fifth: "I solve complex engineering problems",
    },
    description: "Computer Engineering student at Concordia University with a passion for AI/ML and full-stack development. Experienced in building scalable software solutions, from ML pipelines to web applications, with a focus on clean code and innovative problem-solving.",
    your_img_url: "/images/landingpic.jpg",
};

const education = {
    degree: "Bachelor of Engineering - Computer Engineering",
    school: "Concordia University",
    location: "Montreal, QC",
    graduation: "Expected: May 2028",
    achievements: [
        "Dean's List 2024-2025 (Academic Excellence)",
        "Background: 53 credits in Aerospace Engineering (Sep. 2022 – May 2024)"
    ]
};
const experience = [
    {
    jobtitle: "Co-founder, Projects VP & Technical Lead",
    where: "Concordia Biomedical Engineering Club",
    date: "Sep. 2024 – Present",
    description: "Established the club's software development lifecycle with code review processes and Git workflows. Developed the official React.js website for project showcases and member recruitment. Leading a team of 6+ engineers in best practices and collaboration."
    },
    {
        jobtitle: "Software Developer",
        where: "Space Concordia",
        date: "Oct. 2022 – May 2024",
    },
];

const skills = {
    languages: [
        "Python",
        "JavaScript (ES6+)",
        "C++",
        "SQL"
    ],
    webPrototyping: [
        "React",
        "HTML/CSS",
        "REST APIs",
        "JSON Parsing"
    ],
    cloudDevops: [
        "GCP",
        "CI/CD",
        "macOS/Linux CLI",
        "Bash Scripting",
        "Cron Jobs",
        "Git",
        "GitHub"
    ],
    librariesFrameworks: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "TensorFlow Lite",
        "Matplotlib",
        "Pytest"
    ]
};

const services = [
    {
        title: "Professional Development & Certifications",
        description: [
            "Machine Learning A-Z By Udemy",
            "Neural Networks and Deep Learning By DeepLearning.AI",
            "AWS Educate Machine Learning Foundations By Amazon Web Services (AWS)",
            "Disaster Risk Monitoring Using Satellite Imagery by NVIDIA",
            "Structuring Machine Learning Projects By DeepLearning.AI",
            "AWS Introduction | Initiation à AWS By CMAI - Canadian Mobility and Aerospace Institute (IMACA)",
            "Software Engineering Job Simulation By Goldman Sachs",
            "Data Analytics and Visualization Job Simulation by Accenture North America",
            "Foundations of Cybersecurity By Google",
            "Intro. to Game Development by GOMYCODE",
            "Digital Marketing By Accenture",
            "Learn to Program: The Fundamentals by University of Toronto"
        ]
    },
];

const dataportfolio = [
    {
    img: "/images/abc_bank.jpg",
    description: "Customer Churn Prediction System - Built ML model achieving 85% ROC AUC with SHAP explainability, identifying $2.27M in annual revenue at risk through targeted retention strategies.",
    link: "https://github.com/youssefjedidi/bank_marketing_AI",
},
{
    img: "/images/HeartXAI.jpeg",
    description: "AI Dermatology Diagnostic Tool - CNN-based skin condition classifier achieving 82.1% accuracy, optimized for mobile deployment with TensorFlow Lite",
    link: "https://github.com/youssefjedidi/AI-Dermatology-Project",
},
{
    img: "/images/mlair.jpeg", 
    description: "Automated Airport Operations Monitor & Reporter - Real-time flight data pipeline with GCP deployment, automated Slack alerts, and KPI reporting",
    link: "https://github.com/youssefjedidi/airport-operations-pipeline",
},
{
    img: "/images/tunweb.png",
    description: "Interactive Algorithm Visualization Platform - Educational web platform visualizing sorting and pathfinding algorithms with 60fps performance",
    link: "https://github.com/youssefjedidi/DSA_Website",
},
{
    img: "/images/mlair.jpeg",
    description: "Green Aircraft Design Project",
    link: "https://github.com/youssefjedidi/Aircraft_Noise_Predictor",
    },   
    {
        img: "/images/tunweb.png",
        description: "a website about Tunisia , built using React framework, aiming to showcase information about Tunisian history, culture, and tourism.",
        link: "https://github.com/youssefjedidi/Tun_App",
    },
    {
        img: "/images/gamejam.jpg",
        description: '"A New Dawn" is a 2D Unity game developed for the Brackeys Game Jam 2023.1 competition',
        link: "https://github.com/youssefjedidi/A_New_Dawn",
    },
    {
        img: "/images/HeartXAI.jpeg",
        description: "Heart Attack Dataset Analysis XAI (explainable artificial intelligence) Project",
        link: "https://github.com/youssefjedidi/XAI_heart_attack_classifier",
    },
];

const contactConfig = {
    YOUR_EMAIL: "youssefjedidi2022@gmail.com",
    YOUR_FONE: "",
    description: "I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn! :)",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_upiqsbk",
    YOUR_TEMPLATE_ID: "template_gn0t00c",
    YOUR_USER_ID: "nWW-hP5g0boErypRe",
};

const socialprofils = {
    github: "https://github.com/youssefjedidi",
    //facebook: "https://facebook.com",
    linkedin: "https://linkedin.com/in/youssef-jedidi",
    //twitter: "https://twitter.com",
};
export {
    meta,
    education,
    dataportfolio,
    experience,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};