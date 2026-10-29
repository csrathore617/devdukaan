import styles from './LegalPage.module.css';

export default function Terms() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1>Terms & Conditions</h1>
        <p className={styles.updated}>Last updated: {new Date().getFullYear()}</p>
        <section>
          <h2>Services</h2>
          <p>DevDukaan.in provides website, web application, mobile application, software development and related digital services. The scope, timeline and cost of each project are agreed upon before work begins.</p>
        </section>
        <section>
          <h2>Project Agreements</h2>
          <p>All projects are governed by a separate project agreement or statement of work. Submitting an enquiry does not constitute a binding contract.</p>
        </section>
        <section>
          <h2>Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of the custom code and assets developed for their project. DevDukaan.in retains the right to display completed work in its portfolio unless otherwise agreed.</p>
        </section>
        <section>
          <h2>Limitation of Liability</h2>
          <p>DevDukaan.in is not liable for indirect, incidental or consequential damages arising from the use of delivered software. Our liability is limited to the amount paid for the specific project.</p>
        </section>
        <section>
          <h2>Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of our services constitutes acceptance of the updated terms.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For questions about these terms, contact us at devdukaanadmin@gmail.com.</p>
        </section>
        <a href="/" className={styles.back}>← Back to Home</a>
      </div>
    </div>
  );
}
