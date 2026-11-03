'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Hero3DVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const container = mountRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch (e) {
      // Fallback if WebGL fails
      console.warn('WebGL not supported or failed to initialize', e);
      return;
    }

    // Master Group for continuous rotation & parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Primary Metallic Engineering Sculpture: Torus Knot with metallic titanium finish
    const coreGeo = new THREE.TorusKnotGeometry(1.4, 0.38, 120, 32, 2, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1A1E1B'),
      metalness: 0.92,
      roughness: 0.22,
      envMapIntensity: 1.2,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // 2. Wireframe Precision Cage (Engineering aesthetic)
    const wireGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#D7FF72'),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    masterGroup.add(wireMesh);

    // 3. Dual Gyro Orbital Rings
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F1F0E9'),
      metalness: 0.85,
      roughness: 0.3,
      transparent: true,
      opacity: 0.35,
    });

    const ringGeo1 = new THREE.TorusGeometry(2.6, 0.03, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat);
    ring2.rotation.y = Math.PI / 4;
    masterGroup.add(ring2);

    // 4. Orbiting Glass Crystals
    const crystalGeo = new THREE.OctahedronGeometry(0.25, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#D7FF72'),
      metalness: 0.2,
      roughness: 0.1,
      transparent: true,
      opacity: 0.75,
      emissive: new THREE.Color('#D7FF72'),
      emissiveIntensity: 0.2,
    });

    const crystals: THREE.Mesh[] = [];
    const crystalCount = 6;
    for (let i = 0; i < crystalCount; i++) {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      const angle = (i / crystalCount) * Math.PI * 2;
      const radius = 2.1 + (i % 2) * 0.4;
      crystal.position.set(
        Math.cos(angle) * radius,
        (Math.sin(i * 1.5) * 0.8),
        Math.sin(angle) * radius
      );
      masterGroup.add(crystal);
      crystals.push(crystal);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0b0c0b, 1.5);
    scene.add(ambientLight);

    // Subtle Acid Lime Key Light
    const limeLight = new THREE.PointLight(0xd7ff72, 35, 12);
    limeLight.position.set(3, 4, 3);
    scene.add(limeLight);

    // Cool White Rim Light
    const rimLight = new THREE.DirectionalLight(0xf1f0e9, 2.5);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Deep Teal Fill Light
    const fillLight = new THREE.PointLight(0x334433, 15, 10);
    fillLight.position.set(-3, -3, 2);
    scene.add(fillLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.45;
      mouseY = y * 0.45;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    setIsLoaded(true);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        coreMesh.rotation.x = elapsedTime * 0.18;
        coreMesh.rotation.y = elapsedTime * 0.24;

        wireMesh.rotation.y = -elapsedTime * 0.12;
        wireMesh.rotation.z = elapsedTime * 0.08;

        ring1.rotation.z = elapsedTime * 0.15;
        ring2.rotation.x = -elapsedTime * 0.18;

        // Animate floating crystals
        crystals.forEach((c, i) => {
          c.rotation.x = elapsedTime * 0.5 + i;
          c.rotation.y = elapsedTime * 0.7 + i;
          c.position.y += Math.sin(elapsedTime * 1.5 + i) * 0.003;
        });

        // Mouse Parallax Damping
        targetRotationX += (mouseY - targetRotationX) * 0.05;
        targetRotationY += (mouseX - targetRotationY) * 0.05;

        masterGroup.rotation.x = targetRotationX;
        masterGroup.rotation.y = targetRotationY;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringMat.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px] flex items-center justify-center">
      {/* Background ambient radial halo */}
      <div className="absolute inset-0 bg-radial-accent opacity-70 pointer-events-none" />

      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Interactive 3D Engineering Sculpture"
      />

      {/* Fallback & Decorative Cybernetic Corner Accents */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-editorial-secondary uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>Sculpture: Dynamic Core v2.4</span>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-editorial-muted tracking-wider pointer-events-none hidden sm:block">
        [ DRAG / HOVER TO ROTATE ]
      </div>
    </div>
  );
}
