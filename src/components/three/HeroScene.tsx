import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

/** Central crystal — solid metallic icosahedron, gently spinning + drifting */
function Crystal() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.18 + pointer.y * 0.35;
    ref.current.rotation.y = t * 0.22 + pointer.x * 0.55;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.7}>
      <mesh ref={ref} scale={1.25}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#3b1f72"
          emissive="#a78bfa"
          emissiveIntensity={0.45}
          roughness={0.18}
          metalness={0.92}
          flatShading
        />
      </mesh>
    </Float>
  );
}

/** Outer wireframe shell — thin lines that breathe + counter-rotate */
function WireShell() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = -t * 0.08;
    ref.current.rotation.z = t * 0.04;
    const s = 1.95 + Math.sin(t * 0.8) * 0.04;
    ref.current.scale.set(s, s, s);
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.22} />
    </mesh>
  );
}

/** Cyan point cloud distributed on a sphere — adds depth without bulk */
function PointSphere({ count = 700, radius = 2.7 }: { count?: number; radius?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      arr[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      arr[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#22d3ee"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Glowing orbiting dot */
function Orbiter({ radius, speed, size, color, offset = 0 }: {
  radius: number; speed: number; size: number; color: string; offset?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.85) * radius * 0.4,
      Math.sin(t) * radius
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
    </mesh>
  );
}

export default function HeroScene() {
  const orbiters = useMemo(
    () => [
      { radius: 2.4, speed: 0.55, size: 0.07, color: "#22d3ee", offset: 0 },
      { radius: 2.8, speed: 0.42, size: 0.05, color: "#f472b6", offset: 2.1 },
      { radius: 2.2, speed: 0.7, size: 0.06, color: "#a78bfa", offset: 4.2 },
    ],
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 3]} intensity={1.4} color="#c4b5fd" />
      <directionalLight position={[-3, -2, 2]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#f472b6" />

      <Suspense fallback={null}>
        <Crystal />
        <WireShell />
        <PointSphere />
        {orbiters.map((o, i) => (
          <Orbiter key={i} {...o} />
        ))}
        <Sparkles count={70} scale={6} size={2} speed={0.3} color="#a78bfa" />
        <Stars radius={50} depth={40} count={1200} factor={3} fade speed={0.4} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
