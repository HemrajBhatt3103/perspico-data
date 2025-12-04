'use client'

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BarChart3, 
  PieChart,
  LineChart,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  ChevronDown,
  Zap,
  TrendingUp,
  Globe,
  Cpu,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function BusinessIntelligencePage() {
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
      question: "What BI tools do you specialize in?",
      answer: "We are tool-agnostic but have deep expertise in market-leading platforms like Power BI, Tableau, and Looker. Our primary focus is on selecting the right tool that fits your existing infrastructure, budget, and business objectives."
    },
    {
      question: "How long does it take to develop a set of dashboards?",
      answer: "The timeline varies based on complexity and data readiness. A simple departmental dashboard might take 1-2 weeks, while a comprehensive, enterprise-wide BI solution could take 2-3 months. We provide a detailed project plan after our initial discovery phase."
    },
    {
      question: "Can you connect to our company's custom data sources?",
      answer: "Yes. A core part of our service is data integration. We can connect to a wide array of sources, including standard databases (SQL, Oracle), cloud warehouses (Snowflake, BigQuery), SaaS APIs, and even proprietary or legacy systems."
    },
    {
      question: "Do you provide training for our team to use the new tools?",
      answer: "Absolutely. We believe user adoption is key to a project's success. We provide comprehensive training sessions tailored to different user groups, from executives to analysts, ensuring your team can confidently use the new dashboards to drive decisions."
    }
  ];

  const features = [
    {
      title: "Interactive Dashboards",
      description: "Real-time data visualization with drill-down capabilities and customizable views",
      icon: PieChart
    },
    {
      title: "KPI Design & Monitoring",
      description: "Strategic key performance indicators tailored to your business objectives",
      icon: Target
    },
    {
      title: "Automated Reporting",
      description: "Scheduled reports with automated data refresh and distribution",
      icon: Zap
    },
    {
      title: "Data Storytelling",
      description: "Compelling narratives that transform complex data into actionable insights",
      icon: LineChart
    }
  ]

  const benefits = [
    "60% faster decision-making processes",
    "45% reduction in report generation time",
    "Real-time visibility into business performance",
    "Improved data accuracy and consistency",
    "Enhanced stakeholder engagement",
    "Scalable solution for growing data needs"
  ]

  const technologies = [
    { name: "Power BI", category: "Visualization" },
    { name: "Tableau", category: "Analytics" },
    { name: "Looker", category: "Business Intelligence" },
    { name: "D3.js", category: "Custom Visualizations" },
    { name: "Apache Superset", category: "Open Source" },
    { name: "Grafana", category: "Monitoring" }
  ]

  const { scrollY } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <motion.header style={{ backgroundColor: headerBackground }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-200/80">
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
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="/services/case-studies" target="_blank" rel="noopener noreferrer">Case Studies</a>
              <a href="/#infrastructure" className="text-gray-700 hover:text-blue-600 transition-colors">Infrastructure</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700"><a href="/#contact">Book Consultation</a></Button>
            </nav>
            <button className="md:hidden" onClick={() => {}}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-200/50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center mr-2 border border-gray-200/50">
                <ArrowLeft className="w-5 h-5 " />
              </div>
              Back to Home
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2 bg-blue-100 text-blue-800 border-blue-200">Core Service</Badge>
                <h1 className="font-heading text-4xl md:text-6xl text-gray-900 leading-tight">
                  Business Intelligence & Dashboards
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl">
              Transform raw data into actionable insights with interactive dashboards, 
              real-time analytics, and comprehensive reporting solutions.
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
                Data-Driven Decision Making
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Business Intelligence solutions empower organizations to make informed decisions 
                through real-time data visualization, predictive analytics, and automated reporting. 
                We transform complex datasets into intuitive dashboards that provide immediate insights 
                into business performance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From executive-level overviews to operational details, our BI platforms scale with your 
                organization's needs, ensuring the right information reaches the right people at the right time.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Real-time Data Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Custom Dashboard Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Mobile-Optimized Views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Automated Alerts</span>
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
                  src="/images/bi-dashboard.png" 
                  alt="Business Intelligence Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
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
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BI solutions designed for modern enterprises
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
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
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
                Business Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-600" />
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
      {/* Client Success Story Icon Image */}
          <img 
            src="/bid_logo.jpeg" // Replace with your image path
            alt="Success Icon"
            className="w-8 h-8"
          />
          <span>Client Success Story</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          "A fast-growing fintech, I helped the team automate their entire reporting system. Before the project, they handled over 25 weekly reports manually, which caused errors and slowed decision-making.
I built structured data pipelines, automated more than 80% of their Excel workflows, and developed 7 interactive Power BI dashboards for their finance, risk, and customer teams."
        </p>
        <div className="flex items-center space-x-4">
          {/* Chief Data Officer Profile Image */}
          <img
            src="/bid.jpeg" // Replace with your image path
            alt="Chief Data Officer"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-heading">Javier Montoya</div>
            <div className="text-sm text-gray-600">Co-founder - CTO at Avanzo</div>
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
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and platforms for optimal performance
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
              Key information about our Business Intelligence services.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our Business Intelligence solutions can drive your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
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
                <li><a href="/services/case-studies" target="_blank" className="hover:text-white transition-colors" rel="noopener noreferrer">Case Studies</a> </li>
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