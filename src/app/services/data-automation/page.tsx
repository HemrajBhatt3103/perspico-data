'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Zap, 
  Settings,
  Clock,
  Database,
  Target,
  CheckCircle,
  ArrowRight,
  Users,
  Activity,
  Shield,
  AlertTriangle,
  ChevronDown,
  TrendingUp,
  Globe,
  Cpu,
  BarChart3,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-separator'

export default function DataAutomationPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesList = [
    {
      title: "Business Intelligence & Dashboards",
      href: "/services/business-intelligence",
    },
    {
      title: "Supply Chain & Operations Analytics",
      href: "/services/supply-chain",
    },
    {
      title: "Sustainability & Carbon Footprint Analytics",
      href: "/services/sustainability",
    },
    {
      title: "Product & Technology Analytics",
      href: "/services/product-analytics",
    },
    {
      title: "Data Automation",
      href: "/services/data-automation",
    },
    {
      title: "Integration",
      href: "/services/integration",
    }
  ]

  const pageFaqs = [
    {
      question: "What's the difference between data automation and simple scripting?",
      answer: "While scripting handles single, repetitive tasks, data automation orchestrates complex, end-to-end workflows. It includes robust error handling, dependency management, real-time monitoring, and scalability, creating a resilient system rather than just a simple script."
    },
    {
      question: "How do you handle failures in an automated pipeline?",
      answer: "Our automated pipelines are built with resilience in mind. We implement comprehensive logging, automated alerts for failures, and retry mechanisms. For critical processes, we design 'dead-letter queues' to isolate problematic data for manual review without halting the entire pipeline."
    },
    {
      question: "Can you automate data collection from third-party APIs or websites?",
      answer: "Yes. We specialize in building robust data connectors to pull information from various external sources, including third-party APIs (for services like Salesforce, Google Analytics, etc.) and web scraping for public data, ensuring it's structured and integrated into your data ecosystem."
    },
    {
      question: "How does data automation improve data quality?",
      answer: "Automation improves quality by eliminating manual entry errors. We embed data validation, cleaning, and transformation rules directly into the pipeline, ensuring that data is standardized and consistent before it reaches your analytics platforms or databases."
    }
  ];

  const features = [
    {
      title: "ETL Pipeline Automation",
      description: "Automated data extraction, transformation, and loading processes",
      icon: Database
    },
    {
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation",
      icon: Settings
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring with instant error detection and alerts",
      icon: Activity
    },
    {
      title: "Error Handling",
      description: "Robust error recovery mechanisms and automated issue resolution",
      icon: AlertTriangle
    }
  ]

  const benefits = [
    "70% reduction in manual processing time",
    "90% fewer data processing errors",
    "24/7 automated data workflows",
    "Improved data quality and consistency",
    "Reduced operational costs",
    "Faster time-to-insight"
  ]

  const technologies = [
    { name: "Apache Airflow", category: "Orchestration" },
    { name: "Python", category: "Automation" },
    { name: "Cloud", category: "Serverless" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Jenkins", category: "CI/CD" }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                    src="/perspico_data_logo.png"
                    alt="Perspico Data Logo"
                    className="w-full h-full object-contain"
                  />
              </div>
              <span className="font-heading text-2xl">Perspico Data</span>
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
                      {servicesList.map((service) => (
                        <li key={service.href}>
                          <a href={service.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">{service.title}</a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <a href="/services/case-studies" target="_blank" rel="noopener noreferrer">Case Studies</a>

              <Link href="/#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Results</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/#contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Book Consultation</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2 bg-orange-100 text-orange-800 border-orange-200">Core Service</Badge>
                <h1 className="font-heading text-4xl md:text-6xl text-gray-900 leading-tight">
                  Data Automation
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl">
              Streamline your data operations with automated ETL pipelines, process automation, 
              and real-time error monitoring for enhanced efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-6">
                Intelligent Data Automation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Data Automation solutions eliminate manual data processing tasks through 
                sophisticated ETL pipelines, intelligent workflow automation, and comprehensive 
                monitoring systems. This ensures reliable, timely, and accurate data delivery 
                across your organization.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From data extraction to transformation and loading, our automated systems handle 
                complex data workflows with minimal human intervention, reducing errors and 
                accelerating your time-to-insight dramatically.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Automated ETL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Process Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Error Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">Quality Assurance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/data-automation.png" 
                  alt="Data Automation Pipeline"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-6">
              Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions for data operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-8">
                Operational Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center space-x-2">
                    <img 
                      src="/data_automation_logo.jpeg" // Replace with your image path
                      className="w-10 h-10"
                    />
                    <span>Client Success Story</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Perspico Data  helped us clean and unify more than 120,000 user records across 15 data sources. They automated 70% of our workflows and gave us a clear, brought structure and clarity to our user data at a critical stage of our startup. Their work helped us clean, organize, and connect key data sources, giving us the visibility we needed to understand user behavior and make better product decisions. I highly recommend their work"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/data_automation.jpeg" // Replace with your image path
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-heading">Memo Mogollan</div>
                      <div className="text-sm text-gray-600">Co-founder CTO Panda Salud</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-6">
              Automation Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading tools for robust data automation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="font-heading text-lg text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-600 mt-1">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-6">
              Your Questions, Answered
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key information about our Data Automation services.
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
              {pageFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border-0 border-b shadow-sm rounded-lg mb-4 px-6">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Automate Your Data Operations?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our automation solutions can transform your data workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <img src="/perspico_data_logo.png" alt="Perspico Data Logo" className="w-full h-full object-contain" />
                </div>
              <span className="font-heading text-2xl">Perspico Data</span>
            </div>
            <div>
              <h4 className="font-heading mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {servicesList.map(service => (
                  <li key={service.href}><a href={service.href} className="hover:text-white transition-colors">{service.title.split('&')[0]}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services/privacy-policy" target="_blank" className="hover:text-white transition-colors" rel="noopener noreferrer">Privacy Policy</a> </li>

                <li><a href="/services/case-studies" target="_blank" className="hover:text-white transition-colors" rel="noopener noreferrer">Case Studies</a></li>
                <li><a href="/#infrastructure" className="hover:text-white transition-colors">Infrastructure</a></li>
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
  )
}