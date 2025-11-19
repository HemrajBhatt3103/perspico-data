'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle, 
  Cpu, 
  Database, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Globe, 
  Menu, 
  X, 
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cloud,
  Settings,
  Server,
  Gauge,
  FileText,
  CreditCard,
  Package,
  Target,
  Shield
} from 'lucide-react';

type Project = {
  id: string;
  title: string;
  company?: string;
  duration?: string;
  problem?: string;
  solution?: string[];
  results?: string[];
  tools?: string;
  skills?: string;
  highlight: string;
  icon: React.ElementType;
};

// Complete projects array with all your projects
const projects: Project[] = [
  {
    id: 'user-behavior-dashboards',
    title: 'User Behavior Dashboards & Conversion Campaigns (AI)',
    company: 'Grupo Salinas',
    duration: '6 Months',
    problem:
      'The company lacked a way to verify user behavior and build effective conversion campaigns due to the absence of an event funnel visualization.',
    solution: [
      'Built automated dashboards processing 15+ million user events per day across mobile and web.',
      'Reduced reporting generation time from 48 hours to under 30 minutes.',
      'Unified 12+ critical event types like logins, searches, clicks, and payments.',
      'Enabled real-time funnel visualization with <5s latency using AWS EKS + SQS.',
      'Integrated data from 3 internal systems (Marketing, Product, & Risk).',
    ],
    results: ['Enables behavioral analysis to create and adjust conversion campaigns, improving user acquisition.'],
    tools: 'AWS (EKS, SQS, S3, EC2, Lambda), RabbitMQ, React, Redux, Python, Java',
    skills: 'Data Analysis, Visualization, Backend Development, Cloud Architecture',
    highlight: 'Real-time funnel visualization (<5s) for 15M events/day',
    icon: BarChart3,
  },
  {
    id: 'predictive-bots-ai-agents',
    title: 'Predictive Bots & AI Agents',
    company: 'Grupo Salinas',
    duration: '6 Months',
    problem: 'The company needed to generate new clients/products and optimize the lifecycle of existing financial products (credit, cards).',
    solution: [
      'Developed AI Bots and Predictive Agents processing 5-8 million customer interactions monthly.',
      'Trained predictive models using 20+ behavioral variables (payments, device, credit history).',
      'Generated new product recommendations with up to 72% model accuracy during early iterations.',
      'Reduced manual segmentation work by 90% through automated pipelines.',
    ],
    results: ['Provides predictive insights for strategic decision-making and lifecycle optimization of financial products.'],
    tools: 'AWS full stack, Python, Java, Jenkins, Jira',
    skills: 'Predictive Modeling, AI Development, MLOps, Backend Development',
    highlight: '72% model accuracy for product recommendations',
    icon: Brain,
  },
  {
    id: 'national-customs-platform',
    title: 'National Customs Agency Digital Platform',
    company: 'SNG Consultores',
    duration: '8 Months',
    problem: 'The National Customs Agency required a modern, centralized digital platform for all operational processes.',
    solution: [
      'Designed and built full backend ecosystem with 20+ microservices handling customs operations.',
      'Built database architecture managing 10M+ records across PostgreSQL + SQL Server.',
      'Implemented 8+ Azure pipelines for CI/CD, automated deployments, and monitoring.',
      'Created log recovery and anomaly-tracking system processing 250K+ logs/day.',
      'Implemented daily ETL pipeline ingesting 2-3 GB of data from multiple databases.',
    ],
    results: [
      'Delivered scalable, production-ready backend platform.',
      'Implemented security-grade logging and auditing system.',
      'Automated daily ETL processes consolidating multi-source data.',
    ],
    tools: 'Python, Django, PostgreSQL, SQL Server, Docker, K8S, Azure DevOps, AKS, ACI, API Management',
    skills: 'Backend Development, Database Architecture, Data Engineering, Azure Cloud, CI/CD',
    highlight: '10M+ records managed across distributed database architecture',
    icon: Cloud,
  },
  {
    id: 'financial-services-automation',
    title: 'Financial Services Automation & SAP/ERP Integration',
    company: 'Nubi Bank',
    duration: '4 Months',
    problem: 'Key sales calculations and accounting processes were manual and slow, and legacy web services needed migration.',
    solution: [
      'Automated tools used daily by 120+ sales agents.',
      'Integrated SAP/ERP systems synchronizing 5-7 financial data streams.',
      'Migrated 12 legacy services to modern languages, improving performance by 30-40%.',
      'Reduced manual workload for sales/finance teams by 50%.',
    ],
    results: ['Successful automation, system integration, and improved performance of migrated services.'],
    tools: 'SAP, ERPs, multiple programming languages',
    skills: 'Project Leadership, Automation, System Integration, Software Migration',
    highlight: '50% reduction in manual workload for sales/finance teams',
    icon: Settings,
  },
  {
    id: 'rappi-microservices',
    title: 'Scalable Microservices Architecture',
    company: 'Rappi',
    duration: '7 Years',
    problem: 'The Turbo Team needed to rapidly build scalable microservices to support new products.',
    solution: [
      'Built 25+ production microservices from scratch.',
      'Designed relational and NoSQL databases managing millions of daily requests.',
      'Implemented 100% test coverage for core business logic.',
      'Reduced deployment time from 2 hours to 10 minutes using CI/CD pipelines.',
      'Supported workloads handling 10K-30K requests per minute on AWS.',
    ],
    results: ['Successfully delivered multiple scalable microservices deployed in AWS.'],
    tools: 'NodeJS, Python, Go, AWS (S3, EC2, Lambda, DynamoDB, RDS), Jenkins, GitHub Actions, Redis, Docker, K8S, Kafka',
    skills: 'Microservices Architecture, Backend Engineering, AWS Cloud, CI/CD',
    highlight: '25+ microservices handling 10K-30K requests/minute',
    icon: Server,
  },
  {
    id: 'query-optimization-snowflake',
    title: 'Query Optimization & ETL with Snowflake',
    company: 'Rappi',
    duration: '7 Years',
    problem: 'Reports were slow and data processing was inefficient, affecting business decisions.',
    solution: [
      'Optimized SQL queries resulting in 80% faster report execution.',
      'Rebuilt ETL pipelines reducing processing time by 60% (from hours to minutes).',
      'Participated in Snowflake migration for 20+ datasets with guaranteed integrity.',
      'Connected Snowflake to Power BI, enabling dashboards used by 200+ internal users.',
    ],
    results: ['Significant performance improvements and efficient analytics workflows.'],
    tools: 'Snowflake, SQL, Power BI, Python, Airflow',
    skills: 'Data Engineering, ETL, Query Optimization, BI',
    highlight: '80% faster report execution through query optimization',
    icon: Database,
  },
  {
    id: 'web-performance-optimization',
    title: 'Web Performance Optimization (Full Stack)',
    company: 'Rappi',
    duration: '1.5 Years',
    problem: 'Web pages suffered from low performance and scalability due to poor data loading strategies.',
    solution: [
      'Implemented caching with Redis, reducing API latency by 40%.',
      'Improved database read flow, reducing query load by 30-50%.',
      'Built frontend features that improved page load speed by 22%.',
      'Integrated Fivetran + Snowflake pipelines processing 500k+ rows/day.',
    ],
    results: ['Improved overall performance and scalability of the platform.'],
    tools: 'React, Redux, Angular, Redis, Snowflake, Fivetran',
    skills: 'Full Stack Development, Performance Optimization, Caching, Frontend Engineering',
    highlight: '40% reduction in API latency through Redis caching',
    icon: Gauge,
  },
  {
    id: 'predictive-stock-model',
    title: 'Predictive Stock & Recommendation Model',
    company: 'Rappi',
    duration: '7 Years',
    problem: 'Key brands needed to improve GMV but lacked a predictive stock and recommendation system.',
    solution: [
      'Built ML models trained on millions of product-level records.',
      'Incorporated 40+ variables (historical demand, campaigns, vendor supply).',
      'Achieved 18-25% GMV uplift during pilot tests.',
      'Reduced stockouts for priority stores by ~30%.',
    ],
    results: ['Functional predictive model aligned with campaigns and business goals.'],
    tools: 'Python, Spark, Scikit-learn, TensorFlow',
    skills: 'Machine Learning, Predictive Modeling, Cross-functional Collaboration',
    highlight: '18-25% GMV uplift through predictive modeling',
    icon: TrendingUp,
  },
  {
    id: 'invoice-upload-automation',
    title: 'Invoice Upload Automation (Retool + S3)',
    company: 'Rappi',
    duration: '7 Years',
    problem: 'Manual invoice uploads caused an unsustainable backup database and unscalable workflows.',
    solution: [
      'Migrated all backup data to S3, reducing DB load by 90%.',
      'Designed end-to-end workflow handling 5,000+ invoices/day.',
      'Built Retool-based interface for 6 internal teams.',
      'Implemented Airflow orchestration with 100% automated retries and recovery.',
    ],
    results: ['Replaced isolated manual process with scalable, integrated, automated system.'],
    tools: 'Retool, AWS S3, Airflow, ETL Microservices',
    skills: 'Solution Architecture, Automation, Systems Integration',
    highlight: '5,000+ invoices/day processed through automated workflow',
    icon: FileText,
  },
  {
    id: 'latam-catalog-standardization',
    title: 'LATAM Product Catalog Standardization & Dark Store Launches',
    company: 'Rappi',
    duration: '5 Years',
    problem: 'Retailers across LATAM experienced inconsistent product catalog quality, poor integration, and UX inconsistencies affecting customer experience.',
    solution: [
      'Standardized catalog processes across 7 countries, reducing catalog errors by 35-45%.',
      'Built workflows eliminating 200,000+ SKU inconsistencies annually.',
      'Led full launch of Carrefour Darkstore in Brazil and Colombia.',
      'Created quality guidelines for UX/IA reducing customer search issues by ~20%.',
      'Implemented data validation scripts automating 70% of manual catalog checks.',
      'Coordinated catalog readiness for Supermarket launches with 100,000+ SKUs validated.',
    ],
    results: [
      'Significantly improved catalog accuracy and product discoverability across LATAM.',
      'Successfully launched Carrefour Darkstore format in multiple countries.',
      'Reduced catalog-related operational issues by 40%.',
    ],
    tools: 'Excel, SQL, Python, Power BI, Tableau, Jira, KissFlow, Zoho, Amplitude, Miro, Retool',
    skills: 'Data Analysis, Automation, Strategic Planning, UX/UI, Information Architecture, Team Leadership',
    highlight: '35-45% reduction in catalog errors across 7 countries',
    icon: Globe,
  },
  {
    id: 'rappi-cashless-operations',
    title: 'Cashless Operations Implementation',
    company: 'Rappi',
    duration: '1 Year',
    problem: 'Retailers needed a reliable cashless system to reduce transaction delays and improve operational efficiency across Brazil.',
    solution: [
      'Implemented cashless operation system and conducted training for retailers.',
      'Coordinated deployment across 500+ POS locations in multiple cities.',
      'Managed team of 15 individuals to meet service metrics.',
      'Enabled deferred payment processing without operational disruptions.',
    ],
    results: [
      'Reduced transaction time and improved customer satisfaction.',
      'Enabled smooth live operations across all deployed locations.',
    ],
    tools: 'SQL, Excel Automation, Jira, Power BI',
    skills: 'Data Analysis, Automation, Strategic Planning, Team Management',
    highlight: 'Deployed across 500+ POS locations in multiple cities',
    icon: CreditCard,
  },
  {
    id: 'pits-depot-inventory',
    title: 'Inventory Management Automation',
    company: 'Pits Depot',
    duration: '1 Year',
    problem: 'Manual inventory tracking and lack of automated reporting caused inefficiencies in managing spare parts stock.',
    solution: [
      'Built automated reporting tools using PostgreSQL.',
      'Developed inventory control systems for car parts using Excel VBA and SQL.',
      'Collaborated closely with founder to align operations with strategic goals.',
    ],
    results: ['Reduced reporting time by 50%, improved stock accuracy, and streamlined spare parts management.'],
    tools: 'PostgreSQL, Excel VBA, SQL, MySQL',
    skills: 'Data Automation, Inventory Management, Strategic Alignment',
    highlight: '50% reduction in reporting time through automation',
    icon: Package,
  },
  {
    id: 'panda-salud-strategy',
    title: 'Business Strategy & Data Consulting',
    company: 'Panda Salud',
    duration: '1 Year',
    problem: 'Needed strategic pivots and data-driven insights to support rapid growth and improve user experience.',
    solution: [
      'Implemented strategic business pivots to automate processes.',
      'Developed UX/UI improvements and automated processes using SQL, Python, and MySQL.',
      'Built dashboards and analytics for operational decision-making.',
    ],
    results: ['Enhanced platform usability, improved data accuracy, and supported business growth through actionable insights.'],
    tools: 'SQL, Python, MySQL, UX/UI Design',
    skills: 'Data Analysis, Automation, Strategic Planning, UX/UI',
    highlight: 'Strategic pivots driving business growth and automation',
    icon: Target,
  },
  {
    id: 'plerk-payments',
    title: 'Operations & Payments Integration',
    company: 'Plerk',
    duration: '2 Years',
    problem: 'Early-stage operations lacked automation and secure payment integration for multiple providers.',
    solution: [
      'Established foundational processes for platform launch.',
      'Automated workflows and integrated payment systems with Visa, Mastercard, and other providers.',
      'Implemented analytics for service performance using AWS and SQL.',
    ],
    results: ['Enabled successful platform launch, streamlined payment processing, and improved operational efficiency.'],
    tools: 'AWS, SQL, Payment Gateway APIs',
    skills: 'Process Automation, Payment Integration, Cloud Services, Data Analytics',
    highlight: 'Successful payment integration with major providers',
    icon: Shield,
  },
  {
    id: 'ldc-data-automation',
    title: 'Project LDC: Data Automation & Make One App',
    company: 'Louis Dreyfus Company',
    duration: '12 Months',
    problem:
      'Relied heavily on manual Excel processes and outdated VBA macros causing errors, no centralized validation workflows, and high time consumption for recurring reports.',
    solution: [
      'Normalized and standardized 100,000+ rows of operational data for accuracy.',
      'Automated recurring reporting using Excel refactors, SQL queries, and Power Automate — reducing manual effort by 60–70%.',
      'Built Power BI dashboards consolidating procurement, sampling, and logistics KPIs.',
      'Developed Power Apps to replace manual Excel forms — reducing errors by 40%.',
      'Centralized supplier/contract data for audit readiness across regions.',
      'Created automated daily-refresh data pipelines.',
      'Reduced monthly reporting time from 2 days to under 1 hour.',
    ],
    results: ['Improved data quality and reporting accuracy across global operations.', 'Enabled teams to focus on analysis rather than manual manipulation.'],
    tools: 'Excel, VBA, SQL, Power BI, Power Automate, Power Apps, Relational DBs',
    skills: 'Process Automation, Data Standardization, Dashboard Development',
    highlight: 'Reduced monthly reporting time from 2 days to <1 hour',
    icon: Zap,
  },
];

const headerServices = [
  { title: "Business Intelligence & Dashboards", href: "/services/business-intelligence" },
  { title: "Supply Chain & Operations Analytics", href: "/services/supply-chain" },
  { title: "Sustainability & Carbon Footprint Analytics", href: "/services/sustainability" },
  { title: "Product & Technology Analytics", href: "/services/product-analytics" },
  { title: "Data Automation", href: "/services/data-automation" },
  { title: "Integration", href: "/services/integration" },
];

const caseStudyFaqs = [
  {
    question: "Are these case studies from real client projects?",
    answer: "Yes, all our case studies are based on real-world projects with enterprise clients. We've anonymized company names and specific data points to respect confidentiality agreements, but the challenges, solutions, and results are entirely authentic."
  },
  {
    question: "How do you measure the results shown in the case studies?",
    answer: "We work with our clients to establish key performance indicators (KPIs) at the start of each project. The results, such as 'Reduced reporting time by 95%' or '40% reduction in errors,' are measured against these pre-defined metrics and validated by the client."
  },
  {
    question: "Can I see a more detailed breakdown of a specific project?",
    answer: "Absolutely. While these summaries provide a high-level overview, we can walk you through a more detailed, anonymized demonstration during a consultation. This allows us to showcase the technical architecture and methodologies in greater depth."
  },
  {
    question: "My business is different. How will these solutions apply to me?",
    answer: "While the specific context of each case study is unique, the underlying principles of data automation, analytics, and strategic implementation are highly transferable. We use these examples to illustrate our capabilities, which we then tailor to solve your specific business challenges."
  }
];

export default function CaseStudiesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Inlined Header */}
      <motion.header 
        style={{ backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                    src="/perspico_data_logo.png"
                    alt="Perspico Data Logo"
                    className="w-full h-full object-contain"
                  />
              </div>
              <span className="font-heading text-xl">Perspico Data</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    <ul className="py-2">
                      {headerServices.map((service) => (
                        <li key={service.href}>
                          <Link href={service.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">{service.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <Link href="/services/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
              <a href="/#infrastructure" className="text-gray-700 hover:text-blue-600 transition-colors">Infrastructure</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700"><a href="/#contact">Book Consultation</a></Button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              <a href="/#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <Link href="/services/case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Case Studies</Link>
              <a href="/#infrastructure" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Infrastructure</a>
              <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="pt-24 pb-20">
        <section id="case-studies-hero" className="relative text-center mb-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div 
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full"
                animate={{
                  x: ["-50%", "-60%", "-50%", "-40%", "-50%"],
                  y: ["-50%", "-45%", "-50%", "-55%", "-50%"],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200 shadow-sm">
                {projects.length} Proven Results
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">
                Our Case Studies
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped organizations transform data into strategic assets through automation, analytics, and intelligent design.
              </p>
            </motion.div>
        </section>

        {/* Two-column grid layout */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((p) => (
              <motion.div key={p.id} variants={cardVariants}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 h-full">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full transition-transform duration-500 group-hover:scale-[6]"></div>
                  <div className="relative">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                            <p.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="font-heading text-lg leading-tight">{p.title}</CardTitle>
                            <CardDescription className="text-sm">{p.company} • {p.duration}</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Highlight Badge */}
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border border-green-200 text-xs">
                        {p.highlight}
                      </Badge>

                      {/* Problem & Solution in compact layout */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-1">The Challenge</h4>
                          <p className="text-gray-600 text-xs leading-relaxed">{p.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-1">Key Solutions</h4>
                          <ul className="space-y-1">
                            {p.solution?.map((s, i) => (
                              <li key={i} className="flex items-start text-xs">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 leading-relaxed">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tools - Show all technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {p.tools?.split(', ').map(tool => (
                            <Badge key={tool} variant="outline" className="text-xs bg-white border-gray-200 text-gray-600">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
              About Our Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your questions about our projects and results, answered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {caseStudyFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border-0 border-b shadow-sm rounded-lg mb-4 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      
      {/* Inlined Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img
                    src="/perspico_data_logo.png"
                    alt="Perspico Data Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-heading text-xl">Perspico Data</span>
              </div>
              <p className="text-gray-400">
                Transforming data into strategic advantage for enterprise organizations.
              </p>
            </div>

            <div>
              <h4 className="font-heading mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {headerServices.map(service => (
                  <li key={service.href}><a href={service.href} className="hover:text-white transition-colors">{service.title.split('&')[0]}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><Link href="/services/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><a href="/#infrastructure" className="hover:text-white transition-colors">Infrastructure</a></li>
                <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading mb-4">UK Office</h4>
              <ul className="space-y-2 text-gray-400">
                <li><MapPin className="inline w-4 h-4 mr-2" />London, UK</li>
                <li><a href="mailto:info@perspicodata.com" className="hover:text-white transition-colors"><Mail className="inline w-4 h-4 mr-2" />info@perspicodata.com</a></li>
                <li><a href="tel:+447825247759" className="hover:text-white transition-colors"><Phone className="inline w-4 h-4 mr-2" />+44 7825247759</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Perspico Data. All rights reserved.</p>
          </div>  
        </div>
      </footer>
    </div>
  );
}



// 'use client';

// import React, { useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { 
//   CheckCircle, 
//   Cpu, 
//   Database, 
//   BarChart3, 
//   TrendingUp, 
//   Zap, 
//   Globe, 
//   Menu, 
//   X, 
//   ChevronDown,
//   Mail,
//   Phone,
//   MapPin,
//   Brain,
//   Cloud,
//   Settings,
//   Server,
//   Gauge,
//   FileText,
//   CreditCard,
//   Package,
//   Target,
//   Shield
// } from 'lucide-react';

// type Project = {
//   id: string;
//   title: string;
//   company?: string;
//   duration?: string;
//   problem?: string;
//   solution?: string[];
//   results?: string[];
//   tools?: string;
//   skills?: string;
//   highlight: string;
//   icon: React.ElementType;
// };

// // Complete projects array with all your projects
// const projects: Project[] = [
//   {
//     id: 'user-behavior-dashboards',
//     title: 'User Behavior Dashboards & Conversion Campaigns (AI)',
//     company: 'Grupo Salinas',
//     duration: '6 Months',
//     problem:
//       'The company lacked a way to verify user behavior and build effective conversion campaigns due to the absence of an event funnel visualization.',
//     solution: [
//       'Built automated dashboards processing 15+ million user events per day across mobile and web.',
//       'Reduced reporting generation time from 48 hours to under 30 minutes.',
//       'Unified 12+ critical event types like logins, searches, clicks, and payments.',
//       'Enabled real-time funnel visualization with <5s latency using AWS EKS + SQS.',
//       'Integrated data from 3 internal systems (Marketing, Product, & Risk).',
//     ],
//     results: ['Enables behavioral analysis to create and adjust conversion campaigns, improving user acquisition.'],
//     tools: 'AWS (EKS, SQS, S3, EC2, Lambda), RabbitMQ, React, Redux, Python, Java',
//     skills: 'Data Analysis, Visualization, Backend Development, Cloud Architecture',
//     highlight: 'Real-time funnel visualization (<5s) for 15M events/day',
//     icon: BarChart3,
//   },
//   {
//     id: 'predictive-bots-ai-agents',
//     title: 'Predictive Bots & AI Agents',
//     company: 'Grupo Salinas',
//     duration: '6 Months',
//     problem: 'The company needed to generate new clients/products and optimize the lifecycle of existing financial products (credit, cards).',
//     solution: [
//       'Developed AI Bots and Predictive Agents processing 5-8 million customer interactions monthly.',
//       'Trained predictive models using 20+ behavioral variables (payments, device, credit history).',
//       'Generated new product recommendations with up to 72% model accuracy during early iterations.',
//       'Reduced manual segmentation work by 90% through automated pipelines.',
//     ],
//     results: ['Provides predictive insights for strategic decision-making and lifecycle optimization of financial products.'],
//     tools: 'AWS full stack, Python, Java, Jenkins, Jira',
//     skills: 'Predictive Modeling, AI Development, MLOps, Backend Development',
//     highlight: '72% model accuracy for product recommendations',
//     icon: Brain,
//   },
//   {
//     id: 'national-customs-platform',
//     title: 'National Customs Agency Digital Platform',
//     company: 'SNG Consultores',
//     duration: '8 Months',
//     problem: 'The National Customs Agency required a modern, centralized digital platform for all operational processes.',
//     solution: [
//       'Designed and built full backend ecosystem with 20+ microservices handling customs operations.',
//       'Built database architecture managing 10M+ records across PostgreSQL + SQL Server.',
//       'Implemented 8+ Azure pipelines for CI/CD, automated deployments, and monitoring.',
//       'Created log recovery and anomaly-tracking system processing 250K+ logs/day.',
//       'Implemented daily ETL pipeline ingesting 2-3 GB of data from multiple databases.',
//     ],
//     results: [
//       'Delivered scalable, production-ready backend platform.',
//       'Implemented security-grade logging and auditing system.',
//       'Automated daily ETL processes consolidating multi-source data.',
//     ],
//     tools: 'Python, Django, PostgreSQL, SQL Server, Docker, K8S, Azure DevOps, AKS, ACI, API Management',
//     skills: 'Backend Development, Database Architecture, Data Engineering, Azure Cloud, CI/CD',
//     highlight: '10M+ records managed across distributed database architecture',
//     icon: Cloud,
//   },
//   {
//     id: 'financial-services-automation',
//     title: 'Financial Services Automation & SAP/ERP Integration',
//     company: 'Nubi Bank',
//     duration: '4 Months',
//     problem: 'Key sales calculations and accounting processes were manual and slow, and legacy web services needed migration.',
//     solution: [
//       'Automated tools used daily by 120+ sales agents.',
//       'Integrated SAP/ERP systems synchronizing 5-7 financial data streams.',
//       'Migrated 12 legacy services to modern languages, improving performance by 30-40%.',
//       'Reduced manual workload for sales/finance teams by 50%.',
//     ],
//     results: ['Successful automation, system integration, and improved performance of migrated services.'],
//     tools: 'SAP, ERPs, multiple programming languages',
//     skills: 'Project Leadership, Automation, System Integration, Software Migration',
//     highlight: '50% reduction in manual workload for sales/finance teams',
//     icon: Settings,
//   },
//   {
//     id: 'rappi-microservices',
//     title: 'Scalable Microservices Architecture',
//     company: 'Rappi',
//     duration: '7 Years',
//     problem: 'The Turbo Team needed to rapidly build scalable microservices to support new products.',
//     solution: [
//       'Built 25+ production microservices from scratch.',
//       'Designed relational and NoSQL databases managing millions of daily requests.',
//       'Implemented 100% test coverage for core business logic.',
//       'Reduced deployment time from 2 hours to 10 minutes using CI/CD pipelines.',
//       'Supported workloads handling 10K-30K requests per minute on AWS.',
//     ],
//     results: ['Successfully delivered multiple scalable microservices deployed in AWS.'],
//     tools: 'NodeJS, Python, Go, AWS (S3, EC2, Lambda, DynamoDB, RDS), Jenkins, GitHub Actions, Redis, Docker, K8S, Kafka',
//     skills: 'Microservices Architecture, Backend Engineering, AWS Cloud, CI/CD',
//     highlight: '25+ microservices handling 10K-30K requests/minute',
//     icon: Server,
//   },
//   {
//     id: 'query-optimization-snowflake',
//     title: 'Query Optimization & ETL with Snowflake',
//     company: 'Rappi',
//     duration: '7 Years',
//     problem: 'Reports were slow and data processing was inefficient, affecting business decisions.',
//     solution: [
//       'Optimized SQL queries resulting in 80% faster report execution.',
//       'Rebuilt ETL pipelines reducing processing time by 60% (from hours to minutes).',
//       'Participated in Snowflake migration for 20+ datasets with guaranteed integrity.',
//       'Connected Snowflake to Power BI, enabling dashboards used by 200+ internal users.',
//     ],
//     results: ['Significant performance improvements and efficient analytics workflows.'],
//     tools: 'Snowflake, SQL, Power BI, Python, Airflow',
//     skills: 'Data Engineering, ETL, Query Optimization, BI',
//     highlight: '80% faster report execution through query optimization',
//     icon: Database,
//   },
//   {
//     id: 'web-performance-optimization',
//     title: 'Web Performance Optimization (Full Stack)',
//     company: 'Rappi',
//     duration: '1.5 Years',
//     problem: 'Web pages suffered from low performance and scalability due to poor data loading strategies.',
//     solution: [
//       'Implemented caching with Redis, reducing API latency by 40%.',
//       'Improved database read flow, reducing query load by 30-50%.',
//       'Built frontend features that improved page load speed by 22%.',
//       'Integrated Fivetran + Snowflake pipelines processing 500k+ rows/day.',
//     ],
//     results: ['Improved overall performance and scalability of the platform.'],
//     tools: 'React, Redux, Angular, Redis, Snowflake, Fivetran',
//     skills: 'Full Stack Development, Performance Optimization, Caching, Frontend Engineering',
//     highlight: '40% reduction in API latency through Redis caching',
//     icon: Gauge,
//   },
//   {
//     id: 'predictive-stock-model',
//     title: 'Predictive Stock & Recommendation Model',
//     company: 'Rappi',
//     duration: '7 Years',
//     problem: 'Key brands needed to improve GMV but lacked a predictive stock and recommendation system.',
//     solution: [
//       'Built ML models trained on millions of product-level records.',
//       'Incorporated 40+ variables (historical demand, campaigns, vendor supply).',
//       'Achieved 18-25% GMV uplift during pilot tests.',
//       'Reduced stockouts for priority stores by ~30%.',
//     ],
//     results: ['Functional predictive model aligned with campaigns and business goals.'],
//     tools: 'Python, Spark, Scikit-learn, TensorFlow',
//     skills: 'Machine Learning, Predictive Modeling, Cross-functional Collaboration',
//     highlight: '18-25% GMV uplift through predictive modeling',
//     icon: TrendingUp,
//   },
//   {
//     id: 'invoice-upload-automation',
//     title: 'Invoice Upload Automation (Retool + S3)',
//     company: 'Rappi',
//     duration: '7 Years',
//     problem: 'Manual invoice uploads caused an unsustainable backup database and unscalable workflows.',
//     solution: [
//       'Migrated all backup data to S3, reducing DB load by 90%.',
//       'Designed end-to-end workflow handling 5,000+ invoices/day.',
//       'Built Retool-based interface for 6 internal teams.',
//       'Implemented Airflow orchestration with 100% automated retries and recovery.',
//     ],
//     results: ['Replaced isolated manual process with scalable, integrated, automated system.'],
//     tools: 'Retool, AWS S3, Airflow, ETL Microservices',
//     skills: 'Solution Architecture, Automation, Systems Integration',
//     highlight: '5,000+ invoices/day processed through automated workflow',
//     icon: FileText,
//   },
//   {
//     id: 'latam-catalog-standardization',
//     title: 'LATAM Product Catalog Standardization & Dark Store Launches',
//     company: 'Rappi',
//     duration: '5 Years',
//     problem: 'Retailers across LATAM experienced inconsistent product catalog quality, poor integration, and UX inconsistencies affecting customer experience.',
//     solution: [
//       'Standardized catalog processes across 7 countries, reducing catalog errors by 35-45%.',
//       'Built workflows eliminating 200,000+ SKU inconsistencies annually.',
//       'Led full launch of Carrefour Darkstore in Brazil and Colombia.',
//       'Created quality guidelines for UX/IA reducing customer search issues by ~20%.',
//       'Implemented data validation scripts automating 70% of manual catalog checks.',
//       'Coordinated catalog readiness for Supermarket launches with 100,000+ SKUs validated.',
//     ],
//     results: [
//       'Significantly improved catalog accuracy and product discoverability across LATAM.',
//       'Successfully launched Carrefour Darkstore format in multiple countries.',
//       'Reduced catalog-related operational issues by 40%.',
//     ],
//     tools: 'Excel, SQL, Python, Power BI, Tableau, Jira, KissFlow, Zoho, Amplitude, Miro, Retool',
//     skills: 'Data Analysis, Automation, Strategic Planning, UX/UI, Information Architecture, Team Leadership',
//     highlight: '35-45% reduction in catalog errors across 7 countries',
//     icon: Globe,
//   },
//   {
//     id: 'rappi-cashless-operations',
//     title: 'Cashless Operations Implementation',
//     company: 'Rappi',
//     duration: '1 Year',
//     problem: 'Retailers needed a reliable cashless system to reduce transaction delays and improve operational efficiency across Brazil.',
//     solution: [
//       'Implemented cashless operation system and conducted training for retailers.',
//       'Coordinated deployment across 500+ POS locations in multiple cities.',
//       'Managed team of 15 individuals to meet service metrics.',
//       'Enabled deferred payment processing without operational disruptions.',
//     ],
//     results: [
//       'Reduced transaction time and improved customer satisfaction.',
//       'Enabled smooth live operations across all deployed locations.',
//     ],
//     tools: 'SQL, Excel Automation, Jira, Power BI',
//     skills: 'Data Analysis, Automation, Strategic Planning, Team Management',
//     highlight: 'Deployed across 500+ POS locations in multiple cities',
//     icon: CreditCard,
//   },
//   {
//     id: 'pits-depot-inventory',
//     title: 'Inventory Management Automation',
//     company: 'Pits Depot',
//     duration: '1 Year',
//     problem: 'Manual inventory tracking and lack of automated reporting caused inefficiencies in managing spare parts stock.',
//     solution: [
//       'Built automated reporting tools using PostgreSQL.',
//       'Developed inventory control systems for car parts using Excel VBA and SQL.',
//       'Collaborated closely with founder to align operations with strategic goals.',
//     ],
//     results: ['Reduced reporting time by 50%, improved stock accuracy, and streamlined spare parts management.'],
//     tools: 'PostgreSQL, Excel VBA, SQL, MySQL',
//     skills: 'Data Automation, Inventory Management, Strategic Alignment',
//     highlight: '50% reduction in reporting time through automation',
//     icon: Package,
//   },
//   {
//     id: 'panda-salud-strategy',
//     title: 'Business Strategy & Data Consulting',
//     company: 'Panda Salud',
//     duration: '1 Year',
//     problem: 'Needed strategic pivots and data-driven insights to support rapid growth and improve user experience.',
//     solution: [
//       'Implemented strategic business pivots to automate processes.',
//       'Developed UX/UI improvements and automated processes using SQL, Python, and MySQL.',
//       'Built dashboards and analytics for operational decision-making.',
//     ],
//     results: ['Enhanced platform usability, improved data accuracy, and supported business growth through actionable insights.'],
//     tools: 'SQL, Python, MySQL, UX/UI Design',
//     skills: 'Data Analysis, Automation, Strategic Planning, UX/UI',
//     highlight: 'Strategic pivots driving business growth and automation',
//     icon: Target,
//   },
//   {
//     id: 'plerk-payments',
//     title: 'Operations & Payments Integration',
//     company: 'Plerk',
//     duration: '2 Years',
//     problem: 'Early-stage operations lacked automation and secure payment integration for multiple providers.',
//     solution: [
//       'Established foundational processes for platform launch.',
//       'Automated workflows and integrated payment systems with Visa, Mastercard, and other providers.',
//       'Implemented analytics for service performance using AWS and SQL.',
//     ],
//     results: ['Enabled successful platform launch, streamlined payment processing, and improved operational efficiency.'],
//     tools: 'AWS, SQL, Payment Gateway APIs',
//     skills: 'Process Automation, Payment Integration, Cloud Services, Data Analytics',
//     highlight: 'Successful payment integration with major providers',
//     icon: Shield,
//   },
//   {
//     id: 'ldc-data-automation',
//     title: 'Project LDC: Data Automation & Make One App',
//     company: 'Louis Dreyfus Company',
//     duration: '12 Months',
//     problem:
//       'Relied heavily on manual Excel processes and outdated VBA macros causing errors, no centralized validation workflows, and high time consumption for recurring reports.',
//     solution: [
//       'Normalized and standardized 100,000+ rows of operational data for accuracy.',
//       'Automated recurring reporting using Excel refactors, SQL queries, and Power Automate — reducing manual effort by 60–70%.',
//       'Built Power BI dashboards consolidating procurement, sampling, and logistics KPIs.',
//       'Developed Power Apps to replace manual Excel forms — reducing errors by 40%.',
//       'Centralized supplier/contract data for audit readiness across regions.',
//       'Created automated daily-refresh data pipelines.',
//       'Reduced monthly reporting time from 2 days to under 1 hour.',
//     ],
//     results: ['Improved data quality and reporting accuracy across global operations.', 'Enabled teams to focus on analysis rather than manual manipulation.'],
//     tools: 'Excel, VBA, SQL, Power BI, Power Automate, Power Apps, Relational DBs',
//     skills: 'Process Automation, Data Standardization, Dashboard Development',
//     highlight: 'Reduced monthly reporting time from 2 days to <1 hour',
//     icon: Zap,
//   },
// ];

// const headerServices = [
//   { title: "Business Intelligence & Dashboards", href: "/services/business-intelligence" },
//   { title: "Supply Chain & Operations Analytics", href: "/services/supply-chain" },
//   { title: "Sustainability & Carbon Footprint Analytics", href: "/services/sustainability" },
//   { title: "Product & Technology Analytics", href: "/services/product-analytics" },
//   { title: "Data Automation", href: "/services/data-automation" },
//   { title: "Integration", href: "/services/integration" },
// ];

// const caseStudyFaqs = [
//   {
//     question: "Are these case studies from real client projects?",
//     answer: "Yes, all our case studies are based on real-world projects with enterprise clients. We've anonymized company names and specific data points to respect confidentiality agreements, but the challenges, solutions, and results are entirely authentic."
//   },
//   {
//     question: "How do you measure the results shown in the case studies?",
//     answer: "We work with our clients to establish key performance indicators (KPIs) at the start of each project. The results, such as 'Reduced reporting time by 95%' or '40% reduction in errors,' are measured against these pre-defined metrics and validated by the client."
//   },
//   {
//     question: "Can I see a more detailed breakdown of a specific project?",
//     answer: "Absolutely. While these summaries provide a high-level overview, we can walk you through a more detailed, anonymized demonstration during a consultation. This allows us to showcase the technical architecture and methodologies in greater depth."
//   },
//   {
//     question: "My business is different. How will these solutions apply to me?",
//     answer: "While the specific context of each case study is unique, the underlying principles of data automation, analytics, and strategic implementation are highly transferable. We use these examples to illustrate our capabilities, which we then tailor to solve your specific business challenges."
//   }
// ];

// export default function CaseStudiesPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const { scrollY } = useScroll();
//   const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']);

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Inlined Header */}
//       <motion.header 
//         style={{ backgroundColor: headerBackground }}
//         className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-200 shadow-sm"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <Link href="/" className="flex items-center space-x-2">
//               <div className="w-8 h-8 rounded-lg flex items-center justify-center">
//                 <img
//                     src="/perspico_data_logo.png"
//                     alt="Perspico Data Logo"
//                     className="w-full h-full object-contain"
//                   />
//               </div>
//               <span className="font-heading text-xl">Perspico Data</span>
//             </Link>
            
//             <nav className="hidden md:flex items-center space-x-8">
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
//                   Services
//                   <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
//                 </button>
//                 {isServicesOpen && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg"
//                   >
//                     <ul className="py-2">
//                       {headerServices.map((service) => (
//                         <li key={service.href}>
//                           <Link href={service.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">{service.title}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </div>
//               <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
//               <Link href="/services/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
//               <a href="/#infrastructure" className="text-gray-700 hover:text-blue-600 transition-colors">Infrastructure</a>
//               <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
//               <Button asChild className="bg-blue-600 hover:bg-blue-700"><a href="/#contact">Book Consultation</a></Button>
//             </nav>

//             <button 
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="md:hidden bg-white border-t border-gray-200"
//           >
//             <div className="px-4 py-2 space-y-1">
//               <a href="/#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
//               <a href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
//               <Link href="/services/case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Case Studies</Link>
//               <a href="/#infrastructure" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Infrastructure</a>
//               <a href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
//             </div>
//           </motion.div>
//         )}
//       </motion.header>

//       <main className="pt-24 pb-20">
//         <section id="case-studies-hero" className="relative text-center mb-20 px-4 sm:px-6 lg:px-8">
//             <div className="absolute inset-0 -z-10 overflow-hidden">
//               <motion.div 
//                 className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full"
//                 animate={{
//                   x: ["-50%", "-60%", "-50%", "-40%", "-50%"],
//                   y: ["-50%", "-45%", "-50%", "-55%", "-50%"],
//                   scale: [1, 1.05, 1, 1.05, 1],
//                 }}
//                 transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200 shadow-sm">
//                 Proven Results
//               </Badge>
//               <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">
//                 Our Case Studies
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Discover how we've helped organizations like yours transform data into a strategic asset through automation, analytics, and intelligent design.
//               </p>
//             </motion.div>
//         </section>

//         <motion.div
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
//           initial="hidden"
//           animate="show"
//           variants={containerVariants}
//         >
//           {projects.map((p) => (
//             <motion.div key={p.id} variants={cardVariants}>
//               <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
//                 <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/5 rounded-full transition-transform duration-500 group-hover:scale-[8]"></div>
//                 <div className="relative">
//                   <div className="grid md:grid-cols-12">
//                     <div className="md:col-span-4 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200/80">
//                       <div>
//                         <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 shadow-md">
//                           <p.icon className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <CardTitle className="font-heading text-2xl mb-2">{p.title}</CardTitle>
//                         <CardDescription>{p.company} • {p.duration}</CardDescription>
//                       </div>
//                       <div className="mt-6">
//                         <Badge variant="secondary" className="bg-green-100 text-green-800 border border-green-200 shadow-sm">
//                           {p.highlight}
//                         </Badge>
//                       </div>
//                     </div>
//                     <div className="md:col-span-8 p-8">
//                       <div className="grid gap-6">
//                         <div>
//                           <h4 className="font-semibold text-gray-800 mb-2">The Challenge</h4>
//                           <p className="text-gray-600 text-sm leading-relaxed">{p.problem}</p>
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-gray-800 mb-2">Our Solution & Results</h4>
//                           <ul className="space-y-2">
//                             {p.solution?.map((s, i) => (
//                               <li key={i} className="flex items-start text-sm">
//                                 <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                                 <span className="text-gray-600">{s}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-gray-800 mb-2">Technology Stack</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {p.tools?.split(', ').map(tool => (
//                               <Badge key={tool} variant="outline" className="bg-white border-gray-300 text-gray-700">{tool}</Badge>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </main>

//       {/* FAQ Section */}
//       <section id="faq" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-6">
//               About Our Case Studies
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Your questions about our projects and results, answered.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="max-w-4xl mx-auto"
//           >
//             <Accordion type="single" collapsible className="w-full">
//               {caseStudyFaqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border-0 border-b shadow-sm rounded-lg mb-4 px-6">
//                   <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="text-gray-600 text-base pb-6">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </motion.div>
//         </div>
//       </section>
      
//       {/* Inlined Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center">
//                   <img
//                     src="/perspico_data_logo.png"
//                     alt="Perspico Data Logo"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <span className="font-heading text-xl">Perspico Data</span>
//               </div>
//               <p className="text-gray-400">
//                 Transforming data into strategic advantage for enterprise organizations.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-heading mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400">
//                 {headerServices.map(service => (
//                   <li key={service.href}><a href={service.href} className="hover:text-white transition-colors">{service.title.split('&')[0]}</a></li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-heading mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
//                 <li><Link href="/services/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
//                 <li><a href="/#infrastructure" className="hover:text-white transition-colors">Infrastructure</a></li>
//                 <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-heading mb-4">UK Office</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><MapPin className="inline w-4 h-4 mr-2" />London, UK</li>
//                 <li><a href="mailto:info@perspicodata.com" className="hover:text-white transition-colors"><Mail className="inline w-4 h-4 mr-2" />info@perspicodata.com</a></li>
//                 <li><a href="tel:+447825247759" className="hover:text-white transition-colors"><Phone className="inline w-4 h-4 mr-2" />+44 7825247759</a></li>
//               </ul>
//             </div>
//           </div>

//           <Separator className="my-8 bg-gray-800" />

//           <div className="text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Perspico Data. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }