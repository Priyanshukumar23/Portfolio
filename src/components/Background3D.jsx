import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function MovingStars() {
    const starsRef = useRef();
    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.y += 0.0002;
            starsRef.current.rotation.x += 0.0001;
        }
    });
    return <Stars ref={starsRef} radius={150} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />;
}

function SolarSystem() {
    const sunRef = useRef();
    const earthGroupRef = useRef();
    const earthRef = useRef();
    const moonGroupRef = useRef();
    const moonRef = useRef();

    useFrame((state, delta) => {
        if (sunRef.current) sunRef.current.rotation.y += delta * 0.05;
        if (earthGroupRef.current) earthGroupRef.current.rotation.y += delta * 0.15;
        if (earthRef.current) earthRef.current.rotation.y += delta * 0.5;
        if (moonGroupRef.current) moonGroupRef.current.rotation.y += delta * 0.4;
        if (moonRef.current) moonRef.current.rotation.y += delta * 1;
    });

    return (
        <group position={[15, 5, -60]} rotation={[0.2, 0, -0.1]}>
            {/* Sun */}
            <mesh ref={sunRef}>
                <sphereGeometry args={[10, 32, 32]} />
                <meshBasicMaterial color="#ffcc00" />
                <pointLight intensity={4} distance={300} decay={0} color="#ffeedd" />

                {/* Sun Glow layers */}
                <mesh>
                    <sphereGeometry args={[12, 32, 32]} />
                    <meshBasicMaterial color="#ffaa00" transparent opacity={0.15} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[14, 32, 32]} />
                    <meshBasicMaterial color="#ff8800" transparent opacity={0.08} />
                </mesh>
            </mesh>

            {/* Earth System */}
            <group ref={earthGroupRef}>
                <group position={[32, 0, 0]}>
                    <mesh ref={earthRef}>
                        <sphereGeometry args={[3.5, 32, 32]} />
                        <meshStandardMaterial color="#2b82c9" roughness={0.6} metalness={0.2} />
                    </mesh>

                    {/* Moon System */}
                    <group ref={moonGroupRef}>
                        <mesh ref={moonRef} position={[7, 0, 0]}>
                            <sphereGeometry args={[1, 16, 16]} />
                            <meshStandardMaterial color="#dddddd" roughness={0.9} metalness={0.1} />
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    );
}

export default function Background3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.1} />
                <MovingStars />
                <SolarSystem />
            </Canvas>
        </div>
    );
}
