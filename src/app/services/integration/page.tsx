'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Database, 
  Link as LinkIcon,
  Cloud,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  Users,
  Activity,
  Zap,
  ChevronDown,
  TrendingUp,
  Globe,
  Cpu,
  BarChart3,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function IntegrationPage() {
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
      question: "What types of systems can you integrate?",
      answer: "We can integrate a vast range of systems, including CRM (e.g., Salesforce), ERP (e.g., SAP), marketing automation platforms, financial software, custom databases, and third-party SaaS applications. Our goal is to create a unified data ecosystem, regardless of the source."
    },
    {
      question: "Do you build custom APIs or use existing ones?",
      answer: "Both. We are proficient at leveraging existing APIs for standard integrations. When a pre-built solution doesn't exist or is insufficient, we design and develop custom, secure, and scalable APIs to meet your specific data-sharing needs."
    },
    {
      question: "How do you ensure data consistency between integrated systems?",
      answer: "We establish a 'single source of truth' and implement robust data synchronization logic. This includes data mapping, transformation rules, and validation checks to ensure that data remains consistent and accurate across all connected systems."
    },
    {
      question: "How do you handle real-time vs. batch integrations?",
      answer: "We tailor the approach to your needs. For use cases requiring immediate data, we implement real-time integrations using webhooks or streaming platforms. For less time-sensitive data, we design efficient batch processes that run on a schedule to minimize system load."
    }
  ];

  const features = [
    {
      title: "API Connections",
      description: "Seamless integration with third-party APIs and external data sources",
      icon: LinkIcon
    },
    {
      title: "System Unification",
      description: "Connect disparate systems into a cohesive data ecosystem",
      icon: Cloud
    },
    {
      title: "Data Synchronization",
      description: "Real-time data sync across multiple platforms and databases",
      icon: Activity
    },
    {
      title: "Security Integration",
      description: "Enterprise-grade security protocols for all data connections",
      icon: Shield
    }
  ]

  const benefits = [
    "Unified data ecosystem across all platforms",
    "Real-time data synchronization",
    "Eliminated data silos and redundancies",
    "Improved data consistency and accuracy",
    "Enhanced system interoperability",
    "Reduced integration maintenance overhead"
  ]

  const technologies = [
    { name: "REST APIs", category: "Integration" },
    { name: "GraphQL", category: "Query Language" },
    { name: "Apache Kafka", category: "Streaming" },
    { name: "MQTT", category: "IoT Protocol" },
    { name: "Webhooks", category: "Event-driven" },
    { name: "SQL & NoSQL", category: "Database" }
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2 bg-indigo-100 text-indigo-800 border-indigo-200">Core Service</Badge>
                <h1 className="font-heading text-4xl md:text-6xl text-gray-900 leading-tight">
                  Integration
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl">
              Connect your entire technology ecosystem with seamless API connections, 
              system unification, and real-time data synchronization solutions.
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
                Unified Data Integration Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Integration solutions break down data silos by connecting disparate systems, 
                applications, and data sources into a unified ecosystem. We ensure seamless 
                data flow across your entire technology stack while maintaining security and 
                data integrity.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From legacy system modernization to cloud integration, our solutions enable 
                real-time data synchronization, API management, and comprehensive system 
                interoperability for enhanced business agility.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">API Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">Data Synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">System Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">Security Protocols</span>
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
                  src="/images/integration-systems.png" 
                  alt="System Integration Architecture"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
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
              Integration Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive integration solutions for modern enterprises
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
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
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
                Integration Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
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
                    <Users className="w-6 h-6 text-indigo-600" />
                    <span>Client Success Story</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "The integration platform unified our 50+ disparate systems into a cohesive ecosystem. 
                    Real-time data synchronization eliminated data inconsistencies and improved our 
                    operational efficiency by over 60%."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-heading">CTO</div>
                      <div className="text-sm text-gray-600">Enterprise Software Company</div>
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
              Integration Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern protocols and platforms for seamless connectivity
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
              Key information about our Integration services.
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Unify Your Data Ecosystem?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our integration solutions can transform your systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4">
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