import { ExperienceData } from './types'
import nerveXLogo from '../media/nervex_logo.jpeg'
import afroBitesLogo from '../media/afrobites_logo_512.png'
import appleLogo from '../media/apple_logo.jpeg'
import assemblyLogo from '../media/assembly_auto .png'
import wellingtonLogo from '../media/wellington_management_logo.jpeg'
import bchLogo from '../media/BHCHlogo.png'

export const experienceData: ExperienceData[] = [
    {
        title: 'Software Engineer',
        company: 'Wellington Managment',
        location: 'Boston, MA',
        dates: 'July 2022 - June 2025',
        description: 
        'Responsible for developing and maintaining a set of self-service technology tools at Wellington. These tools were designed to help with data work, create visualizations, share insights, and support Python-related work within the firm.',
        logoSrc: wellingtonLogo
    },
    {
        title: 'Software Engineer',
        company: 'Assembly Sqaure Auto Sales',
        location: 'Somerville, MA',
        dates: 'April 2025 - Present',
        description:
        'Built a web app that lets them log vehicle details (VIN, make, model, mileage, purchase price, sale price). Track car status (e.g. "in transit", "on lot", "sold"). Set alerts for aging inventory. Take VIN input and fetch specs from a public API (NHTSA & Edmunds).  Use this data to estimate price range based on current listings from scraping or APIs (e.g., Kelley Blue Book).',
        logoSrc: assemblyLogo
    },
    {
        title: 'Senior Software Developer',
        company: 'AfroBites',
        location: 'Boston, MA',
        dates: 'September 2024 - Present',
        description:
            'Designed and developed a modern, responsive African restaurant website using React, Typescript, and Tailwind CSS. Built in reusable components for menu items, navigation, and contact information using React’s best practices. Utilized Firebase as the build tool for optimized development and production builds.',
        logoSrc: afroBitesLogo
    },
    {
        title: 'Software Developer (Contract)',
        company: 'Boston Health Care for the Homeless',
        location: 'Toronto, ON',
        dates: 'May 2025 - Present',
        description:
            'Built a responsive delivery tracking app in React that logs pharmacy deliveries to Firebase Firestore, sends real-time email alerts via EmailJS, and integrates with Google Sheets. Features include form validation, mobile-first UI, and cloud-based data sync for operational visibility.',
        logoSrc: bchLogo,
    },
    {
        title: 'Intern (Software Engineer)',
        company: 'Wellington Managment',
        location: 'Boston, MA',
        dates: 'June 2021 - August 2021',
        description:
            'Built and deployed large-scale web scrapers to extract data from thousands of medical journals daily, automating uploads to AWS. Collaborated with senior stakeholders to define business goals, architect solutions, and lead cross-functional development efforts. Using Pandas, integrated and migrated data from two legacy systems, modernizing internal infrastructure for improved accessibility and performance.',
        logoSrc: wellingtonLogo
    },
    {
        title: 'Product Zone Specialist',
        company: 'Apple',
        location: 'Boston, MA',
        dates: 'August 2019 - March 2020',
        description:
            'Maintained the latest product knowledge to personalize solutions for consumer technology needs. Efficiently provided support for iOS and MacOS technical inquiries and device setup. Processed sales in a diverse and high-volume environment featuring demos, IT setup, data migration, and app installation.',
        logoSrc:
            appleLogo,
    },
]
