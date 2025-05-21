
import { motion } from 'framer-motion';

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "mailto:bhanunama08@gmail.com", icon: "mail", label: "Email" },
  { href: "https://www.linkedin.com/in/bhanu-nama-654957281/", icon: "linkedin", label: "LinkedIn" },
  { href: "https://github.com/BhanuNama?tab=repositories", icon: "github", label: "GitHub" },
  { href: "tel:+917993073400", icon: "phone", label: "Phone" }
];

const SocialLinks = () => {
  return (
    <motion.div 
      className="flex space-x-5 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.icon}
          href={link.href}
          aria-label={link.label}
          className="text-light-slate hover:text-teal"
          whileHover={{ y: -5, scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
          target={link.icon !== "mail" && link.icon !== "phone" ? "_blank" : undefined}
          rel={link.icon !== "mail" && link.icon !== "phone" ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${link.icon}`}>
            {link.icon === "mail" && (
              <>
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </>
            )}
            {link.icon === "linkedin" && (
              <>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </>
            )}
            {link.icon === "github" && (
              <>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </>
            )}
            {link.icon === "phone" && (
              <>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </>
            )}
          </svg>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
