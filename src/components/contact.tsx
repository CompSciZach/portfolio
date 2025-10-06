import githubIcon from '../assets/icons8-github-96.png';
import linkedinIcon from '../assets/icons8-linkedin-100.png';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-wrapper">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            If you would like to get in touch I'm always open to discussing new projects, creative ideas or opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="social-links">
          <a 
            href="https://github.com/CompSciZach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"   
          >
            <img 
              src={githubIcon} 
              alt="GitHub" 
              className="social-icon"
            />
            GitHub
          </a>
          
          <a 
            href="https://linkedin.com/in/zachary-dube" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"   // <-- Add linkedin class
          >
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className="social-icon"
            />
            LinkedIn
          </a>
        </div>

        </div>
      </div>
    </section>
  );
}
