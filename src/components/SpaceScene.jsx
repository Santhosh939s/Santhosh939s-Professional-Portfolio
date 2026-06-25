import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial, useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function SpaceScene() {
  const starsRef = useRef();
  const sphere1Ref = useRef();
  const sphere2Ref = useRef();
  const sphere3Ref = useRef();
  
  const scroll = useScroll();
  
  useFrame((state, delta) => {
    const scrollOffset = scroll.offset; // 0 to 1
    
    // Rotate stars slowly
    if (starsRef.current) {
      starsRef.current.rotation.y -= delta / 10;
      starsRef.current.rotation.x -= delta / 15;
    }
    
    // Animate camera position based on scroll (fly through space)
    state.camera.position.z = 5 - scrollOffset * 20;
    
    // Animate spheres passing by
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = scrollOffset * 10;
      sphere1Ref.current.rotation.x += delta;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = -2 + scrollOffset * 15;
      sphere2Ref.current.rotation.y += delta;
    }
    if (sphere3Ref.current) {
      sphere3Ref.current.position.y = 3 - scrollOffset * 5;
      sphere3Ref.current.rotation.z += delta;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ff8c00" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#4400ff" />
      
      <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[3.5, -0.8, -5]}>
        <Sphere ref={sphere1Ref} args={[1, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#ff8c00"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#ff8c00"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-3, -2, -8]}>
        <Sphere ref={sphere2Ref} args={[1, 32, 32]} scale={0.8}>
          <meshStandardMaterial
            color="#2a2a2a"
            roughness={0.8}
            metalness={0.2}
            wireframe
          />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={3} position={[2, 2.5, -8]}>
        <Sphere ref={sphere3Ref} args={[1, 64, 64]} scale={0.5}>
          <MeshDistortMaterial
            color="#4400ff"
            attach="material"
            distort={0.6}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            emissive="#4400ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
    </>
  );
}

