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
            href: '/astro-portfolio'
        },
        {
            text: 'Projects',
            href: '/astro-portfolio/projects'
        },
        {
            text: 'Contact',
            href: '/astro-portfolio/contact'
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
        text: "I am a final year MSc. Information and Communcation Engineering Technologies student. Currently, I am in the process of finishing my software specialization. <br> <br> I enjoy building things with software, focusing on achieving great UX. I believe that software products should be intuitive, effective and fun to use. <br> <br> My favourite tech and tools: <br> <br> - <b>Python</b> <br> - <b>SQL</b> <br> - <b>PHP</b> <br> - <b>Streamlit</b> <br> - <b>Astro</b> <br> - <b>Docker</b> <br> - <b>Git</b> <br> - <b>Figma</b> <br> - <b>Unity</b> ",
        /*image: {
            src: '/me.png',
            alt: 'Me.'
        },*/
        actions: [
            {
                text: 'Get in touch',
                href: '/astro-portfolio/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
