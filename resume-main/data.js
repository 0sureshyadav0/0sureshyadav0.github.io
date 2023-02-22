const userDetails = {
    name: "Suresh Yadav",
    designation: "Full Stack Software Engineer",
    // A multi-skilled and dedicated IT professional with over 5 years of experience, adept in software development, well-versed in different programming languages. Well-rounded experience in OOPs, mobile development and user-centered design. A prodigy in learning new technologies. Strong background in team management and delegation.
    description: "A person who is more enthusiast in tech with an experience of two year in HTML, CSS, JS, PHP, MySQL, Flutter, Dart & C  as well as an experienced person in Android and iOS development. I can provide you with application & web development using Flutter framework. For more info visit: https://sureshyadav.info.np/",
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
    // {
    //     icon: "fab fa-android",
    //     title: "Android",
    //     scale: 5,
    //     tech: ["Java", "Kotlin", "XML", "Gradle"],
    //     lib: ["RxJava", "Room", "Dagger", "LiveData", "Retrofit", "Firebase"]
    // },
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
    // {
    //     icon: "fab fa-react",
    //     title: "ReactJS",
    //     scale: 5,
    //     tech: ["JavaScript", "TypeScript", "npm"],
    //     lib: ["Redux", "FCM", "AntD"]
    // },
    // {
    //     icon: "fab fa-python",
    //     title: "Python",
    //     scale: 5,
    //     tech: ["Python", "Django", "pip"],
    //     lib: ["TensorFlow", "OpenCV", "celery", "geodjango", "channels"]
    // },
    // {
    //     icon: "fab fa-golang",
    //     title: "GoLang",
    //     scale: 5,
    //     tech: ["Go", "gRPC"],
    //     lib: ["Gin", "Ginkgo"]
    // },
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
    // {
    //     icon: "fa fa-server",
    //     title: "Server & Scripting",
    //     scale: 3,
    //     tech: ["NGINX", "Shell"],
    //     lib: ["Docker"]
    // },
    {
        icon: "fa fa-code",
        title: "Other Languages & Frameworks",
        scale: 3,
        tech: ["C", "C++","JAVA"],
        lib: ["ASP.NET", "Lucene Elastic Search", "Rust", "C#.NET"]
    },
    // {
    //     printBreak: true,
    //     icon: "fab fa-app-store-ios",
    //     title: "Applications",
    //     scale: 4,
    //     tech: ["Adobe Illustrator", "Adobe AfterEffects", "CorelDRAW", "Microsoft Office"],
    //     lib: []
    // }
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
    // {
    //     update: "Will be published after having experience in TechCompany"
    // }
    {
        position: "Will be published after having experience in TechCompany.",
        company: "",
        duration: "",
        tech: [],
        achievements: [],
    },
    // {
    //     position: "Lead Engineer",
    //     company: "ShopUp India, Bangalore",
    //     duration: "Dec 2022 - Present",
    //     tech: ["GoLang", "Flutter", "ReactJS"],
    //     achievements: [],
    // },
    // {
    //     position: "Senior Engineer",
    //     company: "Falabella India, Bangalore",
    //     duration: "Oct 2020 - Nov 2022",
    //     tech: ["Flutter", "ReactJS"],
    //     achievements: [
    //         "Developed applications for Android and iOS using Flutter framework",
    //         "Designed elegant and user-friendly interfaces for mobiles and web",
    //         "Produced clean, efficient code based requirement specifications",
    //         "Integrated software components and third-party APIs",
    //         "Written unit and integration test cases",
    //         "Troubleshot, fixed and/or improved existing software",
    //         "Created technical documentation for reference and reporting",
    //     ],
    // },
    // {
    //     position: "Team Lead and Developer",
    //     company: "Netzary Infodynamics",
    //     duration: "Jul 2017 - Sep 2020",
    //     tech: ["Android", "iOS", "Flutter", "Python", "Web"],
    //     achievements: [
    //         "Supervised and managed all the activities within the team",
    //         "Identified team goal and evaluated their progress",
    //         "Coached team members to develop necessary skills",
    //         "Delegated tasks to individual team members comprehending their abilities",
    //         "Helped the team accomplish the set goals",

    //         "Developed applications for Android and iOS using native as well as hybrid tool (Flutter)",
    //         "Developed applications for Web with Python on top of Django framework",
    //         "Designed elegant and user-friendly interfaces for mobiles and web",
    //         "Produced clean, efficient code based requirement specifications",
    //         "Integrated software components and third-party APIs",
    //         "Tested and deployed programs and/or systems",
    //         "Troubleshot, fixed and/or improved existing software",
    //         "Created technical documentation for reference and reporting",
    //     ],
    // },
];

const education = [
    // {
    //     board: "Bangalore University",
    //     school: "RR Institutions/Bangalore, IN",
    //     concentration: "Bachelor of Computer Application",
    //     percentage: 86,
    //     duration: "Apr 2014 - Jun 2017",
    //     achievements: [
    //         "Designed and developed an online University data processing system using ASP MVC, MS SQL Express, web technologies as an academic project",
    //         "Designed and developed an SIMS Windows Form Application using C#.NET and MS SQL Express as an academic project",
    //         "Created an Android application for cultural event held in the college with features like registration, information about events, etc.",
    //         "Participated and won inter-college competition for web application development"
    //     ]
    // },
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
                url: "https://pub.dev/packages/safe_device_check/"
            }
        ]
    },
    // {
    //     name: "PopupMenu (not maintained)",
    //     description: "Customizable android popup menu with support support for icons",
    //     duration: "Sep 2018",
    //     tech: ["Android", "Kotlin"],
    //     refs: [
    //         {
    //             icon: "fa fa-link",
    //             tooltip: "Check it out",
    //             url: "https://github.com/rajyadavnp/PopupMenu"
    //         }
    //     ]
    // },


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
                url: "https://pub.dev/packages/time_dropper/"
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
    // {
    //     name: "Urdu Audio",
    //     description: "Urdu audio is an audio streaming mobile application available on Android and iOS platform.",
    //     duration: "Feb 2018 - Mar 2018",
    //     tech: ["Flutter", "Scoped Model", "FCM"],
    //     refs: [
    //         {
    //             icon: "fab fa-google-play",
    //             tooltip: "View in play store",
    //             url: "https://play.google.com/store/apps/details?id=com.bhatkallys.urduaudio",
    //         },
    //         {
    //             icon: "fab fa-app-store",
    //             tooltip: "View in app store",
    //             url: "https://apps.apple.com/us/app/urdu-audio/id885622514",
    //         },
    //     ]
    // },
];

