import {
    FirebaseBadge,
    JavaBadge,
    HtmlBadge,
    JavaScriptBadge,
    CSSBadge,
    MongoBadge,
    MySQLBadge,
    NodeBadge,
    PHPBadge,
    PythonBadge,
    ReactBadge,
    AssemblyBadge,
    DjangoBadge,
    TypescriptBadge,
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
    {
        name: 'AfroBites',
        id: 'afrobites',
        type: 'Web app',
        tagline: 'Website for African Restaurant',
        tags: [<ReactBadge />, <TypescriptBadge />],
        imageSrc: '/afrobites.png',
        description:
            'Modern, responsive African restaurant website using React, Typescript, and Tailwind CSS.',
        links: [
            {
                link: 'https://afrobitesma.com',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://afrobitesma.com',
    },
    {
        name: 'B-Scanner',
        id: 'b-scanner',
        type: 'Web app',
        tagline: 'App helping identify racial bias - Judges Choice Winner',
        tags: [
            <HtmlBadge />,
            <JavaScriptBadge />,
            <CSSBadge />,
            <PythonBadge />,
        ],
        imageSrc: '/b-scanner.png',
        description:
            'B Scanner (the "B" stands for Bias) was developed during the fall 2020 semester in the BU Spark! Innovation Fellowship Program and won the Judges\' Choice award at Fall Demo Day. Photo courtesy of the B Scanner team',
        links: [
            {
                link: 'https://www.bu.edu/articles/2021/bu-spark-demo-day-students-app-helping-identify-racial-bias-named-judges-choice-winner/',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://www.bu.edu/articles/2021/bu-spark-demo-day-students-app-helping-identify-racial-bias-named-judges-choice-winner/',
    },
    {
        name: 'Pharmacy Delivery Tracking App',
        id: 'pharmacy-delivery-app',
        type: 'Web app',
        tagline: 'Real-time pharmacy delivery tracking with cloud integration',
        tags: [<ReactBadge />, <FirebaseBadge />],
        imageSrc: '/pharmacy-delivery-app.png',
        description:
            'Responsive delivery tracking app in React that logs pharmacy deliveries to Firebase Firestore, sends real-time email alerts via EmailJS, and integrates with Google Sheets. Features include form validation, mobile-first UI, and cloud-based data sync for operational visibility.',
        links: [
            {
                link: 'https://pharmacy-deliveryapp.web.app/',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://pharmacy-deliveryapp.web.app/',
    },
]
