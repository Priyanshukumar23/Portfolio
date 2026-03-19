import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sky } from '@react-three/drei';

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

function Bird({ position, speed, delay, color }) {
    const group = useRef();
    const rightWing = useRef();
    const leftWing = useRef();
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (!group.current) return;
        group.current.position.x -= speed * delta;
        if (group.current.position.x < -40) {
            group.current.position.x = 40;
            group.current.position.y = position[1] + (Math.random() * 4 - 2);
        }

        const flap = Math.sin(state.clock.elapsedTime * 15 + delay) * 0.6;
        if (rightWing.current) rightWing.current.rotation.z = Math.abs(flap);
        if (leftWing.current) leftWing.current.rotation.z = -Math.abs(flap);

        // slight up and down
        if (meshRef.current) meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.5;
    });

    return (
        <group ref={group} position={position}>
            <group ref={meshRef}>
                {/* Body */}
                <mesh>
                    <boxGeometry args={[0.4, 0.1, 0.2]} />
                    <meshBasicMaterial color={color} />
                </mesh>
                {/* Right Wing */}
                <mesh ref={rightWing} position={[0, 0, 0.1]}>
                    <coneGeometry args={[0.3, 0.8, 3]} />
                    <meshBasicMaterial color={color} side={2} />
                </mesh>
                {/* Left Wing */}
                <mesh ref={leftWing} position={[0, 0, -0.1]} rotation={[Math.PI, 0, 0]}>
                    <coneGeometry args={[0.3, 0.8, 3]} />
                    <meshBasicMaterial color={color} side={2} />
                </mesh>
            </group>
        </group>
    );
}

function SimpleCloud({ position, scale = 1, opacity = 0.8 }) {
    const cloudRef = useRef();
    useFrame((state, delta) => {
        if (cloudRef.current) cloudRef.current.position.x += 0.2 * delta; // slow drift
    });

    return (
        <group ref={cloudRef} position={position} scale={[scale * 2, scale, scale]}>
            <mesh position={[-1, 0, 0]}>
                <sphereGeometry args={[1.5, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={opacity} depthWrite={false} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[2, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={opacity} depthWrite={false} />
            </mesh>
            <mesh position={[1, 0, 0]}>
                <sphereGeometry args={[1.5, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={opacity} depthWrite={false} />
            </mesh>
        </group>
    );
}

function DaySky() {
    return (
        <group>
            <Sky distance={45000} sunPosition={[0, 10, -50]} inclination={0.2} azimuth={0.25} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 20, 10]} intensity={2} />

            <SimpleCloud position={[-15, 8, -20]} scale={2} opacity={0.6} />
            <SimpleCloud position={[10, 12, -30]} scale={3} opacity={0.5} />
            <SimpleCloud position={[-5, 5, -40]} scale={4} opacity={0.4} />
            <SimpleCloud position={[25, 10, -25]} scale={2.5} opacity={0.5} />

            <group position={[0, 8, -15]}>
                <Bird position={[10, 2, 0]} speed={6} delay={0} color="#334155" />
                <Bird position={[12, 3, -1]} speed={6} delay={1} color="#334155" />
                <Bird position={[11, 1, 1]} speed={6} delay={2} color="#334155" />
                <Bird position={[8, 3.5, 0.5]} speed={6} delay={3} color="#334155" />
                <Bird position={[9, 1.5, -0.5]} speed={6} delay={4} color="#334155" />
            </group>
        </group>
    );
}

export default function Background3D({ theme = 'dark' }) {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'none', transition: 'background-color 0.5s ease', background: theme === 'light' ? '#87CEEB' : '#0d0e15' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                {theme === 'dark' ? (
                    <>
                        <ambientLight intensity={0.1} />
                        <MovingStars />
                        <SolarSystem />
                    </>
                ) : (
                    <DaySky />
                )}
            </Canvas>
        </div>
    );
}
