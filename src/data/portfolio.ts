import {
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Mail,
  ServerCog,
  ShieldCheck,
  Workflow,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Yohan Ishara',
  role: 'Software Engineer / Backend Engineer / Java Spring Boot Developer',
  location: 'Sri Lanka',
  email: 'yohanishara01@gmail.com',
  github: 'https://github.com/Yohan-Ishara',
  linkedIn: 'https://www.linkedin.com/in/yohan-ishara',
  upwork: 'https://www.upwork.com/freelancers/~01d2361081ffdd4d1d?mp_source=share',
  cv: '/yohan-ishara-cv.pdf',
  image: '/images/profile.jpg',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Upwork Reviews', href: '#upwork' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  '3+ Years Software Engineering Experience',
  '4 Completed Upwork Jobs',
  '5.0 Upwork Rating',
  '$100+ Earned on Upwork',
  'Enterprise Backend Experience',
];

export const skills = [
  {
    category: 'Backend',
    icon: ServerCog,
    items: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'REST APIs', 'Microservices', 'JWT', 'API Integration'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Query Optimization'],
  },
  {
    category: 'DevOps / Tools',
    icon: GitBranch,
    items: ['Docker', 'Jenkins', 'Git', 'Bitbucket', 'Jira', 'SonarQube', 'Grafana', 'Kibana', 'Postman', 'Swagger UI'],
  },
  {
    category: 'Workflow / Cloud / Other',
    icon: Workflow,
    items: ['Camunda', 'Spring Cloud Gateway', 'Amazon Cognito', 'S3', 'Platformer', 'Agile Development'],
  },
];

export const experience = [
  {
    company: 'HealthRecon Connect LLC',
    role: 'Senior Software Engineer',
    period: 'Sep 2023 - Present',
    description:
      'Working on healthcare software systems, patient management, insurance claim-related backend services, microservices, and enterprise backend development.',
  },
  {
    company: 'Dialog Axiata PLC',
    role: 'Software Engineer',
    period: 'Jul 2021 - 2023',
    description:
      'Worked on enterprise workflow systems, approval flows, Camunda-based services, REST APIs, backend services, and business process automation.',
  },
  {
    company: 'ObjectOne Pvt Ltd',
    role: 'Associate Software Engineer',
    period: 'Mar 2021 - Jul 2021',
    description:
      'Worked on software development projects and gained professional backend/web application development experience.',
  },
  {
    company: 'Institute of Software Engineering',
    role: 'Software Developer Trainee',
    period: 'Jul 2020 - Feb 2021',
    description:
      'Started professional software development journey with hands-on training and real-world development exposure.',
  },
];

export const projects = [
  {
    title: 'Patient Management System',
    role: 'Backend Developer',
    impact: 'Improved healthcare workflow visibility across patient, referral, and claim-related operations.',
    description:
      'A healthcare patient management system used to manage patient-related workflows, physician referrals, and insurance claim-related processes.',
    work: ['Designed and implemented backend services', 'Developed REST APIs', 'Worked with PostgreSQL databases', 'Managed tasks in Agile environment', 'Delivered milestones with team coordination'],
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Cloud Gateway', 'PostgreSQL', 'Docker', 'Swagger UI', 'REST APIs'],
  },
  {
    title: 'Price Revision Service',
    role: 'Backend Developer',
    impact: 'Supported structured enterprise approval through a management hierarchy.',
    description:
      'An enterprise approval workflow system for Dialog Axiata that helps manage customer price revision approval processes through management hierarchy.',
    work: ['Implemented backend services', 'Designed Camunda workflow service tasks', 'Integrated approval flow logic', 'Worked with PostgreSQL and API services'],
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'Spring Cloud Gateway', 'Amazon Cognito', 'Docker', 'S3', 'Swagger UI', 'REST APIs', 'Camunda'],
  },
  {
    title: 'Urgent Bandwidth Upgrade',
    role: 'Backend Developer',
    impact: 'Helped business customers process temporary bandwidth package upgrades faster.',
    description:
      'A workflow-based system used to process temporary bandwidth package upgrades for business customers.',
    work: ['Built backend API services', 'Implemented Camunda workflow service tasks', 'Worked with business rules and approval processes'],
    technologies: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Cognito', 'Docker', 'S3', 'SaaS Factory', 'Swagger UI', 'REST APIs'],
  },
  {
    title: 'OneFlow Product Development',
    role: 'Software Engineer',
    impact: 'Enabled task creation, assignment, workflow tracking, dashboards, and reporting for teams.',
    description:
      'A workflow management platform where users and integrated systems can create tasks through APIs or interfaces, assign tasks to teams, and track progress using dashboards and reports.',
    work: ['Designed backend rules and services', 'Implemented APIs and workflow logic', 'Worked with Camunda and Oracle/PostgreSQL databases', 'Supported dashboards and reporting flows'],
    technologies: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Camunda', 'Docker', 'Platformer', 'Oracle DB', 'PostgreSQL', 'Swagger UI', 'Lombok'],
  },
  {
    title: 'MOU Service',
    role: 'Backend Developer',
    impact: 'Streamlined offer approvals for different Dialog business sectors.',
    description:
      'An approval workflow system used to provide offers to different sectors within Dialog through a structured approval process.',
    work: ['Implemented workflow-backed backend services', 'Integrated API and approval flow logic', 'Supported cloud-ready service delivery'],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'Spring Cloud Gateway', 'Cognito', 'Docker', 'S3', 'SaaS Factory', 'Swagger UI', 'REST APIs'],
  },
  {
    title: 'Standard Product Modification',
    role: 'Software Engineer',
    impact: 'Supported corporate product modification requests through controlled approval workflows.',
    description:
      'A Dialog workflow project used for corporate installment and product modification requests such as package updates, rental updates, license changes, location changes, subscriber changes, and short code activation.',
    work: ['Designed high-level architecture', 'Implemented REST APIs', 'Developed SQL queries', 'Deployed to test environments'],
    technologies: ['Java', 'Spring Boot', 'Jira', 'Bitbucket', 'Oracle', 'PostgreSQL', 'Camunda', 'SonarQube', 'Lombok'],
  },
  {
    title: 'Standard Product Activation',
    role: 'Software Engineer',
    impact: 'Supported corporate product activation workflows in enterprise systems.',
    description: 'A workflow service for corporate product activation processes in Dialog enterprise systems.',
    work: ['Implemented backend services', 'Worked across workflow and database layers', 'Supported quality checks and team delivery'],
    technologies: ['Java', 'Spring Boot', 'Jira', 'Bitbucket', 'Oracle', 'PostgreSQL', 'Camunda', 'SonarQube', 'Lombok'],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Java Backend Development',
    icon: Code2,
    description: 'Build reliable Java backend services with clean architecture, maintainable business logic, and production-focused code quality.',
  },
  {
    title: 'Spring Boot REST API Development',
    icon: ServerCog,
    description: 'Design and implement secure, documented REST APIs using Spring Boot, validation, persistence, and clear service boundaries.',
  },
  {
    title: 'Microservices Development',
    icon: Layers3,
    description: 'Develop modular backend services ready for workflows, integrations, containerization, and future scale.',
  },
  {
    title: 'Database Design with PostgreSQL / MySQL / Oracle',
    icon: Database,
    description: 'Create practical schemas, improve queries, and tune relational data access across PostgreSQL, MySQL, and Oracle systems.',
  },
  {
    title: 'Upwork Freelance Java Projects',
    icon: Workflow,
    description: 'Deliver focused freelance Java tasks and backend improvements with clear communication and quality-focused execution.',
  },
  {
    title: 'SaaS MVP Backend Development',
    icon: Cloud,
    description: 'Build the backend foundation for SaaS MVPs, including APIs, authentication flows, data models, and deployment readiness.',
  },
  {
    title: 'API Integration',
    icon: Zap,
    description: 'Connect third-party systems, internal services, authentication providers, storage, and enterprise APIs.',
  },
  {
    title: 'Bug Fixing & Performance Optimization',
    icon: ShieldCheck,
    description: 'Investigate backend bugs, remove bottlenecks, improve reliability, and stabilize production-facing services.',
  },
];

export const upworkReviews = [
  {
    projectTitle: 'A simple project in Java',
    client: 'Adam Elizer',
    location: 'Australia',
    rating: '5.0',
    date: 'May 14, 2022 - May 16, 2022',
    text: 'amazing guy and greatly skilled. can get work done easily',
    badge: 'Committed to Quality',
    amount: '$50.00',
    projectType: 'Fixed price',
    category: 'Java Development',
  },
  {
    projectTitle: 'A simple project in Java Part 2',
    client: 'Adam Elizer',
    location: 'Australia',
    rating: '5.0',
    date: 'Apr 30, 2022 - May 1, 2022',
    text: 'Yohan is skillful and talented to get any java project done.',
    badge: 'Committed to Quality',
    amount: '$35.00',
    projectType: 'Fixed price',
    category: 'Java Development',
  },
  {
    projectTitle: 'Java developer needed',
    client: 'Asim Ali',
    rating: '5.0',
    date: 'Apr 4, 2022 - Apr 6, 2022',
    text: 'Yohan has done an excellent job.',
    badge: 'Committed to Quality',
    amount: '$5.00',
    projectType: 'Fixed price',
    category: 'Java Development',
  },
];

export const upworkHighlights = [
  { label: 'Client Rating', value: '5.0', icon: BadgeCheck },
  { label: 'Completed Jobs', value: '4', icon: BriefcaseBusiness },
  { label: 'Earned', value: '$100+', icon: Mail },
];
