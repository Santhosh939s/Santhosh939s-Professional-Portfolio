import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { useEffect } from 'react';
import SpaceScene from './components/SpaceScene';
import Overlay from './components/Overlay';
import './index.css';

function ScrollManager() {
  const scroll = useScroll();
  
  useEffect(() => {
    const handleScrollEvent = (e) => {
      const targetId = e.detail;
      const element = document.getElementById(targetId);
      if (element && scroll && scroll.el) {
        // Calculate the absolute position relative to the current scroll offset
        const top = element.getBoundingClientRect().top + scroll.el.scrollTop;
        // Set the scrollTop directly; ScrollControls damping will animate it smoothly
        scroll.el.scrollTop = top;
      }
    };
    
    window.addEventListener('scrollToSection', handleScrollEvent);
    return () => window.removeEventListener('scrollToSection', handleScrollEvent);
  }, [scroll]);
  
  return null;
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* ScrollControls allows us to map scroll events to the 3D scene and HTML */}
        <ScrollControls pages={8.5} damping={0.25}>
          <ScrollManager />
          {/* 3D Scene Layer */}
          <Scroll>
            <SpaceScene />
          </Scroll>
          
          {/* HTML Overlay Layer */}
          <Scroll html style={{ width: '100%' }}>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
