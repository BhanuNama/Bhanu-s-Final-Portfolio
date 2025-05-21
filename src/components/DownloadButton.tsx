import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton: React.FC = () => (
  <a
    href="https://drive.google.com/file/d/1PVTjyllUqs9ZeVe3hd0MucjCBYA6lnPM/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 bg-teal text-white font-mono rounded-md hover:bg-teal/80 transition-colors"
  >
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </a>
);

export default DownloadButton; 