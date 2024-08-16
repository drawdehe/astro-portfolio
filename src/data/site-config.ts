export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/edward-sjoblom/'
        },
        {
            text: 'Github',
            href: 'https://github.com/drawdehe/'
        },
        {
            text: 'Email',
            href: 'mailto:edward.sjoblom@gmail.com'
        }
    ],
    hero: {
        title: "Hi! I'm Edward.",
        text: "I am a full-stack software engineer building cool things. <br> <br> My favourite tech and tools: <br> <br> - <b>Next.js</b> <br> - <b>Astro</b> <br> - <b>Tailwind</b> <br> - <b>React Native</b> <br> - <b>Figma</b> <br> - <b>Unity</b> ",
        /*image: {
            src: '/me.png',
            alt: 'Me.'
        },*/
        actions: [
            {
                text: 'Get in touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
