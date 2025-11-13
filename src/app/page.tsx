'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Database, 
  Cloud, 
  Cpu,
  LineChart,
  PieChart,
  Activity,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${formData.company} — Consultation Request for Data Solutions`;
    const body = formData.message;
    const mailtoUrl = `mailto:alexis@perspicodata.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)'])
  const headerTextOpacity = useTransform(scrollY, [0, 50], [1, 1])

  const services = [
    {
      title: "Business Intelligence & Dashboards",
      description: "Data visualization, KPI design, and interactive reports",
      icon: BarChart3,
      href: "/services/business-intelligence",
      color: "text-blue-600"
    },
    {
      title: "Supply Chain & Operations Analytics",
      description: "Predictive modeling, optimization, and insights",
      icon: TrendingUp,
      href: "/services/supply-chain",
      color: "text-green-600"
    },
    {
      title: "Sustainability & Carbon Footprint Analytics",
      description: "ESG metrics, emission reduction analysis",
      icon: Globe,
      href: "/services/sustainability",
      color: "text-emerald-600"
    },
    {
      title: "Product & Technology Analytics",
      description: "ROI metrics, adoption patterns, and performance tracking",
      icon: Cpu,
      href: "/services/product-analytics",
      color: "text-purple-600"
    },
    {
      title: "Data Automation",
      description: "ETL pipelines, process automation, real-time monitoring",
      icon: Zap,
      href: "/services/data-automation",
      color: "text-orange-600"
    },
    {
      title: "Integration",
      description: "API connections, system unification, data synchronization",
      icon: Database,
      href: "/services/integration",
      color: "text-indigo-600"
    }
  ]

  const caseStudies = [
    {
      title: "Reduced reporting cycle time",
      value: "60%",
      description: "Automated data pipelines and real-time dashboards",
      icon: Activity
    },
    {
      title: "Increased forecast accuracy",
      value: "35%",
      description: "Advanced predictive modeling and ML algorithms",
      icon: LineChart
    },
    {
      title: "Enhanced sustainability tracking",
      value: "4 sites",
      description: "Global ESG monitoring and carbon footprint analysis",
      icon: Globe
    }
  ]

  const infrastructure = [
    { name: "React Frontend", icon: Cpu, description: "Modern, responsive UI" },
    { name: "FastAPI Backend", icon: Zap, description: "High-performance API layer" },
    { name: "PostgreSQL Database", icon: Database, description: "Secure, scalable data storage" },
    { name: "AWS Infrastructure", icon: Cloud, description: "Enterprise cloud platform" },
    { name: "VPC Networking", icon: Shield, description: "Isolated, secure environment" },
    { name: "RDS Database", icon: Database, description: "Managed database service" },
    { name: "ECS/EKS Containers", icon: Cpu, description: "Scalable container orchestration" },
    { name: "CloudFront CDN", icon: Globe, description: "Global content delivery" },
    { name: "S3 Storage", icon: Database, description: "Object storage solution" }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <motion.header 
        style={{ opacity: headerOpacity, backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                    src="/perspico_data_logo.png"
                    alt="Perspico Data Logo"
                    className="w-full h-full object-contain"
                  />
              </div>
              <span className="font-bold text-xl">Perspico Data</span>
            </div>
            
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
                    // The pt-2 on the parent div and removal of mt-2 here prevents a gap that closes the menu on hover
                    className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    <ul className="py-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <a href={service.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">{service.title}</a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
              <a href="#infrastructure" className="text-gray-700 hover:text-blue-600 transition-colors">Infrastructure</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700"><a href="#contact">Book Consultation</a></Button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Results</a>
              <a href="#infrastructure" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Infrastructure</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0061F2" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,100 Q250,50 500,100 T1000,100 L1000,400 L0,400 Z"
              fill="url(#gradient1)"
              animate={{
                d: [
                  "M0,100 Q250,50 500,100 T1000,100 L1000,400 L0,400 Z",
                  "M0,150 Q250,100 500,150 T1000,150 L1000,400 L0,400 Z",
                  "M0,100 Q250,50 500,100 T1000,100 L1000,400 L0,400 Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,200 Q300,150 600,200 T1200,200 L1200,500 L0,500 Z"
              fill="url(#gradient1)"
              animate={{
                d: [
                  "M0,200 Q300,150 600,200 T1200,200 L1200,500 L0,500 Z",
                  "M0,250 Q300,200 600,250 T1200,250 L1200,500 L0,500 Z",
                  "M0,200 Q300,150 600,200 T1200,200 L1200,500 L0,500 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Enterprise Data Analytics Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Data into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  {" "}Strategic Advantage
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
                We help organizations harness data for smarter decisions and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#services">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </Link>
                <a href="#contact">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                  Book a Consultation
                </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-dashboard.png" 
                  alt="Data Analytics Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With deep experience across analytics strategy, implementation, and governance, 
              we help enterprises turn raw data into actionable intelligence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-team.png" 
                  alt="Professional Analytics Team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Decades of Collective Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings together decades of combined experience in data analytics, 
                strategic consulting, and enterprise transformation. We've helped hundreds of 
                organizations across various industries unlock the full potential of their data assets.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From startups to Fortune 500 companies, our approach combines deep technical 
                expertise with business acumen to deliver solutions that drive measurable results 
                and sustainable competitive advantage.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">500+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">15+ Industries Served</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">50+ Expert Consultants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">98% Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Analytics",
                description: "Data-driven strategy development aligned with business objectives",
                icon: TrendingUp
              },
              {
                title: "Technical Excellence",
                description: "Cutting-edge technology stack and best practices",
                icon: Cpu
              },
              {
                title: "Enterprise Focus",
                description: "Scalable solutions for complex organizational needs",
                icon: Shield
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offering Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Analytics Consultancy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We assess data maturity, define measurable goals, and build scalable analytics systems 
              tailored to each client's business model.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Service Architecture Visualization */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Service Architecture</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics solutions tailored to your industry needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <service.icon className={`w-8 h-8 ${service.color} group-hover:text-blue-600 transition-colors`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.href}>
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-50">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements that drive business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{study.value}</div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Deployment & Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade architecture built for scalability and security
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/infrastructure-datacenter.png" 
                  alt="Enterprise Data Center Infrastructure"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Modern Cloud Architecture
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our infrastructure leverages cutting-edge cloud technologies to deliver 
                scalable, secure, and high-performance analytics solutions. Built on AWS 
                with automated CI/CD pipelines and comprehensive monitoring.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every component is designed for enterprise-grade reliability, from 
                load-balanced web servers to encrypted databases and real-time backup systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Auto-scaling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Multi-region</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">24/7 Monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {infrastructure.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle className="w-4 h-4 mr-1" />
                CI/CD Integrated
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 ml-2">
                <Shield className="w-4 h-4 mr-1" />
                AWS IAM Secured
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 border-purple-200 ml-2">
                <Cloud className="w-4 h-4 mr-1" />
                Auto-scaling Enabled
              </Badge>
            </div>
          </div>
        </div>
      </section>

<section id="security" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              UK Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade data protection with UK-specific compliance standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/security-uk.png" 
                  alt="UK Data Security Compliance"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                UK Data Protection Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our security framework is specifically designed to meet and exceed UK data protection 
                requirements, ensuring full compliance with local regulations while maintaining global 
                security standards.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From GDPR to UK-specific data protection laws, our comprehensive security 
                protocols ensure your data remains protected, private, and compliant with all 
                relevant legislation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">UK GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">UK Data Protection Act</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Cyber Essentials Plus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">ISO 27001 Certified</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "UK GDPR Compliant", icon: Shield, color: "text-blue-600" },
              { name: "UK Data Protection Act", icon: Lock, color: "text-red-600" },
              { name: "Cyber Essentials Plus", icon: Cloud, color: "text-purple-600" },
              { name: "ISO 27001 Certified", icon: CheckCircle, color: "text-green-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className={`w-10 h-10 ${item.color}`} />
                </div>
                <h3 className="font-semibold">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact & Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your data into strategic advantage?
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src="/images/contact-consultation.png" 
                  alt="Professional Data Analytics Consultation"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+44 7825247759</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>alexis@perspicodata.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>St Albans, London</span>
                </div>
              </div>

              {/* <div className="flex space-x-4 mt-8">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors">
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer transition-colors">
                  <Github className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                                            <input
                                              type="text"
                                              name="name"
                                              value={formData.name}
                                              onChange={handleInputChange}
                                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                              placeholder="John Doe"
                                              required
                                            />                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Acme Corporation"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                      placeholder="Tell us about your data analytics needs..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                  <img
                    src="/perspico_data_logo.png"
                    alt="Perspico Data Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Perspico Data</span>
              </div>
              <p className="text-gray-400">
                Transforming data into strategic advantage for enterprise organizations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/business-intelligence" className="hover:text-white transition-colors">Business Intelligence</a></li>
                <li><a href="/services/supply-chain" className="hover:text-white transition-colors">Supply Chain Analytics</a></li>
                <li><a href="/services/sustainability" className="hover:text-white transition-colors">Sustainability Analytics</a></li>
                <li><a href="/services/data-automation" className="hover:text-white transition-colors">Data Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">UK Office</h4>
              <ul className="space-y-2 text-gray-400">
                <li>St Albans, London</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Perspico Data. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}