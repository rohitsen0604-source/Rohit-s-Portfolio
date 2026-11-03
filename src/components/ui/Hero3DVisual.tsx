'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Hero3DVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const container = mountRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.2);

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
      renderer.toneMappingExposure = 1.0;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL not supported or failed to initialize', e);
      return;
    }

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Swiss Architectural Core: Interlocking geometric toroid polyhedron
    const coreGeo = new THREE.TorusKnotGeometry(1.4, 0.36, 128, 32, 2, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#EAE5DA'),
      metalness: 0.25,
      roughness: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // 2. Graphite Architectural Structure (Inner Node)
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#171717'),
      metalness: 0.9,
      roughness: 0.2,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerMesh);

    // 3. Swiss Orange Axis Ring (Planar Meridian)
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E76F3C'),
      metalness: 0.5,
      roughness: 0.25,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.04, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    ring1.rotation.x = Math.PI / 3.5;
    masterGroup.add(ring1);

    // 4. Secondary Neutral Grid Wireframe (Connected Architecture)
    const wireGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#77736B'),
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    masterGroup.add(wireMesh);

    // 5. Orbiting Architectural Prisms (Swiss Vermilion Nodes)
    const prismGeo = new THREE.OctahedronGeometry(0.2, 0);
    const prismMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E76F3C'),
      metalness: 0.3,
      roughness: 0.15,
      emissive: new THREE.Color('#E76F3C'),
      emissiveIntensity: 0.15,
    });

    const prisms: THREE.Mesh[] = [];
    const prismCount = 6;
    for (let i = 0; i < prismCount; i++) {
      const prism = new THREE.Mesh(prismGeo, prismMat);
      const angle = (i / prismCount) * Math.PI * 2;
      const radius = 2.2 + (i % 2) * 0.3;
      prism.position.set(
        Math.cos(angle) * radius,
        Math.sin(i * 1.4) * 0.7,
        Math.sin(angle) * radius
      );
      masterGroup.add(prism);
      prisms.push(prism);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xf5f2ea, 1.8);
    scene.add(ambientLight);

    // Key Architectural Light (Warm Top-Left)
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(4, 6, 4);
    scene.add(dirLight);

    // Swiss Vermilion Accent Light (Casting dramatic rim highlights)
    const orangeLight = new THREE.PointLight(0xe76f3c, 30, 10);
    orangeLight.position.set(-3, -2, 3);
    scene.add(orangeLight);

    // Soft Fill Light
    const fillLight = new THREE.DirectionalLight(0xeae5da, 1.2);
    fillLight.position.set(-4, 2, -4);
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
      mouseX = x * 0.4;
      mouseY = y * 0.4;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    setIsLoaded(true);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        coreMesh.rotation.x = elapsedTime * 0.16;
        coreMesh.rotation.y = elapsedTime * 0.22;

        innerMesh.rotation.x = -elapsedTime * 0.2;
        innerMesh.rotation.y = elapsedTime * 0.3;

        ring1.rotation.z = elapsedTime * 0.12;
        wireMesh.rotation.y = -elapsedTime * 0.08;

        prisms.forEach((p, i) => {
          p.rotation.x = elapsedTime * 0.4 + i;
          p.rotation.y = elapsedTime * 0.6 + i;
          p.position.y += Math.sin(elapsedTime * 1.5 + i) * 0.002;
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
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      prismGeo.dispose();
      prismMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] lg:h-[580px] flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Abstract 3D Architecture Visual"
      />

      {/* Swiss Editorial Coordinates */}
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-swiss-muted pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 bg-swiss-orange inline-block" />
        <span>FIG. 01 — ARCHITECTURAL CORE</span>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-swiss-muted tracking-wider pointer-events-none hidden sm:block">
        [ INTERACTIVE 3D // 60 FPS ]
      </div>
    </div>
  );
}
