const logotext = "YJ";
const meta = {
    title: "Youssef Jedidi",
    description: "I’m Youssef Jedidi data scientist _ Full stack devloper,currently working in Montreal",
};

const introdata = {
    title: "I’m Youssef Jedidi",
    animated: {
        first: "I develop efficient software",
        second: "I specialize in AI and ML",
        third: "I drive results with data driven decision making.",
        fourth: "I design user-centric websites.",
        fifth: "I turn data into insights.",
    },
    description: "Hello! I'm Youssef Jedidi, a Computer Engineering student at Concordia University with a passion for innovative software development, specializing in machine learning, deep learning, and web development.    ",
    your_img_url: "/images/landingpic.jpg",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "",
};
const experience = [
    {
    jobtitle: "Project Team Lead",
    where: "Biomedical Engineering Club",
    date: "2024-current",
    },
    {
        jobtitle: "Software Developper",
        where: "Space Concordia",
        date: "2022-current",
    },
    /*
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },*/
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [/*{
        title: "UI & UX Design",
        description: "",
    },*/
    {
        title: "AI and ML development",
        description: ["- Machine Learning A-Z By Udemy",
            "- Neural Networks and Deep Learning By DeepLearning.AI",
            "- AWS Educate Machine Learning Foundations By Amazon Web Services (AWS)",
            "- Disaster Risk Monitoring Using Satellite Imagery by NVIDIA,",
            "- Structuring Machine Learning Projects By DeepLearning.AI",]
    },
    {
        title: "Software development",
        description:  [ "- Foundations of Cybersecurity By Google",
            "- AWS Introduction | Initiation à AWS By CMAI - Canadian Mobility and Aerospace Institute (IMACA)",
            "- Software Engineering Job Simulation By Goldman Sachs", 
            "- Data Analytics and Visualization Job Simulation by Accenture North America" , 
            "- Intro. to Game Development by GOMYCODE", 
            "- Digital Marketing By Accenture", 
            "- Learn to Program: The Fundamentals by University of Toronto"],
    },
];

const dataportfolio = [
    {
    img: "/images/abc_bank.jpg",
    description: "AI-Driven Customer Segmentation & Retention Strategy for ABC Bank",
    link: "https://github.com/youssefjedidi/bank_marketing_AI",
},
{
    img: "/images/mlair.jpeg",
    description: "Green Aircraft Design Project",
    link: "https://github.com/youssefjedidi/Aircraft_Noise_Predictor",
    },
    {
        img: "/images/HeartXAI.jpeg",
        description: "Heart Attack Dataset Analysis XAI (explainable artificial intelligence) Project",
        link: "https://github.com/youssefjedidi/XAI_heart_attack_classifier",
    },
    {
        img: "/images/tunweb.png",
        description: "a website about Tunisia , built using React framework, aiming to showcase information about Tunisian history, culture, and tourism.",
        link: "https://github.com/youssefjedidi/Tun_App",
    },
    /*
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "2",
    },*/
    {
        img: "/images/gamejam.jpg",
        description: '  "A New Dawn" is a 2D Unity game developed for the Brackeys Game Jam 2023.1 competition"',
        link: "https://github.com/youssefjedidi/A_New_Dawn",
    },/*
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },   */ 
];

const contactConfig = {
    YOUR_EMAIL: "youssefjedidi2022@gmail.com",
    YOUR_FONE: "(514)346-7980",
    description: " ",
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
    dataabout,
    dataportfolio,
    experience,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};