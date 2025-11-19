'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield,
  Lock,
  Eye,
  Download,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  FileText,
  Server,
  Cookie,
  Globe,
  User
} from 'lucide-react';

const headerServices = [
  { title: "Business Intelligence & Dashboards", href: "/services/business-intelligence" },
  { title: "Supply Chain & Operations Analytics", href: "/services/supply-chain" },
  { title: "Sustainability & Carbon Footprint Analytics", href: "/services/sustainability" },
  { title: "Product & Technology Analytics", href: "/services/product-analytics" },
  { title: "Data Automation", href: "/services/data-automation" },
  { title: "Integration", href: "/services/integration" },
];

const privacySections = [
  {
    id: 'information-collected',
    title: 'Information We Collect',
    icon: FileText,
    content: [
      {
        subtitle: 'Personal Information',
        items: [
          'Name, email address, phone number, job title',
          'Company name, industry sector, and business needs',
          'Communication preferences and contact history',
          'Professional background and project requirements',
          'Billing and payment information'
        ]
      },
      {
        subtitle: 'Technical Information',
        items: [
          'IP address, browser, and device details',
          'Website usage behaviour and interaction patterns',
          'Cookies and similar tracking technologies',
          'Referral sources and navigation paths',
          'Server logs, diagnostics, and error reports'
        ]
      },
      {
        subtitle: 'Business Information',
        items: [
          'Project specifications, scope, and requirements',
          'Data analysis objectives and performance goals',
          'Budget expectations and timeline preferences',
          'Industry-specific regulations and compliance needs',
          'Information about existing data sources and processing workflows'
        ]
      },
      {
        subtitle: 'Client Data (When We Act as a Data Processor)',
        items: [
          'Data sets and files provided for analytics',
          'Business intelligence metrics and KPIs',
          'Data quality assessments and recommended improvements',
          'Custom models, algorithms, and analytical outputs',
          'Compliance‑related information required for audits or regulation'
        ]
      }
    ]
  },
  {
    id: 'information-use',
    title: 'How We Use Your Information',
    icon: Eye,
    content: [
      {
        subtitle: 'Service Delivery',
        items: [
          'Deliver data consulting and analytics services',
          'Develop customised solutions tailored to your organisation',
          'Communicate updates, timelines, and deliverables',
          'Provide ongoing technical assistance and support',
          'Build dashboards, reports, and visualisations'
        ]
      },
      {
        subtitle: 'Business Operations',
        items: [
          'Process payments and manage contractual relationships',
          'Improve our website, tools, and internal processes',
          'Conduct internal market and service research',
          'Meet legal and regulatory obligations',
          'Maintain client accounts and long‑term relationships'
        ]
      },
      {
        subtitle: 'Marketing Communications',
        items: [
          'Share insights, trends, and relevant updates',
          'Notify you of new services or enhancements',
          'Invite you to webinars, demos, or industry events',
          'Share anonymised case studies',
          'Provide educational resources and best‑practice guides'
        ]
      }
    ]
  },
  {
    id: 'data-processing',
    title: 'Data Processing Activities',
    icon: Server,
    content: [
      {
        subtitle: 'Data Analysis Services',
        items: [
          'Statistical analysis and exploratory research',
          'Machine learning and modelling',
          'Predictive analytics and trend forecasting',
          'Custom reports and data visualisation',
          'KPI tracking and performance measurement'
        ]
      },
      {
        subtitle: 'Data Transformation',
        items: [
          'Data cleaning, validation, and standardisation',
          'Format conversion and unification',
          'Data integration from multiple sources',
          'ETL workflows and automation',
          'Real‑time or streaming data processing'
        ]
      },
      {
        subtitle: 'Cloud & Infrastructure',
        items: [
          'Secure cloud‑based storage and compute',
          'Backup, disaster recovery, and redundancy',
          'Scalable analytics environments',
          'API access management and controls',
          'Monitoring, optimisation, and performance tuning'
        ]
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security Measures',
    icon: Lock,
    content: [
      {
        subtitle: 'Technical Safeguards',
        items: [
          'TLS 1.3 encryption for data in transit',
          'AES‑256 encryption for data at rest',
          'Secure cloud platforms with granular access controls',
          'Regular penetration testing and security reviews',
          'Multi‑factor authentication and zero‑trust security principles'
        ]
      },
      {
        subtitle: 'Organisational Measures',
        items: [
          'Staff training on security and data protection',
          'Role‑based access permissions',
          'Disaster recovery and continuity planning',
          'Incident response protocols',
          'Background checks for team members'
        ]
      },
      {
        subtitle: 'Compliance Standards',
        items: [
          'UK GDPR compliance',
          'SOC 2 Type II and ISO 27001‑aligned controls',
          'Industry‑specific compliance where required',
          'Routine audits and security assessments',
          'Data Protection Impact Assessments'
        ]
      }
    ]
  },
  {
    id: 'privacy-rights',
    title: 'Your Privacy Rights',
    icon: User,
    content: [
      {
        subtitle: 'Access & Control',
        items: [
          'Right to access your data',
          'Right to correct inaccurate information',
          'Right to request deletion (where legally permissible)',
          'Right to data portability',
          'Right to object to certain processing'
        ]
      },
      {
        subtitle: 'GDPR Rights for EU Residents',
        items: [
          'Right to object to legitimate‑interest processing',
          'Right to restrict processing',
          'Right to lodge complaints with supervisory authorities',
          'Right to withdraw consent',
          'Right to portability and transparency'
        ]
      }
    ]
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking Technologies',
    icon: Cookie,
    content: [
      {
        subtitle: 'Essential Cookies',
        items: [
          'Authentication and login management',
          'Security, fraud prevention, and session stability',
          'Core website performance and preferences'
        ]
      },
      {
        subtitle: 'Analytics Cookies',
        items: [
          'Google Analytics for performance insights',
          'Heatmaps and UX optimisation tools',
          'A/B testing and feature improvement',
          'Error tracking and diagnostics'
        ]
      },
      {
        subtitle: 'Cookie Management',
        items: [
          'Granular consent controls',
          'Easy opt‑out options',
          'Regular audits and updates',
          'Transparency on third‑party cookies'
        ]
      }
    ]
  },
  {
    id: 'data-transfers',
    title: 'International Data Transfers',
    icon: Globe,
    content: [
      {
        subtitle: 'Cross‑Border Processing',
        items: [
          'Data may be processed in the UK, EU, or US',
          'All transfers comply with UK GDPR and applicable laws',
          'Standard Contractual Clauses (SCCs) where required',
          'Adequacy decisions and secure transfer frameworks'
        ]
      },
      {
        subtitle: 'Service Provider Locations',
        items: [
          'AWS (multi‑region infrastructure)',
          'Google (analytics services)',
          'Microsoft 365 (EU/UK data options)',
          'Stripe (global PCI DSS‑compliant payment processing)'
        ]
      }
    ]
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    icon: Shield,
    content: [
      {
        subtitle: 'Retention Periods',
        items: [
          'Client data: engagement duration + 7 years',
          'Marketing data: until opt‑out or 3 years of inactivity',
          'Website analytics: 26 months',
          'Financial documentation: 7 years'
        ]
      },
      {
        subtitle: 'Secure Deletion',
        items: [
          'Automated deletion workflows',
          'Secure erasure and overwrite procedures',
          'Certificates for physical media destruction',
          'Client‑directed return or deletion of data'
        ]
      }
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('information-collected');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
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
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Last Updated: November 2025
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Your privacy is fundamental to our mission. Learn how Perspico Data protects and manages your information with enterprise-grade security standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto space-x-1 py-2 scrollbar-hide">
              {privacySections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(section.id);
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid lg:grid-cols-4 gap-8"
            >
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-12">
                {/* Important Notice */}
                <motion.div variants={itemVariants}>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Important Notice
                          </h3>
                          <p className="text-gray-600">
                            This Privacy Policy explains how Perspico Data Ltd Consulting ("we," "our," or "us") collects, uses, and protects your personal information when you use our website and services. As a data consultancy specializing in AI, analytics, and cloud solutions, we handle both personal data and client business data with the highest standards of security and compliance.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Privacy Sections */}
                {privacySections.map((section) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    variants={itemVariants}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="font-heading text-3xl text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {section.content.map((subsection, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Additional Important Sections */}
                <motion.div variants={itemVariants} id="children-privacy" className="scroll-mt-32">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="font-heading text-3xl text-gray-900">
                      Children's Privacy
                    </h2>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Our services are not directed at individuals under 16</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">We do not knowingly collect children's data</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">If we become aware of such collection, we will delete it promptly</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Parents may contact us to request deletion</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">We comply with COPPA and children's privacy requirements</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Policy Updates */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Policy Updates
                      </h3>
                      <p className="text-gray-600 mb-4">
                        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                      </p>
                      <p className="text-gray-600">
                        For significant changes that affect your rights, we will provide additional notice through email or prominent website notifications at least 30 days before the changes take effect.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href="mailto:privacy@perspicodata.com" className="hover:text-blue-600">
                            privacy@perspicodata.com
                          </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href="tel:+447825247759" className="hover:text-blue-600">
                            +44 7825247759
                          </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>London, UK</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Your Rights</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Access your personal data
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Correct inaccurate information
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Request data deletion
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Object to processing
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Data portability
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Compliance Standards</h3>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="bg-green-50 text-green-700">UK GDPR</Badge>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700">SOC 2 Type II</Badge>
                        <Badge variant="secondary" className="bg-purple-50 text-purple-700">ISO 27001</Badge>
                        <Badge variant="secondary" className="bg-orange-50 text-orange-700">PCI DSS</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
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