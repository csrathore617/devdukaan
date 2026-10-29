import styles from './LegalPage.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {new Date().getFullYear()}</p>
        <section>
          <h2>Information We Collect</h2>
          <p>When you submit an enquiry through our website, we collect the information you provide including your name, email address, phone number and project details. This information is used solely to respond to your enquiry.</p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information you provide to contact you about your project enquiry, provide project estimates and communicate about our services. We do not sell, rent or share your personal information with third parties for marketing purposes.</p>
        </section>
        <section>
          <h2>Data Storage</h2>
          <p>Enquiry submissions are delivered to our internal communication channel. We do not store your personal data in a public database. Contact information is retained only as long as necessary to respond to your enquiry.</p>
        </section>
        <section>
          <h2>Cookies</h2>
          <p>We use localStorage to remember whether you have seen our enquiry popup. No tracking cookies or third-party analytics are used on this website.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>If you have questions about this privacy policy, please contact us at devdukaanadmin@gmail.com.</p>
        </section>
        <a href="/" className={styles.back}>← Back to Home</a>
      </div>
    </div>
  );
}
