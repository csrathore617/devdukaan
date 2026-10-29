import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import styles from './PortfolioSection.module.css';

const categoryColors = {
  Travel: '#0ea5a4',
  'Jewellery & E-commerce': '#c08b3d',
  Education: '#527af5',
  Healthcare: '#e26a82',
  Sports: '#8c67d7',
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const filters = [
    'All Projects',
    'Websites',
    'Web Applications',
    ...(portfolio.some(project => project.type === 'mobile-application') ? ['Mobile Applications'] : []),
    'E-commerce',
  ];
  const visibleProjects = portfolio.filter(project => (
    activeFilter === 'All Projects' || project.filters.includes(activeFilter)
  ));

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>Our Work</span>
          <h2>Websites &amp; Apps Built for Different Industries</h2>
          <p>Explore selected website projects. Mobile applications will appear here when project details are available.</p>
        </div>
        <div className={styles.filters} role="group" aria-label="Portfolio categories">
          {filters.map(filter => (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${activeFilter === filter ? styles.filterActive : ''}`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        {visibleProjects.length > 0 ? (
          <div className={styles.grid} data-reveal="stagger" aria-live="polite">
          {visibleProjects.map((p, index) => (
            <article key={p.id} className={styles.card} style={{ '--reveal-index': index }}>
              <div className={styles.thumb} style={{ '--project-color': categoryColors[p.category] || '#3b82f6' }}>
                {p.previewImages.length > 0 ? (
                  <img className={styles.projectImage} src={p.previewImages[0]} alt={`${p.name} project preview`} loading="lazy" />
                ) : (
                  <div className={styles.thumbInner} aria-hidden="true">
                    <span className={styles.projectCode}>{p.name.split(' ').map(word => word[0]).join('').slice(0, 3)}</span>
                    <span className={styles.thumbName}>{p.name}</span>
                    <span className={styles.thumbCategory}>{p.category}</span>
                    <span className={styles.previewLine} />
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.cat}>
                  {p.category}
                </span>
                <h3>{p.applicationName || p.name}</h3>
                {p.platform && <span className={styles.platform}>{p.platform}</span>}
                <p>{p.description}</p>
                {p.technologyStack.length > 0 && (
                  <ul className={styles.tags} aria-label="Verified technologies">
                    {p.technologyStack.map(technology => <li key={technology}>{technology}</li>)}
                  </ul>
                )}
                {p.projectWebsiteUrl && (
                  <a href={p.projectWebsiteUrl} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                    Visit Website <ExternalLink size={14} />
                  </a>
                )}
                {p.playStoreUrl && <a href={p.playStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>Google Play <ExternalLink size={14} /></a>}
                {p.appStoreUrl && <a href={p.appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>App Store <ExternalLink size={14} /></a>}
              </div>
            </article>
          ))}
          </div>
        ) : (
          <p className={styles.emptyState} role="status">No projects in this category are available yet.</p>
        )}
      </div>
    </section>
  );
}
