'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  FileText,
  Scale,
  Shield,
  Download,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  PoundSterling,
  Lock,
  BookOpen,
  Gavel
} from 'lucide-react';

const headerServices = [
  { title: "Business Intelligence & Dashboards", href: "/services/business-intelligence" },
  { title: "Supply Chain & Operations Analytics", href: "/services/supply-chain" },
  { title: "Sustainability & Carbon Footprint Analytics", href: "/services/sustainability" },
  { title: "Product & Technology Analytics", href: "/services/product-analytics" },
  { title: "Data Automation", href: "/services/data-automation" },
  { title: "Integration", href: "/services/integration" },
];

const termsSections = [
  {
    id: 'introduction',
    title: 'Introduction & Legal Agreement',
    icon: Gavel,
    content: `These Terms of Service ("Terms") form a legally binding agreement between you ("Client") and Perspico Data Ltd ("we", "us", "our"). By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.`
  },
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    content: [
      'By using our services, you agree to comply with these Terms.',
      'If you do not agree, you must not access or use our services.',
      'These Terms apply to all users, clients, visitors, and partners.',
      'Continued use of our services constitutes acceptance of updated Terms.',
      'You must be at least 18 years old and authorised to bind your organisation.'
    ]
  },
  {
    id: 'services',
    title: 'Description of Services',
    icon: BookOpen,
    content: `Perspico provides data consulting, analytics, business intelligence, data engineering, and related advisory services. Specific deliverables, timelines, and requirements will be defined in individual Statements of Work (SOW).`
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    icon: Shield,
    content: [
      'Provide accurate and complete information required for service delivery',
      'Ensure you have the legal right to share any data provided',
      'Maintain backups of all important data',
      'Cooperate with our team by providing timely access to systems and personnel',
      'Follow agreed security and data-handling procedures',
      'Respond promptly to communications and requests'
    ]
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms',
    icon: PoundSterling,
    content: [
      'Fees are defined in each SOW or service agreement',
      'Invoices are due within 30 days (Net 30) unless otherwise stated',
      'Milestone or monthly retainer billing may apply',
      'Late payments may incur interest at 1.5% per month',
      'Invoice disputes must be raised within 30 days of issuance'
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: FileText,
    content: [
      'Clients retain full ownership of their data',
      'Perspico retains ownership of methodologies, frameworks, and internal tools',
      'Custom solutions developed specifically for the client become client property after payment',
      'Anonymised insights may be used to improve our services',
      'Third‑party tools may be subject to their own licensing terms'
    ]
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    icon: Lock,
    content: [
      'Both parties agree to maintain strict confidentiality',
      'Confidential information includes data, business strategies, methods, and technical materials',
      'Disclosure is permitted only with written consent or legal requirement',
      'Confidentiality obligations survive termination',
      'We use industry‑standard security measures to protect all confidential information'
    ]
  },
  {
    id: 'warranties',
    title: 'Warranties & Disclaimers',
    icon: Scale,
    content: [
      'We warrant that our services will be performed with reasonable skill, care, and professionalism',
      'Except for express warranties, services are provided "as is"',
      'We do not warrant that services will be error‑free or uninterrupted',
      'We are not responsible for inaccuracies in client‑provided data'
    ]
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    icon: AlertCircle,
    content: [
      'Our total liability for any claim is limited to the total fees paid for the specific service',
      'We are not liable for indirect, incidental, or consequential damages',
      'These limitations apply to the maximum extent permitted by law'
    ]
  },
  {
    id: 'termination',
    title: 'Termination',
    icon: Clock,
    content: [
      'Either party may terminate an engagement with 30 days written notice',
      'Immediate termination may occur for material breach not cured within 15 days',
      'Upon termination, all outstanding fees become due',
      'Client data will be returned or securely deleted upon request',
      'Confidentiality and IP provisions continue after termination'
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Dispute Resolution',
    icon: Gavel,
    content: [
      'These Terms are governed by the laws of England and Wales',
      'Disputes will first be addressed through good‑faith negotiation',
      'If unresolved, parties may pursue mediation or arbitration by agreement',
      'Courts in England and Wales have exclusive jurisdiction',
      'Nothing prevents either party from seeking urgent injunctive relief'
    ]
  },
  {
    id: 'updates',
    title: 'Updates to Terms',
    icon: FileText,
    content: [
      'Perspico may update these Terms when necessary',
      'Changes will be published on our website with a revised "Last Updated" date',
      'Continued use of services constitutes acceptance of updated Terms'
    ]
  }
];

export default function TermsOfServicePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

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
                <Scale className="w-10 h-10 text-blue-600" />
              </div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Last Updated: November 2025
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Legal agreement governing your use of Perspico Data services. Please read these terms carefully before engaging with our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto space-x-1 py-2 scrollbar-hide">
              {termsSections.map((section) => (
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
                  {section.title.split('&')[0]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
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
                {/* Important Legal Notice */}
                <motion.div variants={itemVariants}>
                  <Card className="border-l-4 border-l-orange-500 bg-orange-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Important Legal Notice
                          </h3>
                          <p className="text-gray-600">
                            These Terms of Service constitute a legally binding agreement between you and Perspico Data Ltd. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Terms Sections */}
                {termsSections.map((section) => (
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

                    <Card>
                      <CardContent className="p-6">
                        {Array.isArray(section.content) ? (
                          <ul className="space-y-3">
                            {section.content.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 leading-relaxed">{section.content}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Contact for Questions */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Questions About These Terms?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        If you have any questions or concerns about our Terms of Service, please don't hesitate to contact our legal team.
                      </p>
                      <Button asChild>
                        <a href="mailto:info@perspicodata.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact Legal Team
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Key Points</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Legal binding agreement</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>30-day payment terms</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Client data ownership</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Strict confidentiality</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>30-day termination notice</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Legal Information</h3>
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Gavel className="w-4 h-4 mr-2" />
                          <span>Governing Law: England & Wales</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>Jurisdiction: English Courts</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Net 30 Payment Terms</span>
                        </div>
                        <div className="flex items-center">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          <span>1.5% Monthly Late Fee</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Related Documents</h3>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="/privacy-policy">
                            <Shield className="w-4 h-4 mr-2" />
                            Privacy Policy
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="#contact">
                            <Mail className="w-4 h-4 mr-2" />
                            Service Agreement
                          </a>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="#contact">
                            <FileText className="w-4 h-4 mr-2" />
                            Data Processing Addendum
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Contact Legal</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href="mailto:info@perspicodata.com" className="hover:text-blue-600">
                            info@perspicodata.com
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href="tel:+447825247759" className="hover:text-blue-600">
                            +44 7825247759
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>London, UK</span>
                        </div>
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
              <h4 className="font-heading mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="/#compliance" className="hover:text-white transition-colors">Compliance</a></li>
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
            <p>&copy; {new Date().getFullYear()} Perspico Data Ltd. All rights reserved. Registered in England and Wales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}