"use client";

import { Html, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

const nodes = [
  { label: "WEB", position: [-2.5, 1.4, 0.2] as [number, number, number], active: false },
  { label: "MOBILE", position: [2.55, 1.45, -0.2] as [number, number, number], active: true },
  { label: "BACKEND", position: [-2.85, -0.7, -0.6] as [number, number, number], active: false },
  { label: "AI", position: [2.9, -0.65, 0.5] as [number, number, number], active: false },
  { label: "DATABASE", position: [-1.15, -2.15, 0.2] as [number, number, number], active: false },
  { label: "CLOUD", position: [1.4, -2.05, -0.35] as [number, number, number], active: true },
];

function Core() {
  const group = useRef<Group>(null);
  const orb = useRef<Mesh>(null);
  const linePoints = useMemo(
    () => nodes.map((node) => [[0, 0, 0] as [number, number, number], node.position]),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current || !orb.current) return;
    group.current.rotation.y += delta * 0.07;
    group.current.rotation.x = state.pointer.y * 0.08;
    group.current.rotation.z = -state.pointer.x * 0.06;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.045;
    orb.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      <mesh ref={orb}>
        <icosahedronGeometry args={[1.18, 2]} />
        <meshStandardMaterial color="#151515" roughness={0.32} metalness={0.82} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.72, 3]} />
        <meshStandardMaterial color="#ff5b00" roughness={0.2} metalness={0.4} emissive="#8f2900" emissiveIntensity={0.75} />
      </mesh>

      {linePoints.map((points, index) => (
        <Line
          key={nodes[index].label}
          points={points}
          color={nodes[index].active ? "#c4f135" : "#ff5b00"}
          lineWidth={nodes[index].active ? 1.3 : 0.65}
          transparent
          opacity={nodes[index].active ? 0.9 : 0.52}
        />
      ))}

      {nodes.map((node) => (
        <group key={node.label} position={node.position}>
          <mesh>
            <sphereGeometry args={[node.active ? 0.105 : 0.075, 16, 16]} />
            <meshBasicMaterial color={node.active ? "#c4f135" : "#ff5b00"} />
          </mesh>
          <Html center distanceFactor={7} style={{ pointerEvents: "none" }}>
            <span className={`core-label ${node.active ? "core-label--active" : ""}`}>{node.label}</span>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function SystemCore() {
  return (
    <div className="system-core" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={14} color="#ff5b00" distance={8} />
        <Core />
      </Canvas>
    </div>
  );
}
