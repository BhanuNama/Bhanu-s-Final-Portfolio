import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Github, Mail, Phone, MapPin, FileText, Download } from 'lucide-react';
import DownloadButton from './DownloadButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHelloVisible, setIsHelloVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsHelloVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mldbvkab', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });
      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        toast({
          title: 'Submission failed.',
          description: data.error || 'Please try again later.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Network error.',
        description: 'Please check your connection and try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-heading animate-on-scroll">Get In Touch</h2>
      
      <div className="max-w-2xl mx-auto text-center mb-12 animate-on-scroll relative">
        {isHelloVisible && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 font-mono text-3xl text-teal opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Say Hello!
          </div>
        )}
        <p className="text-light-slate">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll do my best to get back to you!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="animate-on-scroll">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-light-slate mb-2 font-mono">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-light-slate mb-2 font-mono">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="yourname@gmail.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-light-slate mb-2 font-mono">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Job Opportunity or Query"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-light-slate mb-2 font-mono">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-full py-4 flex items-center justify-center hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-teal rounded-full"></span>
              ) : null}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div>
          <div className="glass-card p-8 h-full relative overflow-hidden backdrop-blur-lg bg-light-navy/20 border border-white/10 rounded-xl">
            {/* 3D-style decorative element */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-teal/10 rounded-full blur-xl"></div>
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-teal/5 rounded-full blur-xl"></div>
            
            <h3 className="text-xl font-semibold text-lightest-slate mb-6 relative z-10">Contact Information</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="text-teal mt-1 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-light-slate mb-1">Email</h4>
                  <a href="mailto:bhanunama08@gmail.com" className="text-teal hover:underline">
                    bhanunama08@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="text-teal mt-1 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-light-slate mb-1">Phone</h4>
                  <a href="tel:+917993073400" className="text-teal hover:underline">
                    +91 7993073400
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="text-teal mt-1 mr-4">
                  <MapPin className="h-5 w-5 animate-bounce" />
                </div>
                <div>
                  <h4 className="font-mono text-light-slate mb-1">Location</h4>
                  <p className="text-light-slate">
                    Hyderabad, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="text-teal mt-1 mr-4">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-light-slate mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/bhanu-nama-654957281/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    linkedin.com/in/bhanu-nama-654957281/
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="text-teal mt-1 mr-4">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-light-slate mb-1">GitHub</h4>
                  <a href="https://github.com/BhanuNama?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    github.com/BhanuNama?tab=repositories
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative z-10">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
