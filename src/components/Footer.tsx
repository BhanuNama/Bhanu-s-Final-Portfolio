
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-light-slate">
      <div className="container">
        <div className="flex flex-col items-center">
          
          <p className="text-sm font-mono">
            Designed & Built by Bhanu Nama
          </p>
          
          <p className="text-xs mt-2">
            © {currentYear} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
