const userDetails = {
    name: "Suresh Yadav",
    designation: "Full Stack Software Engineer",
    description: "Computer Science undergraduate with 2+ years of experience in HTML, CSS, JS, PHP, MySQL, Flutter, Dart & C  as well as in Android and iOS development. I can provide you with application & web development using Flutter framework. As I am mostly a self-learner, I can easily adapt to new things and always ready to take on a challenge. For more info visit: https://sureshyadav.info.np/",
    picture: {
        src: "suresh.jpg",
        link: "https://www.linkedin.com/in/rajyadavnp"
    },
    links: [
        {
            icon: "fa fa-envelope-open",
            tooltip: "Send mail",
            label: "sureshyadav_np@outlook.com",
            link: "mailto:sureshyadav_np@outlook.com?subject=Job%20offer",
        },
        {
            icon: "fa fa-map-marker-alt",
            tooltip: "View in maps",
            label: "Dang, Nepal",
            link: "https://goo.gl/maps/srwPcAxy5S32",
        },
        {
            icon: "fa fa-mobile-alt",
            tooltip: "Call",
            label: "+977-9829552758",
            link: "tel:+922-9829552758",
        },
        {
            icon: "fa fa-globe",
            tooltip: "Visit",
            label: "www.sureshyadav.info.np",
            link: "https://www.sureshyadav.info.np",
        },
    ],
    sns: [
        {
            icon: "fab fa-github",
            tooltip: "Github",
            link: "https://github.com/0sureshyadav0",
        },
        {
            icon: "fab fa-stack-overflow",
            tooltip: "Stack Overflow",
            link: "https://stackoverflow.com/users/20845494/suresh-yadav",
        },
        {
            icon: "fab fa-linkedin",
            tooltip: "LinkedIn",
            link: "https://www.linkedin.com/in/0sureshyadav0/",
        },
        {
            icon: "fab fa-quora",
            tooltip: "Quora",
            link: "https://www.quora.com/profile/Suresh-Yadav-2725",
        },
    ],
    qrCode: "qr-code.png"
}

const skills = [
   
    {
        icon: "<div class='flutter-icon'></div>",
        title: "Flutter",
        scale: 5,
        tech: ["Dart", "pub","Firebase"],
        lib: ["Provider", "BLoC", "GetX", "Scoped Model"]
    },
    {
        icon: "fab fa-android",
        title: "Android",
        scale: 3,
        tech: ["Flutter","Firebase"],
        lib: ["JAVA","Kotlin"]
    },
    {
        icon: "fab fa-apple",
        title: "iOS",
        scale: 3,
        tech: ["Flutter","Firebase"],
        lib: ["Alamofire", "SQLite.swift"]
    },
   
    {
        icon: "fa fa-globe",
        title: "Web",
        scale: 5,
        tech: ["HTML", "CSS", "JavaScript"],
        lib: ["jQuery", "Bootstrap", "UIKit"]
    },
    {
        icon: "fa fa-database",
        title: "Databases",
        scale: 4,
        tech: ["MySql"],
        lib: ["PostGIS","PostgreSQL","SQLite", "Redis"]
    },
    {
        icon: "fab fa-git-alt",
        title: "Version Control",
        scale: 5,
        tech: ["Git"],
        lib: ["Mercurial"]
    },
  
    {
        icon: "fa fa-code",
        title: "Other Languages & Frameworks",
        scale: 3,
        tech: ["C", "C++","JAVA"],
        lib: ["ASP.NET", "Lucene Elastic Search", "Rust", "C#.NET"]
    },
  
];


const languages = [
    {
        icon: "A",
        name: "English",
        scale: 5,
        proficiency: "Full Professional Proficiency"
    },
    {
        icon: "&#x0905;",
        name: "Hindi",
        scale: 5,
        proficiency: "Full Professional Proficiency"
    },
    {
        icon: "&#x0905;",
        name: "Nepali",
        scale: 5,
        proficiency: "Native or Bilingual Proficiency"
    }
];

const interests = [
    {
        icon: "fa fa-football",
        title: "Basketball"
    },
    {
        icon: "fa fa-running",
        title: "Jogging"
    },
    {
        icon: "fas fa-plane-departure",
        title: "Travelling"
    },
];

const personal = [
    {
        icon: "fa fa-birthday-cake",
        label: "Born",
        value: "Oct 17, 2002"
    },
    {
        icon: "fa fa-user",
        label: "Father's Name",
        value: "Surendra Yadav"
    },
    {
        icon: "fa fa-language",
        label: "Nationality",
        value: "Nepali"
    },
    {
        icon: "fa fa-heart",
        label: "Marital Status",
        value: "Single"
    },
];

const experiences = [
   
    {
        position: "Will be published after having experience in TechCompany.",
        company: "",
        duration: "",
        tech: [],
        achievements: [],
    },
   
];

const education = [
   
    {
        board: "National Education Board (NEB)",
        school: "Gorkha Model Sec. School, Lamahi-Nepal",
        concentration: "School Leaving Certificate (SLC) 10+2 (Science - PCM)",
        percentage: "GPA: 3.31/4",
        duration: "Apr 2018 - Mar 2022",
        achievements: [],
    },
    {
        board: "Private And Boarding School Organization of Nepal (PABSON)",
        school: "Buddha Jyoti HSS/Gadhawa, Nepal",
        concentration: "Secondary Education Examination (SEE)",
        percentage: "GPA: 3.95/4",
        duration: "Apr 2018 - Mar 2020",
        achievements: [],
        printBreak: true,
    },
    {
        board: "Basic Level Education (BLE)",
        school: "Buddha Jyoti Sec. School, Gadhawa-Nepal",
        concentration: "Grade - 8",
        percentage: "Grade: A+",
        duration: "Apr 2008 - Mar 2018",
        achievements: [],
    },
    
];

const personalProjects = [
   
    {
        // (कृषि संस्था)
        name: "Agricultural Organization ",
        description: "This product belongs to private organization, initiated by Suresh Yadav, which manages records of its members including their income.",
        duration: "Apr 2022",
        tech: ["Flutter", "Dart"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "#"
            }
        ]
    },
    {
        name: "Bazaar",
        description: "Upcoming project",
        duration: "Aug 2021",
        tech: ["Flutter", "Dart"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "#"
            }
        ]
    },
   

];

const companyProjects = [
    {
        name: "Appazon",
        description: "A privately held startup software company headquarted in Nepal that develops and markets website building toos, mobile applications and web applications.",
        duration: "May 2022",
        tech: ["Flutter", "Dart"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "#"
            }
        ]
    },
    {
        name: "Sangeet",
        description: "A music app",
        duration: "Sep 2018 - Dec 2018",
        tech: ["Flutter","Dart"],
        refs: []
    },
    
];

