import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import SpaceScene from './components/SpaceScene';
import Overlay from './components/Overlay';
import './index.css';

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* ScrollControls allows us to map scroll events to the 3D scene and HTML */}
        <ScrollControls pages={8.5} damping={0.25}>
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
