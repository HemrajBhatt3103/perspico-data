'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Cpu, 
  Monitor,
  Smartphone,
  Target,
  CheckCircle,
  ArrowRight,
  Users,
  Activity,
  Database,
  Shield,
  ChevronDown,
  TrendingUp,
  Globe,
  Zap,
  BarChart3,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-separator'

export default function ProductAnalyticsPage() {
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
      question: "What metrics are crucial for product performance analysis?",
      answer: "Key metrics include user adoption rates, feature usage, retention, and conversion funnels. Our product performance analysis helps you identify and track the specific metrics that align with your goals, providing a clear view of what's working and what isn't."
    },
    {
      question: "How do you conduct user journey analysis across platforms?",
      answer: "We implement cross-platform tracking to stitch together user sessions, creating a unified view of the customer journey. This detailed journey analysis is crucial for understanding user behavior and identifying friction points, regardless of the device."
    },
    {
      question: "Can you help us with A/B test analysis?",
      answer: "Yes. We provide end-to-end support for experimentation, from hypothesis generation and experiment design to the statistical analysis of the results. This ensures you can make data-driven decisions about new features with confidence."
    },
    {
      question: "How does product analysis lead to a better ROI?",
      answer: "By understanding how users interact with your product through detailed analysis, you can prioritize high-impact features, improve user retention, and optimize conversion funnels. This leads to a more engaging product, higher customer satisfaction, and ultimately, increased revenue."
    }
  ];

  const features = [
    {
      title: "ROI Metrics Analysis",
      description: "Comprehensive return on investment tracking and optimization insights",
      icon: Target
    },
    {
      title: "User Adoption Tracking",
      description: "Monitor product usage patterns and identify improvement opportunities",
      icon: Smartphone
    },
    {
      title: "Performance Analytics",
      description: "Real-time performance monitoring and bottleneck identification",
      icon: Activity
    },
    {
      title: "Feature Usage Insights",
      description: "Detailed analysis of feature adoption and user engagement patterns",
      icon: Monitor
    }
  ]

  const benefits = [
    "45% improvement in product ROI",
    "30% faster feature adoption rates",
    "Enhanced user satisfaction scores",
    "Data-driven product roadmap",
    "Reduced development waste",
    "Better resource allocation"
  ]

  const technologies = [
    { name: "Mixpanel", category: "Product Analytics" },
    { name: "Amplitude", category: "User Analytics" },
    { name: "Cloud Analytics", category: "Web Analytics" },
    { name: "Segment", category: "Data Collection" },
    { name: "Tableau", category: "Visualization" },
    { name: "Python", category: "Analytics" }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <Badge className="mb-2 bg-purple-100 text-purple-800 border-purple-200">Core Service</Badge>
                <h1 className="font-heading text-4xl md:text-6xl text-gray-900 leading-tight">
                  Product & Technology Analytics
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-3xl">
              Drive product success with comprehensive analytics covering ROI metrics, 
              adoption patterns, and performance tracking insights.
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
                Product Intelligence Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Product Analytics solutions provide deep insights into how users interact with 
                your products, enabling data-driven decisions that enhance user experience, 
                optimize features, and maximize return on investment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From user journey mapping to feature adoption analysis, we help product teams 
                understand what drives success, identify opportunities for improvement, and 
                build products that truly meet customer needs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">User Behavior Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Performance Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">ROI Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Feature Analytics</span>
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
                  src="/images/product-analytics.png" 
                  alt="Product Analytics Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
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
              Advanced Product Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insights for product optimization and growth
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
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
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
                Product Development Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
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
                    <Users className="w-6 h-6 text-purple-600" />
                    <span>Client Success Story</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "The product analytics platform transformed how we make development decisions. 
                    We improved our ROI by 45% and doubled user adoption rates for new features. 
                    The insights have been invaluable for our product roadmap."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-heading">VP of Product</div>
                      <div className="text-sm text-gray-600">SaaS Technology Company</div>
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
              Analytics Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading tools for comprehensive product intelligence
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
              Key information about our Product & Technology Analysis services.
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Optimize Your Product Analytics?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our product analytics can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
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
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img src="/perspico_data_logo.png" alt="Perspico Data Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-heading text-xl">Perspico Data</span>
              </div>
              <p className="text-gray-400">Transforming data into strategic advantage.</p>
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