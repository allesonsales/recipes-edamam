import { useState, useEffect } from 'react';
import './style.css'

const Footer = () => {

    const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight; 
    
    if (scrollHeight - scrollTop - windowHeight <= 100) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove o evento de scroll quando o componente desmontar
    };
  }, []);


    return (
            <div className={`footer ${showFooter ? `show` : ''}`}>
                <div className="iconsLeft">
    
                </div>
                <div className="iconsCenter">
    
                </div>
                <div className="iconsRight">
                    <i className="fa-regular fa-comment"></i>
                </div>
            </div>
        )
}

export default Footer