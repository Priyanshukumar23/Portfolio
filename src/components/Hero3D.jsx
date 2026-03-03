import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

export default function Hero3D() {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} intensity={1.5} />
                <Float speed={2} rotationIntensity={2} floatIntensity={3}>
                    <Sphere visible args={[1, 100, 200]} scale={2.2}>
                        <MeshDistortMaterial
                            color="#8b5cf6"
                            attach="material"
                            distort={0.4}
                            speed={2}
                            roughness={0}
                            metalness={0.5}
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
}
