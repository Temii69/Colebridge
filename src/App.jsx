import React, { useRef, useState } from 'react';
import { Menu, X, ChevronDown, Building2, Users, Briefcase, Phone, Mail, MapPin } from 'lucide-react';
import cole from './assets/cole.png';
import pillar1 from './assets/pillar1.png';
import pillar2 from './assets/pillar2.png';
import pillar3 from './assets/pillar3.png';
import aremu from './assets/aremu.jpeg';
import aremu1 from './assets/aremu1.jpeg';
import aremu2 from './assets/aremu2.jpeg';
import aremu3 from './assets/aremu3.jpeg';
import aremu4 from './assets/aremu4.jpeg';

const ColebridgeWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef(null);
  

  React.useEffect(() => {
    setIsVisible(true);
  }, [currentPage]);

  const navigation = [
    { name: 'Home', id: 'home' },
    { 
      name: 'Services', 
      id: 'services',
      dropdown: [
        { name: 'Human Capital & Organizational Excellence', id: 'consultancy' },
        { name: 'Financail Strategy & Wealth Architecture', id: 'trainings' },
        { name: 'Strategic Advsiory & Enterprise Transformation', id: 'research' }
      ]
    },
    { name: 'About Us', id: 'about' },
    { name: 'Mentorship', id: 'mentorship'},
    { name: 'Contact', id: 'contact' }
    
  ];

  const services = [
    {
      title: "Human Capital & Organizational Excellence",
      description: "We strengthen people, leadership, and culture through targeted training, talent strategy, and productivity solutions.",
      icon:  <img className='w-14 h-14' src={pillar1} alt="" />
    },
    {
      title: "Financial Strategy & Wealth Architecture",
      description: "We build intelligent financial frameworks that preserve wealth, strengthen asset protection, and drive strategic, sustainable growth.",
      icon: <img className='w-14 h-14' src={pillar2} alt="" />
    },
    {
      title: "Strategic Advsiory & Enterprise Transformation",
      description: "We guide organizations through change and help them adapt for the future.",
      icon: <img className='w-14 h-14' src={pillar3} alt="" />
    }
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div>
            <div className="relative py-24 px-4 bg-cover bg-center animate-fadeIn from-blue-600 to-blue-700 bg-gradient-to-r" >
              <div className="absolute inset-0 bg-blue-950 bg-opacity-70 transition-all duration-700 hover:bg-opacity-60"></div>
              <div className="max-w-6xl mx-auto relative z-10 transform transition-all duration-700 hover:scale-105">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-slideInLeft">Welcome to Colebridge Advisory Advisory</h1>
                <p className="text-xl md:text-2xl mb-8 text-white animate-slideInRight">Empowering Growth Through Expert Consultancy, Training & Research</p>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="bg-white text-blue-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-bounce"
                  style={{ animationDuration: '2s', animationIterationCount: '3' }}
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer group">
                    <div className="mb-4 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-950 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">Why Choose Colebridge Advisory Advisory?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 cursor-pointer group">
                    <h3 className="text-xl font-bold mb-3 text-blue-950 group-hover:scale-110 inline-block transition-transform duration-300">Expert Team</h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Our professionals bring years of experience and deep industry knowledge to every project.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 cursor-pointer group">
                    <h3 className="text-xl font-bold mb-3 text-blue-950 group-hover:scale-110 inline-block transition-transform duration-300">Tailored Solutions</h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">We customize our services to meet your unique organizational needs and goals.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 cursor-pointer group">
                    <h3 className="text-xl font-bold mb-3 text-blue-950 group-hover:scale-110 inline-block transition-transform duration-300">Proven Results</h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Track record of delivering measurable outcomes and sustainable growth for our clients.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50 cursor-pointer group">
                    <h3 className="text-xl font-bold mb-3 text-blue-950 group-hover:scale-110 inline-block transition-transform duration-300">Comprehensive Approach</h3>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Integrated services spanning consultancy, training, and research for holistic solutions.</p>
                  </div>
                </div>
                 <div className="border-l-4 border-blue-950 pl-6 py-4 bg-blue-50 mt-6">
                <p className="text-lg text-gray-700 italic">
                  "...Converting Vision to Value! We turn strategic intentions into real, pratical, and measurable results."
                </p>
              </div>
              </div>
            </div>
          </div>
        );

      case 'consultancy':
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-blue-950">Human Capital & Organizational Excellence</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                At Colebridge Advisory, we help organizations unlock peak performance by strengthening people, leadership, and culture. Our solutions are designed to build capable teams, effective leaders, and productive workplaces that scale sustainably.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Corporate Training & Upskilling</h3>
                  <p className="text-gray-700">Equip employees with relevant skills to meet evolving business and industry demands.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Leadership Development</h3>
                  <p className="text-gray-700">Develop confident, high-impact leaders who drive vision, accountability, and results.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Talent & Workforce Strategy</h3>
                  <p className="text-gray-700">Align talent planning, workforce structure, and succession strategies with business goals.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Productivity & Performance Improvement</h3>
                  <p className="text-gray-700">Optimize people, systems, and workflows to enhance efficiency and measurable outcomes.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="mb-6">Let's discuss how our consultancy services can help you achieve your goals.</p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-white text-blue-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        );

      case 'trainings':
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-blue-950">Financial Strategy & Wealth Architecture</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                We design robust financial structures that safeguard assets, optimize capital, and support long-term, sustainable growth. Our approach blends strategic insight with disciplined financial planning.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="border-2 border-blue-200 p-6 rounded-lg hover:border-blue-950 transition">
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Capital Allocation Strategy</h3>
                  <p className="text-gray-700">Guide investment and funding decisions to maximize returns and manage risk effectively.</p>
                </div>
                <div className="border-2 border-blue-200 p-6 rounded-lg hover:border-blue-950 transition">
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Financial Modeling & Forecasting</h3>
                  <p className="text-gray-700">Build data-driven models to support strategic planning, scenario analysis, and decision-making.</p>
                </div>
                <div className="border-2 border-blue-200 p-6 rounded-lg hover:border-blue-950 transition">
                  <h3 className="text-xl font-bold mb-3 text-blue-950">Asset Protection Frameworks</h3>
                  <p className="text-gray-700">Develop structures that preserve wealth, mitigate financial risk, and ensure long-term stability.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Financial Strategy Approach</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-950 mr-2">✓</span>
                    <span>Interactive and engaging learning methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-950 mr-2">✓</span>
                    <span>Practical, real-world applications and case studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-950 mr-2">✓</span>
                    <span>Experienced trainers with industry expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-950 mr-2">✓</span>
                    <span>Post-training support and resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-blue-950">Strategic Advisory & Enterprise Transformation</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                We partner with organizations to navigate change, improve resilience, and build future-ready enterprises. Our advisory services focus on transformation that delivers measurable and lasting impact.
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6">Our Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-blue-950">Change Management</h4>
                    <p className="text-gray-700">Support organizations through transitions with structured approaches that drive adoption and alignment.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-blue-950">Operational Efficiency</h4>
                    <p className="text-gray-700">Identify inefficiencies and optimize operations to improve performance, cost control, and scalability.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-blue-950">Business Model Innovation</h4>
                    <p className="text-gray-700">Redesign and evolve business models to unlock new value, revenue streams, and competitive advantage.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-blue-950">Feasibility Studies</h4>
                    <p className="text-gray-700">Comprehensive analysis of project viability and potential outcomes.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                  <div className="text-4xl font-bold text-blue-950 mb-2">Data-Driven</div>
                  <p className="text-gray-600">Rigorous methodologies ensuring reliable, actionable insights</p>
                </div>
                <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                  <div className="text-4xl font-bold text-blue-950 mb-2">Objective</div>
                  <p className="text-gray-600">Unbiased analysis providing clear, honest assessments</p>
                </div>
                <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                  <div className="text-4xl font-bold text-blue-950 mb-2">Actionable</div>
                  <p className="text-gray-600">Practical recommendations you can implement immediately</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-950 pl-6 py-4 bg-blue-50">
                <p className="text-lg text-gray-700 italic">
                  "Our research services transform complex data into clear insights that drive strategic decision-making and organizational success."
                </p>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-blue-950">About Colebridge Advisory</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Colebridge Advisory is a strategy and perfomance firm that helps organizations close the gap between ideas and results. We align people, strategy, and financial systems to improve execution, strengthen capacity, and create lasting value.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We diagnose problems quickly, design practical solutions, and support implemenation with discpline, three pillars: Human Capital & Organizational Execllence, Financial Strategy & Wealth Architcture, and Strategic Advisory & Enterprise Transformation.
              </p>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-950">Our Mission</h2>
                  <p className="text-gray-700">
                    Architecting organizational performance by aligning human potential with corporate strategy.
                    <ul className='list-disc'>
                      <li>
                        We design and implement systems, skills, and structures that turn strategy into measurable outcomes.
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-950">Our Vision</h2>
                  <p className="text-gray-700">
                    To be the keystone where clarity creates lasting value.
                    <ul className='list-disc'>
                      <li>
                        We position ourselves as the stabilizing element that helps leaders make clear decisions and achieve results that endure.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                <h1 className="text-2xl font-bold mb-6">The C.O.L.E. Standard</h1>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">CLARITY</h3>
                    <p>Strategic insight - Replace confusion with precison and actionable direction.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">OWNERSHIP</h3>
                    <p>Accountabilty - Take responsibility and empower clients to own thier outcomes.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">LEGACY</h3>
                    <p>Sustainability - Build systems that last and create long-term value.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">EXCELLENCE</h3>
                    <p>Gold Standard Delivery - Deliver work that meets global standards and drives measurable impact.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-blue-950 font-bold mr-3">→</span>
                    <span>Multidisciplinary team of experts across various industries and domains</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-950 font-bold mr-3">→</span>
                    <span>Customized solutions tailored to your unique challenges and objectives</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-950 font-bold mr-3">→</span>
                    <span>Proven track record of successful projects and satisfied clients</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-950 font-bold mr-3">→</span>
                    <span>Commitment to sustainable and ethical business practices</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mentorship':
        return (
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-blue-950">N-GAGE & X-CHANGE WITH AREMU</h1>
             <div className="mb-8 md:mb-16 bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-4 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-950 px-4 py-1 rounded-full text-sm font-semibold mb-2">Founder/Principal</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-800">Kehinde Aremu-Cole FISEN FIHSSD</h2>
                
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed font-medium">
                    Development Specialist | Public Sector Leader | Youth & Human Capital Strategist | Investment & Policy Advisor | Financial Literacy Advocate
                  </p>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Kehinde Aremu has over three decades of experience in youth development, skills ecosystems, human capital strategy, and public sector transformation. He works with governments, development partners, and organizations to design and implement scalable, evidence-based solutions that strengthen institutions and expand economic opportunity.
                  </p>
                  <p className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    He is the Founder of Memopin Limited and Principal of Colebridge Advisory, where he advises on workforce development, youth employment strategy, public sector reform, and partnership-led programme delivery. He also serves on multiple advisory boards, supporting governance, strategy, and institutional effectiveness across public, private, and social impact organizations.
                  </p>
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Kehinde previously served as Director of Skills Acquisition and Entrepreneurship Development (SAED) at the National Youth Service Corps (NYSC), Nigeria's largest youth-focused public institution. In this role, and across earlier executive assignments at national headquarters, area offices, and state secretariats, he led policy development, programme execution, and organizational reform initiatives with nationwide impact.
                  </p>
                  <p className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    His experience spans policy formulation, organizational design, human resource strategy, planning and research, ICT-enabled systems, and multi-stakeholder coordination. He was a member of several high-level reform and governance committees, contributing to legislative reviews, institutional re-engineering, inter-agency collaboration frameworks, and programme modernization.
                  </p>
                  <p className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    Internationally, Kehinde represented Nigeria at the United Nations Youth Assembly and completed specialized training in Chinese Renaissance and Vocational Education for Developing Nations at Ningbo Polytechnic, People's Republic of China, under a Chinese Government-sponsored programme. He is an alumnus of the National Institute for Policy and Strategic Studies (NIPSS) and took a training on Learning Management System (LMS) at Entreprise Development Centre (Lagos Business School).
                  </p>
                  <p className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    Kehinde is a recipient of the Integrity Icon Award, recognizing ethical leadership and excellence in public service. He is a Fellow of the Institute of Strategic Entrepreneurs of Nigeria, a Fellow of the Institute of Humanitarian Studies and Social Development, and a Certified International Labour Organization(ILO-SIDYB) Trainer.
                  </p>
                  <p className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    He also convenes N-GAGE & X-CHANGE with Aremu(NXA), a structured mentorship platform focused on leadership development, performance, and sustainable work–life integration.
                  </p>
                  <p className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    Kehinde is particularly valued for his ability to build and sustain high-impact partnerships across government, the private sector, development agencies, and communities—enabling alignment, execution discipline, and long-term outcomes.
                  </p>
                  <div className='text-sm md:text-base text-gray-700 mb-4 leading-relaxed'>
                    <p className="font-semibold mb-2">Mentorship Focus Areas:</p>
                    <ul className='list-disc pl-5 space-y-1 mb-4'>
                      <li>Youth employment and skills ecosystem design</li>
                      <li>Human capital and workforce development</li>
                      <li>Financial literacy and Investment</li>
                      <li>Personal productivity and work life balance</li>
                      <li>Partnership strategy and stakeholder alignment</li>
                    </ul>
                    <p>
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/kehinde-aremu-cole-1a9029163/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin fa-2x text-blue-950"></i>
                        </a>
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Expertise:</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm text-gray-700">Strategic Planning</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm text-gray-700">Leadership</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm text-gray-700">Change Management</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 p-4 md:p-6 lg:p-8">
                  <img 
                    src={aremu}
                    alt="Kehinde Aremu-Cole"
                    className="w-full h-[70vh] md:h-96 lg:h-[350px] rounded-md mb-4 object-cover"
                  />
                  <img 
                    src={aremu1}
                    alt="Kehinde Aremu-Cole"
                    className="w-full h-[70vh] md:h-96 lg:h-[350px] rounded-md mb-4 object-cover"
                  />
                  <img 
                    src={aremu2}
                    alt="Kehinde Aremu-Cole"
                    className="w-full h-[70vh] md:h-96 lg:h-[350px] rounded-md mb-4 object-cover"
                  />
                  <img 
                    src={aremu3}
                    alt="Kehinde Aremu-Cole"
                    className="w-full h-[70vh] md:h-96 lg:h-[350px] rounded-md mb-4 object-cover"
                  />
                  <img 
                    src={aremu4}
                    alt="Kehinde Aremu-Cole"
                    className="w-full h-[70vh] md:h-96 lg:h-[350px] rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-blue-950">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-12">
              Get in touch with us to discuss how Colebridge Advisory can help your organization achieve its goals. We look forward to hearing from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start mb-4">
                  <Mail className="w-6 h-6 text-blue-950 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">info@colebridge.ng</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start mb-4">
                  <Phone className="w-6 h-6 text-blue-950 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">+234 803 311 5470</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-blue-950 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office</h3>
                    <p className="text-gray-700">Abuja, Lagos, Ilorin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-semibold">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                  }}
                  className="bg-white text-blue-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-in; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out; }
        .animate-slideInRight { animation: slideInRight 1s ease-out; }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer transform transition-all duration-300 hover:scale-110"
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
            >
              {/* <Building2 className="w-8 h-8 text-blue-950 mr-2 transform transition-transform duration-500 hover:rotate-12" /> */}
              <img className='w-10 h-10 mr-2 transform transition-transform duration-500 hover:rotate-12' src={cole} alt="colebridge logo" />
              <span className="text-2xl font-bold text-gray-800 hover:text-blue-950 transition-colors duration-300">COLEBRIDGE ADVISORY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => {
                    // cancel any pending close
                    if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                    }

                    setServicesDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                    setServicesDropdownOpen(false);
                    }, 500); 
                  }}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-950 font-medium transition-all duration-300 transform hover:scale-105">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 ml-1 duration-1000 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 animate-slideDown z-50">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentPage(subItem.id);
                              setServicesDropdownOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-950 transition-all duration-300 hover:pl-6 cursor-pointer"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`text-gray-700 hover:text-blue-950 font-medium transition-all duration-300 transform hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-950 after:transition-all after:duration-300 ${
                      currentPage === item.id ? 'text-blue-950 after:w-full' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div key={item.id}>
                    <div className="px-4 py-2 text-gray-700 font-medium">{item.name}</div>
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          setCurrentPage(subItem.id);
                          setMobileMenuOpen(false);
                        }}
                        className="block w-full text-left px-8 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-950 transition"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-950 transition ${
                      currentPage === item.id ? 'text-blue-950 bg-blue-50' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img className="w-6 h-6 mr-2" src={cole} alt="" />
              <span className="text-xl font-bold">COLEBRIDGE ADVISORY</span>
            </div>
            <p className="text-gray-300">
              Empowering organizations through expert consultancy, training, and research services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')} className="block text-gray-300 hover:text-white transition">Home</button>
              <button onClick={() => setCurrentPage('about')} className="block text-gray-300 hover:text-white transition">About Us</button>
              <button onClick={() => setCurrentPage('contact')} className="block text-gray-300 hover:text-white transition">Contact</button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Abuja, Lagos, Ilorin</p>
              <p>info@colebridge.ng</p>
              <p>+234 803 311 5470</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2026 Colebridge Advisory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ColebridgeWebsite;