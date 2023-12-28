import React, { useState , useEffect}  from 'react';
import './Sidebar.css'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768 ,1025);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768 ,1025);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="top-Elements">
          <div className="projects">
            <a href="#">
              <img src={image3} alt="" />
              {!isCollapsed && <span>My Projects</span>}
            </a>
            <a href="#">
              <img src={image4} alt="" />
              {!isCollapsed && <span>Sample Projects</span>}
            </a>
          </div>
          <div className="projects">
            <a href="#">
              <img src={image5} alt="" />
              {!isCollapsed && <span>Apps</span>}
            </a>
            <a href="#">
              <img src={image6} alt="" />
              {!isCollapsed && <span>Intro to Necleo</span>}
            </a>
          </div>
        </div>
          <div className="bottom-elements projects">
            <a href="#">
              <img src={image9} alt="" />
              {!isCollapsed && <span>Help And Support</span>}
            </a>
            <a href="#">
              <img src={image7} alt="" />
              {!isCollapsed && <span>Feedback</span>}
            </a>
            <a href="#" onClick={toggleSidebar}>
              <img src={image8} alt="" />
              {!isCollapsed && <span onClick={toggleSidebar}>Collapse</span>}
            </a>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
