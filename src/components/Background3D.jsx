import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function MovingStars() {
    const starsRef = useRef();
    useFrame(() => {
        starsRef.current.rotation.y += 0.0002;
        starsRef.current.rotation.x += 0.0001;
    });
    return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
}

export default function Background3D() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <MovingStars />
            </Canvas>
        </div>
    );
}
