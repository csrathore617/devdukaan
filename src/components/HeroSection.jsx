import {
  Shield, Smartphone, ArrowRight, ChevronDown, LayoutDashboard,
  Braces, Cloud, Code2, Database, Layers,
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './HeroSection.module.css';

const benefits = [
  { icon: LayoutDashboard, label: 'Responsive Websites' },
  { icon: Code2, label: 'Custom Web Applications' },
  { icon: Smartphone, label: 'Android & iOS Apps' },
  { icon: Shield, label: 'Secure & Scalable Solutions' },
];

export default function HeroSection({ onQuote }) {
  const scrollToPortfolio = () => scrollToSection('#portfolio');
  const scrollDown = () => scrollToSection('#services');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.inner}>
        <div className={styles.content} data-reveal>
          <span className={styles.eyebrow}>WEB &amp; MOBILE APP DEVELOPMENT</span>
          <h1 className={styles.heading}>
            Websites &amp; <span className={styles.highlight}>Mobile Apps</span> Built for Your Business
          </h1>
          <p className={styles.desc}>
            We design and develop modern websites, powerful web applications and Android &amp; iOS mobile apps that help businesses connect with customers, streamline operations and grow digitally.
          </p>
          <div className={styles.benefits}>
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.benefit}>
                <Icon size={16} /> {label}
              </div>
            ))}
          </div>
          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={onQuote}>
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <button className={styles.ctaSecondary} onClick={scrollToPortfolio}>
              Explore Our Work
            </button>
          </div>
        </div>
        <div className={styles.visual} data-reveal aria-hidden="true">
          <div className={styles.annotation}>✨ Let's Build Something Great Together!</div>
          <div className={styles.mockupWrap}>
            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <div className={styles.mockupBar}>
                  <span /><span /><span />
                  <div className={styles.mockupUrl}>devdukaan.in</div>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.mockupNav}>
                    <span className={styles.mockupBrand}>studio<span>.</span></span>
                    <div className={styles.mockupNavLinks}><i /><i /><i /></div>
                    <span className={styles.mockupNavAction} />
                  </div>
                  <div className={styles.mockupHero}>
                    <div className={styles.mockupCopy}>
                      <span className={styles.mockupEyebrow}>DIGITAL EXPERIENCES</span>
                      <div className={styles.mockupLine} style={{ width: '88%' }} />
                      <div className={styles.mockupLine} style={{ width: '65%' }} />
                      <div className={styles.mockupSubline} />
                      <div className={styles.mockupBtn} />
                    </div>
                    <div className={styles.mockupArt}>
                      <div className={styles.artOrb} />
                      <div className={styles.artCard}><span /><b /><i /><small>APP UI</small></div>
                      <div className={styles.productTile}><i /><span /><b /></div>
                    </div>
                  </div>
                  <div className={styles.dashboard}>
                    <div className={styles.dashboardHead}>
                      <b><i className={styles.statusDot} />Project workspace</b>
                      <span>Websites · Apps · Software</span>
                    </div>
                    <div className={styles.dashboardCards}>
                      <div className={`${styles.metricCard} ${styles.metricWebsite}`}>
                        <span><i /> WEBSITE</span>
                        <b>Responsive design</b>
                        <div className={styles.progressTrack}><i /></div>
                      </div>
                      <div className={`${styles.metricCard} ${styles.metricMobile}`}>
                        <span><i /> MOBILE APP</span>
                        <b className={styles.metricCount}><span>platforms</span></b>
                        <div className={styles.platformDots}><i /><i /><i /></div>
                      </div>
                      <div className={styles.chartCard}>
                        <div className={styles.chartHead}><span>Product activity</span><Layers size={13} /></div>
                        <div className={styles.chartBars}>
                          {[36, 62, 46, 78, 55, 88, 68, 96, 73, 100, 82, 94].map((height, index) => (
                            <i key={index} style={{ '--bar-height': `${height}%`, '--bar-index': index }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.dashboardBottom}>
                      <div className={styles.activityPanel}>
                        <div className={styles.panelTitle}><b>Project flow</b><span>In progress</span></div>
                        <div className={styles.flowRow}>
                          <div className={`${styles.avatar} ${styles.avatarBlue}`}>W</div>
                          <div><b>Website experience</b><span>Design &amp; development</span></div>
                          <i className={styles.flowCheck}>✓</i>
                        </div>
                        <div className={styles.flowRow}>
                          <div className={`${styles.avatar} ${styles.avatarCyan}`}><Smartphone size={10} /></div>
                          <div><b>Mobile application</b><span>Android &amp; iOS interface</span></div>
                          <i className={styles.flowArrow}>↗</i>
                        </div>
                      </div>
                      <div className={styles.previewPanel}>
                        <div className={styles.panelTitle}><b>UI previews</b><span>Web + app</span></div>
                        <div className={styles.previewThumbs}>
                          <div className={styles.previewWeb}><i /><b /><span /><span /></div>
                          <div className={styles.previewApp}><i /><b /><span /></div>
                          <div className={styles.previewCode}><i /><i /><i /><i /></div>
                        </div>
                        <div className={styles.profileRow}>
                          <span className={`${styles.avatar} ${styles.avatarViolet}`}>D</span>
                          <span className={`${styles.avatar} ${styles.avatarGreen}`}>+</span>
                          <span>Made for your workflow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.laptopBase} />
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneNav}><span /><i /><i /></div>
                <span className={styles.phoneAppBadge}>MOBILE APP</span>
                <div className={styles.phoneImage}><b /><i /></div>
                <div className={styles.phoneLabel} />
                <div className={styles.phoneAvatarRow}><i /><span /><b /></div>
                <div className={styles.phoneLine} style={{ width: '80%' }} />
                <div className={styles.phoneLine} style={{ width: '60%' }} />
                <div className={styles.phoneProgress}><i /></div>
                <div className={styles.phoneBtn} />
              </div>
            </div>
            <div className={styles.codeCard}>
              <span><i /><i /><i /><b>project.ts</b></span>
              <div className={styles.codeViewport}>
                <div className={styles.codeLines}>
                  <code><b>const</b> site = <em>“your idea”</em><strong>;</strong></code>
                  <code><b>const</b> app = <em>“mobile experience”</em><strong>;</strong></code>
                  <code>build(site, app)<strong>;</strong></code>
                  <code><i /> <em>responsive by design</em></code>
                  <code><i /> <em>ready to grow</em></code>
                </div>
              </div>
              <div className={styles.codeProgress}><i /></div>
            </div>
            <div className={`${styles.floatIcon} ${styles.floatCode}`}><Code2 size={20} /><span>&lt;/&gt;</span></div>
            <div className={`${styles.floatIcon} ${styles.floatCloud}`}><Cloud size={22} /><span>Cloud</span></div>
            <div className={`${styles.floatIcon} ${styles.floatReact}`}><Braces size={21} /><span>{'{}'}</span></div>
            <div className={`${styles.floatIcon} ${styles.floatDatabase}`}><Database size={20} /><span>API</span></div>
            <div className={`${styles.floatIcon} ${styles.floatLayers}`}><Layers size={19} /><span>UI</span></div>
          </div>
        </div>
      </div>
      <button className={styles.scrollDown} onClick={scrollDown} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
