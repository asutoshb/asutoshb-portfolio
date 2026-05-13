import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

function MorphingBlob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.18 + pointer.x * 0.4;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.2 + pointer.y * 0.3;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.4}>
      <mesh ref={ref} scale={1.7}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#22d3ee"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.85}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

function Orbiter({
  radius,
  speed,
  size,
  color,
  offset = 0,
}: {
  radius: number;
  speed: number;
  size: number;
  color: string;
  offset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.8) * radius * 0.45,
      Math.sin(t) * radius
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.6}
        toneMapped={false}
      />
    </mesh>
  );
}

function Ring() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * 0.12;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[2.6, 0.012, 16, 200]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
    </mesh>
  );
}

export default function HeroScene() {
  const orbiters = useMemo(
    () => [
      { radius: 2.6, speed: 0.6, size: 0.07, color: "#22d3ee", offset: 0 },
      { radius: 2.6, speed: 0.6, size: 0.05, color: "#f472b6", offset: 2.1 },
      { radius: 3.1, speed: 0.42, size: 0.06, color: "#a78bfa", offset: 4.2 },
    ],
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 3]} intensity={1.1} color="#a78bfa" />
      <directionalLight position={[-4, -2, 2]} intensity={0.7} color="#22d3ee" />

      <Suspense fallback={null}>
        <MorphingBlob />
        <Ring />
        {orbiters.map((o, i) => (
          <Orbiter key={i} {...o} />
        ))}
        <Sparkles count={60} scale={6} size={2} speed={0.3} color="#a78bfa" />
        <Stars
          radius={50}
          depth={40}
          count={1500}
          factor={3}
          fade
          speed={0.4}
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
