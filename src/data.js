export const skills = [
    {
        title: 'HTML & CSS',
        description: 'Know how to build website from given template. Also have knowledge of Bootsrap framework. Can make responsive websites. Have been working with SASS.',
        level: 4
    },
    {
        title: 'PHP',
        description: 'Have good knowledge of PHP basics. Know how OOP works and also MVC pattern. Have knowledge of proccessing form requests and storing data in database using plain PDO and also PHP framewrok. Have been working with Yii2 framework and I am familiar with Laravel framework.',
        level: 2
    },
    {
        title: 'Java Script',
        description: 'Can select specific element from DOM. Have been working with jQuery library. Know how responde on diferent events. Also know how to manipulate DOM, show/hide elements. Also have basic knowledge of VUE framework.',
        level: 3
    },
    {
        title: 'SQL',
        description: 'Know how relations works. Can write simple queries and join different tables together using foreign keys. Have basic understanding of indexes.',
        level: 2
    }
];

export const Projects = [
    {
        title: 'Zutzu',
        description: 'My first professional experience. We were building recruitment platform, for agencies - to help them find perfect candidates, and candidates - to help them find perfect job for them.',
        images: [
            require('@/assets/projects/zutzu.png')
        ],
        link: 'https://zutzu.com/',
        linkAction: 'Zutzu'
    },
    {
        title: 'RCS Mogo Template',
        description: 'Homework for WEB Development course which I successfully graduated. Main goal was to create webpage from given PSD template, also needed to be responsive.',
        images: [
            require('@/assets/projects/Mogo-1.png'),
            require('@/assets/projects/Mogo-2.png'),
            require('@/assets/projects/Mogo-3.png'),
        ],
        link: 'https://github.com/EdijsApse/Mogo-RCS-MD',
        linkAction: 'Git Repo'
    },
    {
        title: 'RCS Final',
        description: 'Final project for RCS WEB Development course. Main goal was to create dynamic website, where user can create their own blog posts.',
        images: [
            require('@/assets/projects/rcs-final-1.png'),
            require('@/assets/projects/rcs-final-2.png'),
            require('@/assets/projects/rcs-final-3.png'),
        ],
        link: 'https://github.com/EdijsApse/RCS-Final-Laravel',
        linkAction: 'Git Repo'
    },
    {
        title: 'WeLearn',
        description: 'Currently in progress',
        images: [
            require('@/assets/projects/We-Learn.png'),
            require('@/assets/projects/We-Learn-2.png'),
            require('@/assets/projects/We-Learn-3.png'),
        ],
        link: 'https://github.com/EdijsApse/We-Learn-VueApp',
        linkAction: 'Git Repo'
    }
];

export const courses = [
    {
        title: 'Riga Coding School - WEB Development',
        content: [
            'HTML5 & CSS3',
            'Java Script basics',
            'jQuery (DOM Manipulations)',
            'PHP Basics',
            'Introduction to OOP in PHP',
            'Laravel',
            'GIT'
        ],
        projects: [
            'Responsive webpage from given template using CSS',
            'Responsive webpage from given template using Bootstrap',
            'Final project based on requirements'
        ],
        intensity: 52,
        link: 'https://rigacoding.lv/apmacibas/web-izstrade-apmacibas/'
    },
    {
        title: 'Vue - The Complete Guide (Router, Vuex)',
        content: [
            'Core concepts',
            'Components',
            'Animations',
            'VueX',
            'VueRouter',
            'Filters',
            'Mixins',
        ],
        projects: [
            'Stock trader APP',
        ],
        intensity: 49,
        link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide'
    },
    {
        title: 'The Complete JavaScript Course 2020',
        content: [
            'Java Script Basics',
            'DOM Manipulation and Events',
            'Java Script Objects and Functions',
            'Intro to ES6',
            'Java Script promises',
        ],
        projects: [
            'Budget App',
            'Forkify',
            'Pig Game'
        ],
        intensity: 28,
        link: 'https://www.udemy.com/course/the-complete-javascript-course'
    },
    {
        title: 'The PHP Practitioner',
        content: [
            'PHP Basics',
            'PHP & HTML',
            'Classes',
            'Composer autoloading',
            'Namespaces',
            'MVC from scratch',
        ],
        projects: [
            'Blog page using custom MVC mini-framework'
        ],
        intensity: 5,
        link: 'https://laracasts.com/series/php-for-beginners'
    },
    {
        title: 'Laravel From Scratch',
        content: [
            'Routing',
            'Database Access',
            'Views',
            'Forms',
            'Controllers',
            'Authentication',
            'Core Concepts',
        ],
        projects: [
            'Twitter clone'
        ],
        intensity: 9,
        link: 'https://laracasts.com/series/laravel-6-from-scratch'
    },
]
