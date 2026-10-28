import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Briefcase,
  ChevronRight,
  Globe,
  LayoutDashboard,
  Mail,
  Menu,
  MessageSquareText,
  Moon,
  Network,
  RefreshCw,
  Search,
  ShoppingBag,
  Sparkles,
  SunMedium,
  X,
  type LucideIcon,
} from 'lucide-react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import {
  adminMetrics,
  blogPosts,
  demoSites,
  faqs,
  navItems,
  processSteps,
  projects,
  recentInquiries,
  reasons,
  services,
  siteSettings,
  type ThemeMode,
} from './data/siteData'
import './App.css'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Network,
  ShoppingBag,
  RefreshCw,
  Bot,
  Briefcase,
  MessageSquareText,
  Sparkles,
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>('system')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      const nextTheme = theme === 'system' ? (mediaQuery.matches ? 'dark' : 'light') : theme
      document.documentElement.dataset.theme = nextTheme
      document.documentElement.style.colorScheme = nextTheme
    }

    applyTheme()
    mediaQuery.addEventListener('change', applyTheme)

    return () => mediaQuery.removeEventListener('change', applyTheme)
  }, [theme])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell">
        <Header
          theme={theme}
          onThemeChange={setTheme}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
            <Route path="/demos" element={<DemosPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/book-call" element={<BookCallPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

type HeaderProps = {
  theme: ThemeMode
  onThemeChange: (next: ThemeMode) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

function Header({ theme, onThemeChange, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Go to home page">
          <div className="brand-mark">D</div>
          <div>
            <strong>{siteSettings.brandName || 'DevDukaan'}</strong>
            <span>{siteSettings.location}</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="theme-switcher" aria-label="Theme switcher">
            <button
              type="button"
              className={theme === 'light' ? 'theme-btn active' : 'theme-btn'}
              onClick={() => onThemeChange('light')}
              aria-label="Switch to light mode"
            >
              <SunMedium size={16} />
            </button>
            <button
              type="button"
              className={theme === 'dark' ? 'theme-btn active' : 'theme-btn'}
              onClick={() => onThemeChange('dark')}
              aria-label="Switch to dark mode"
            >
              <Moon size={16} />
            </button>
            <button
              type="button"
              className={theme === 'system' ? 'theme-btn active' : 'theme-btn'}
              onClick={() => onThemeChange('system')}
              aria-label="Use system theme"
            >
              <Sparkles size={16} />
            </button>
          </div>

          <Link to="/contact" className="button-primary small hidden-mobile">
            Start a Project
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="button-primary full-width" onClick={() => setMobileMenuOpen(false)}>
            Start Your Project
          </Link>
        </div>
      )}
    </header>
  )
}

function HomePage() {
  const featured = useMemo(() => projects.filter((project) => project.featured && project.published), [])

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-copy"
          >
            <span className="eyebrow">Digital agency for growing businesses</span>
            <h1>Digital Solutions Built Around Your Business</h1>
            <p>{siteSettings.heroDescription}</p>
            <div className="cta-row">
              <Link to="/contact" className="button-primary">
                Let&apos;s Discuss Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="button-secondary">
                Explore Our Work
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <strong>Business-first</strong>
                <span>brand websites</span>
              </div>
              <div>
                <strong>Growth-focused</strong>
                <span>digital solutions</span>
              </div>
              <div>
                <strong>Clear action</strong>
                <span>enquiry-driven results</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-visual"
          >
            <div className="mock-browser">
              <div className="browser-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-content">
                <div className="browser-left-panel">
                  <div className="mini-panel"></div>
                  <div className="mini-panel short"></div>
                  <div className="mini-panel"></div>
                </div>
                <div className="browser-main-panel">
                  <div className="chart-area"></div>
                  <div className="stat-row">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="stat-row second-row">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section muted">
        <div className="container trust-strip">
          <div className="section-label">Business solutions</div>
          <div className="tech-chips">
            {['Business websites', 'Online stores', 'Custom web solutions', 'Growth support'].map((label) => (
              <span key={label} className="chip">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Business-first solutions for your next stage of growth"
            description="We help businesses build a stronger online presence with clear messaging, better customer journeys, and practical digital support."
          />
          <div className="card-grid service-grid">
            {services.filter((service) => service.enabled).map((service) => {
              const Icon = iconMap[service.icon] || Globe
              return (
                <article key={service.id} className="card service-card">
                  <div className="service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <div className="service-meta">
                    <span>{service.price}</span>
                  </div>
                  <div className="card-actions">
                    <Link to={`/services/${service.slug}`} className="button-ghost">
                      Learn More
                    </Link>
                    <Link to="/contact" className="button-primary small">
                      Discuss Your Project
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionHeader
            eyebrow="Featured work"
            title="Our Work | Real Projects. Real Business Solutions."
            description="A look at recent client work across jewellery, education, healthcare, and travel businesses."
          />
          <div className="card-grid project-grid">
            {featured.map((project) => (
              <article key={project.id} className="project-card">
                <img src={project.thumbnail} alt={project.name} />
                <div className="project-body">
                  <span className="project-category">{project.industry}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="project-links">
                    <Link to={`/portfolio/${project.slug}`} className="button-ghost">
                      View Details
                    </Link>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button-secondary small">
                        View Live Website
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Process"
            title="A clear path from idea to launch"
            description="Every phase is designed to reduce uncertainty, keep communication direct, and deliver a product that supports growth."
          />
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionHeader
            eyebrow="Why work with me"
            title="Practical, direct, and built for business outcomes"
            description="You get a collaborative build process, transparent communication, and digital solutions designed to help the business grow."
          />
          <div className="card-grid reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="card reason-card">
                <div className="reason-icon">
                  <Sparkles size={18} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-preview">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions clients ask before starting"
            description="These answers are intended to give clarity before the project discussion begins."
          />
          <div className="faq-list simple-faq">
            {faqs.slice(0, 4).map((faq) => (
              <div key={faq.question} className="faq-item">
                <span className="faq-question">{faq.question}</span>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-box-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2>Have a Project in Mind?</h2>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="button-primary">
              Let&apos;s Discuss Your Project
            </Link>
            <Link to="/contact" className="button-secondary">
              Get a Custom Quote
            </Link>
            <a href={`https://wa.me/${siteSettings.whatsappNumber.replace(/\D/g, '')}`} className="button-ghost">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServicesPage() {
  return (
    <main className="page-shell">
      <div className="container narrow">
        <SectionHeader
          eyebrow="Services"
          title="Marketing-led services for websites, software, and growth"
          description="Every service is designed to support business clarity, technical reliability, and steady lead generation."
        />
      </div>
      <div className="container card-grid service-grid">
        {services.filter((service) => service.enabled).map((service) => {
          const Icon = iconMap[service.icon] || Globe
          return (
            <article key={service.id} className="card service-card">
              <div className="service-icon">
                <Icon size={20} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <div className="service-meta">
                <span>{service.price}</span>
                <div className="tag-row">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-actions">
                <Link to={`/services/${service.slug}`} className="button-ghost">
                  Learn More
                </Link>
                <Link to="/contact" className="button-primary small">
                  Request This Service
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}

function ServiceDetailPage() {
  const slug = useLocation().pathname.split('/').pop() || ''
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <NotFoundPage />
  }

  const Icon = iconMap[service.icon] || Globe

  return (
    <main className="page-shell">
      <div className="container detail-layout">
        <div className="detail-copy">
          <span className="eyebrow">Service</span>
          <h1>{service.name}</h1>
          <p className="detail-summary">{service.summary}</p>
          <p>{service.description}</p>
          <div className="card-actions detail-actions">
            <Link to="/contact" className="button-primary">
              Discuss Your Project
            </Link>
            <Link to="/services" className="button-secondary">
              View All Services
            </Link>
          </div>
        </div>
        <aside className="detail-panel">
          <div className="service-icon large">
            <Icon size={28} />
          </div>
          <div className="detail-price">{service.price}</div>
          <ul>
            {service.features.map((feature) => (
              <li key={feature}>
                <ChevronRight size={16} />
                {feature}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  )
}

function PortfolioPage() {
  const [query, setQuery] = useState('')
  const [industry, setIndustry] = useState('All')

  const industries = ['All', ...new Set(projects.map((project) => project.industry))]
  const filtered = projects.filter((project) => {
    const matchesQuery = project.name.toLowerCase().includes(query.toLowerCase())
    const matchesIndustry = industry === 'All' || project.industry === industry
    return matchesQuery && matchesIndustry && project.published
  })

  return (
    <main className="page-shell">
      <div className="container narrow">
        <SectionHeader
          eyebrow="Portfolio"
          title="Our Work | Real Projects. Real Business Solutions."
          description="Explore recent client work across jewellery, education, healthcare, and travel businesses."
        />
      </div>
      <div className="container filter-bar">
        <label className="search-box" aria-label="Search projects">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
        </label>
        <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
          {industries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="container card-grid project-grid">
        {filtered.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.thumbnail} alt={project.name} />
            <div className="project-body">
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="project-links">
                <Link to={`/portfolio/${project.slug}`} className="button-ghost">
                  View Details
                </Link>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button-secondary small">
                    View Live Website
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

function ProjectDetailPage() {
  const slug = useLocation().pathname.split('/').pop() || ''
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <main className="page-shell">
      <div className="container project-layout">
        <div className="project-hero-image">
          <img src={project.thumbnail} alt={project.name} />
        </div>
        <div className="project-copy">
          <span className="eyebrow">{project.industry}</span>
          <h1>{project.name}</h1>
          <p className="detail-summary">{project.summary}</p>
          <div className="project-inline">
            <span>{project.category}</span>
            <span>{project.clientName}</span>
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live Demo</a>}
          </div>
          <div className="tag-row large-gap">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
          <p>{project.description}</p>
          <div className="card-actions detail-actions">
            <Link to="/contact" className="button-primary">
              Request a Similar Project
            </Link>
            <Link to="/portfolio" className="button-secondary">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>

      <div className="container gallery-grid">
        {project.gallery.map((image, index) => (
          <img key={`${project.id}-${index}`} src={image} alt={`${project.name} screenshot ${index + 1}`} />
        ))}
      </div>

      <div className="container detail-panels">
        <div className="detail-card">
          <h3>Challenge</h3>
          <p>{project.challenge}</p>
        </div>
        <div className="detail-card">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>
        <div className="detail-card">
          <h3>Key features</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

function DemosPage() {
  return (
    <main className="page-shell">
      <div className="container narrow">
        <SectionHeader
          eyebrow="Website demos"
          title="Concept showcase for brands, services, and product-led businesses"
          description="These example concepts are clearly labeled and are intended as demonstration ideas, not completed client projects."
        />
      </div>
      <div className="container card-grid demo-grid">
        {demoSites.map((demo) => (
          <article key={demo.id} className="demo-card card">
            <img src={demo.image} alt={demo.name} />
            <div className="demo-body">
              <span className="project-category">{demo.industry}</span>
              <h3>{demo.name}</h3>
              <p>{demo.summary}</p>
              <div className="demo-meta">
                <span>{demo.style}</span>
                <span>{demo.pageCount}</span>
              </div>
              <div className="card-actions">
                <a href={demo.demoUrl} target="_blank" rel="noreferrer" className="button-primary small">
                  View Demo
                </a>
                <Link to="/contact" className="button-ghost">
                  Request a Similar Website
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="page-shell">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">About</span>
          <h1>Independent digital product builder for growing businesses</h1>
          <p>
            I work with founders, service businesses, and teams that want a sharper online presence, better client experiences,
            and a more reliable digital foundation.
          </p>
          <p>
            My work blends practical business thinking with modern front-end and back-end development, so the result is not just
            good-looking but useful, clear, and measurable.
          </p>
        </div>
        <div className="profile-card card">
          <div className="profile-badge">C</div>
          <h3>{siteSettings.owner}</h3>
          <p>Freelance web developer and software consultant</p>
          <ul>
            <li>Jaipur, Rajasthan, India</li>
            <li>Custom websites and software</li>
            <li>Available for select new projects</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

function ResourcesPage() {
  return (
    <main className="page-shell">
      <div className="container narrow">
        <SectionHeader
          eyebrow="Resources"
          title="Useful reading for founders and growing businesses"
          description="Content ideas, product guidance, and practical decision points for digital growth."
        />
      </div>
      <div className="container card-grid resource-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="card resource-card">
            <span className="project-category">Article</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to="/contact" className="button-ghost">
              Discuss a Similar Need
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      fullName: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phoneNumber: String(formData.get('phone') || '').trim(),
      companyName: String(formData.get('companyName') || '').trim() || undefined,
      projectType: String(formData.get('projectType') || 'Website').trim(),
      projectDescription: String(formData.get('message') || '').trim(),
      preferredContactMethod: String(formData.get('contactMethod') || 'Email').trim(),
      estimatedBudget: String(formData.get('budget') || '').trim() || undefined,
      sourcePage: '/contact',
    }

    try {
      const response = await fetch('http://localhost:5211/api/public/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Inquiry submission failed')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Could not save inquiry:', error)
      setSubmitted(true)
    }
  }

  return (
    <main className="page-shell">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h1>Tell me about your project</h1>
          <p>
            Share your goals and timeline so we can decide if the fit is right and move forward with a clear path.
          </p>
          <div className="contact-list">
            <div>
              <Mail size={18} />
              <span>{siteSettings.businessEmail || 'hello@example.com'}</span>
            </div>
            <div>
              <MessageSquareText size={18} />
              <span>{siteSettings.whatsappNumber || '+91 00000 00000'}</span>
            </div>
          </div>
        </div>

        <div className="card form-card">
          {submitted ? (
            <div className="success-state">
              <h3>Inquiry saved successfully</h3>
              <p>Your project request has been received and a follow-up can be scheduled.</p>
              <Link to="/" className="button-primary">
                Back to home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form">
              <div className="field-row two-col">
                <label>
                  Full name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email address
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <div className="field-row two-col">
                <label>
                  Business name (optional)
                  <input type="text" name="companyName" placeholder="Your business name" />
                </label>
                <label>
                  Contact number
                  <input type="tel" name="phone" placeholder="Your phone number" />
                </label>
              </div>

              <div className="field-row two-col">
                <label>
                  Required service
                  <select name="projectType" defaultValue="Website">
                    <option>Website</option>
                    <option>Business website</option>
                    <option>E-commerce</option>
                    <option>Custom web application</option>
                    <option>Website redesign</option>
                    <option>Business automation</option>
                  </select>
                </label>
                <label>
                  Estimated budget (optional)
                  <input type="text" name="budget" placeholder="Share your budget range if helpful" />
                </label>
              </div>

              <label>
                Project description
                <textarea name="message" rows={5} placeholder="Tell me about your goals, audience, and timeline" required />
              </label>

              <label>
                Preferred contact method
                <select name="contactMethod" defaultValue="Email">
                  <option>Email</option>
                  <option>WhatsApp</option>
                  <option>Phone call</option>
                </select>
              </label>

              <button type="submit" className="button-primary submit-button">
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}

function FaqPage() {
  return (
    <main className="page-shell">
      <div className="container narrow">
        <SectionHeader
          eyebrow="Questions"
          title="Frequently asked questions"
          description="A simple overview of the way I approach custom website and software projects."
        />
      </div>
      <div className="container faq-list">
        {faqs.map((faq) => (
          <div key={faq.question} className="faq-item card">
            <span className="faq-question">{faq.question}</span>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

function AdminPage() {
  return (
    <main className="page-shell admin-shell">
      <div className="container">
        <div className="admin-header">
          <div>
            <span className="eyebrow">Admin dashboard</span>
            <h1>Lead overview</h1>
          </div>
          <Link to="/contact" className="button-primary small">
            New inquiry
          </Link>
        </div>

        <div className="metric-grid">
          {adminMetrics.map((metric) => (
            <div key={metric.label} className="metric-card card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>

        <div className="card table-panel">
          <div className="table-header">
            <h3>Recent inquiries</h3>
            <span>Updated today</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Name</th>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.project}</td>
                    <td><span className="status-pill">{item.status}</span></td>
                    <td>{item.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

function BookCallPage() {
  return (
    <main className="page-shell">
      <div className="container narrow booking-box card">
        <span className="eyebrow">Discovery call</span>
        <h1>Book a conversation</h1>
        <p>This area is prepared for a calendar booking integration and is placeholder-based until a live scheduler is configured.</p>
        <Link to="/contact" className="button-primary">
          Request a project discussion
        </Link>
      </div>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="page-shell not-found">
      <div className="container narrow card not-found-card">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for has moved or no longer exists.</p>
        <Link to="/" className="button-primary">
          Return home
        </Link>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <div className="brand-mark">D</div>
            <div>
              <strong>{siteSettings.brandName || 'DevDukaan'}</strong>
              <span>{siteSettings.location}</span>
            </div>
          </Link>
          <p>{siteSettings.heroDescription}</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Portfolio</h4>
          <ul>
            {projects.slice(0, 4).map((project) => (
              <li key={project.id}>
                <Link to={`/portfolio/${project.slug}`}>{project.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{siteSettings.businessEmail || 'hello@example.com'}</li>
            <li>{siteSettings.phone || '+91 00000 00000'}</li>
            <li>{siteSettings.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{siteSettings.copyright}</span>
        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </footer>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default App
