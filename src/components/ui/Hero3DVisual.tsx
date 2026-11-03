'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { Layers, Cpu, Database, Server, Cloud, Layout, CheckCircle2, Play, Pause } from 'lucide-react';

type LayerKey = 'all' | 'frontend' | 'backend' | 'ai' | 'database' | 'cloud';

interface ArchitectureLayerInfo {
  key: LayerKey;
  num: string;
  label: string;
  shortLabel: string;
  technologies: string[];
  description: string;
  metricLabel: string;
  metricValue: string;
  icon: React.ElementType;
}

const ARCHITECTURE_LAYERS: ArchitectureLayerInfo[] = [
  {
    key: 'frontend',
    num: '01',
    label: 'Client & Frontend Systems',
    shortLabel: 'Frontend',
    technologies: ['React', 'Next.js 15', 'TypeScript', 'Tailwind', 'State Stores'],
    description: 'High-performance interactive web interfaces, SSR/SSG rendering pipelines, and scalable component architectures.',
    metricLabel: 'LCP / Core Web Vitals',
    metricValue: '< 0.8s Target',
    icon: Layout,
  },
  {
    key: 'backend',
    num: '02',
    label: 'API Gateway & Microservices',
    shortLabel: 'Backend',
    technologies: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'gRPC'],
    description: 'Resilient backend microservices, token authentication, API rate limiting, and business logic execution.',
    metricLabel: 'API Response Time',
    metricValue: '< 18ms p95',
    icon: Server,
  },
  {
    key: 'ai',
    num: '03',
    label: 'AI & Neural Processing',
    shortLabel: 'AI / ML',
    technologies: ['PyTorch', 'LLMs', 'Vector DB', 'RAG Pipelines', 'MLflow'],
    description: 'Connected neural networks, vector embedding retrieval, automated inference pipelines, and LLM integrations.',
    metricLabel: 'Inference Throughput',
    metricValue: '120+ req/sec',
    icon: Cpu,
  },
  {
    key: 'database',
    num: '04',
    label: 'Distributed Data & Cache',
    shortLabel: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Connection Pools'],
    description: 'ACID relational data storage, partitioned document stores, and sub-millisecond Redis memory caches.',
    metricLabel: 'Query Latency',
    metricValue: '1.2ms Avg',
    icon: Database,
  },
  {
    key: 'cloud',
    num: '05',
    label: 'Cloud & DevOps Infrastructure',
    shortLabel: 'Cloud / DevOps',
    technologies: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS', 'Linux'],
    description: 'Containerized orchestration, automated continuous deployment pipelines, and scalable cloud foundations.',
    metricLabel: 'System Availability',
    metricValue: '99.9% Uptime',
    icon: Cloud,
  },
];

export function Hero3DVisual() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<LayerKey>('all');
  const [isLiveStream, setIsLiveStream] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [webGlAvailable, setWebGlAvailable] = useState(true);

  // References to keep in sync with Three.js animation loop without rerenders
  const activeLayerRef = useRef<LayerKey>('all');
  activeLayerRef.current = activeLayer;

  const isLiveStreamRef = useRef(true);
  isLiveStreamRef.current = isLiveStream;

  const activeLayerData = useMemo(() => {
    return ARCHITECTURE_LAYERS.find((l) => l.key === activeLayer) || null;
  }, [activeLayer]);

  const selectLayer = useCallback((layer: LayerKey) => {
    setActiveLayer((prev) => (prev === layer ? 'all' : layer));
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth || 520;
    let height = container.clientHeight || 560;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup with architectural isometric perspective
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    // 3/4 isometric architectural view
    camera.position.set(5.8, 4.4, 6.8);
    camera.lookAt(0, 0, 0);

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
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to blueprint view', e);
      setWebGlAvailable(false);
      return;
    }

    // 2. Architectural Materials (Swiss Editorial Color Palette)
    const alabasterColor = new THREE.Color('#FFFFFF');
    const surfaceColor = new THREE.Color('#EAE5DA');
    const graphiteColor = new THREE.Color('#171717');
    const mutedColor = new THREE.Color('#77736B');
    const borderColor = new THREE.Color('#D8D3C8');
    const orangeColor = new THREE.Color('#E76F3C');

    // Shared Materials
    const slabMaterial = new THREE.MeshStandardMaterial({
      color: surfaceColor,
      roughness: 0.35,
      metalness: 0.1,
      transparent: true,
      opacity: 0.94,
    });

    const graphiteMaterial = new THREE.MeshStandardMaterial({
      color: graphiteColor,
      roughness: 0.4,
      metalness: 0.6,
      transparent: true,
      opacity: 0.95,
    });

    const orangeAccentMaterial = new THREE.MeshStandardMaterial({
      color: orangeColor,
      roughness: 0.25,
      metalness: 0.3,
      emissive: orangeColor,
      emissiveIntensity: 0.25,
    });

    const activeGlowMaterial = new THREE.MeshStandardMaterial({
      color: orangeColor,
      roughness: 0.2,
      emissive: orangeColor,
      emissiveIntensity: 0.75,
    });

    const wireframeLineMaterial = new THREE.LineBasicMaterial({
      color: borderColor,
      transparent: true,
      opacity: 0.6,
    });

    const orangeLineMaterial = new THREE.LineBasicMaterial({
      color: orangeColor,
      transparent: true,
      opacity: 0.85,
    });

    // Helper: Add wireframe edges to mesh
    const addEdges = (mesh: THREE.Mesh, group: THREE.Group, color = borderColor) => {
      const edges = new THREE.EdgesGeometry(mesh.geometry);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.55 })
      );
      mesh.add(line);
    };

    // Master Ecosystem Group (tilts with mouse parallax)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ==========================================
    // LAYER 1 (TOP): CLIENT & FRONTEND LAYER (Y: +2.1)
    // ==========================================
    const frontendGroup = new THREE.Group();
    frontendGroup.position.y = 2.05;
    masterGroup.add(frontendGroup);

    // UI Window Viewport Slab
    const uiSlabGeo = new THREE.BoxGeometry(3.6, 0.08, 2.6);
    const uiSlabMat = new THREE.MeshStandardMaterial({
      color: alabasterColor,
      roughness: 0.2,
      metalness: 0.05,
      transparent: true,
      opacity: 0.96,
    });
    const uiSlab = new THREE.Mesh(uiSlabGeo, uiSlabMat);
    frontendGroup.add(uiSlab);
    addEdges(uiSlab, frontendGroup, borderColor);

    // UI Browser Chrome Top Bar
    const chromeBarGeo = new THREE.BoxGeometry(3.4, 0.04, 0.3);
    const chromeBar = new THREE.Mesh(chromeBarGeo, slabMaterial);
    chromeBar.position.set(0, 0.06, -1.05);
    frontendGroup.add(chromeBar);

    // 3 Browser Window Dots
    const dotGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.03, 12);
    const dot1 = new THREE.Mesh(dotGeo, orangeAccentMaterial);
    dot1.position.set(-1.45, 0.09, -1.05);
    const dot2 = new THREE.Mesh(dotGeo, slabMaterial);
    dot2.position.set(-1.32, 0.09, -1.05);
    const dot3 = new THREE.Mesh(dotGeo, slabMaterial);
    dot3.position.set(-1.19, 0.09, -1.05);
    frontendGroup.add(dot1, dot2, dot3);

    // Left Navigation Sidebar Module (Next.js App Router)
    const navModuleGeo = new THREE.BoxGeometry(0.8, 0.04, 1.8);
    const navModule = new THREE.Mesh(navModuleGeo, slabMaterial);
    navModule.position.set(-1.25, 0.06, 0.15);
    frontendGroup.add(navModule);
    addEdges(navModule, frontendGroup);

    // Interactive Dashboard Card (React Component Hierarchy)
    const dashCardGeo = new THREE.BoxGeometry(2.2, 0.06, 1.1);
    const dashCard = new THREE.Mesh(dashCardGeo, graphiteMaterial);
    dashCard.position.set(0.45, 0.07, -0.2);
    frontendGroup.add(dashCard);
    addEdges(dashCard, frontendGroup, orangeColor);

    // Nested Component Cards
    const subCardGeo1 = new THREE.BoxGeometry(0.95, 0.04, 0.5);
    const subCard1 = new THREE.Mesh(subCardGeo1, slabMaterial);
    subCard1.position.set(-0.05, 0.12, -0.2);
    const subCardGeo2 = new THREE.BoxGeometry(0.95, 0.04, 0.5);
    const subCard2 = new THREE.Mesh(subCardGeo2, orangeAccentMaterial);
    subCard2.position.set(1.0, 0.12, -0.2);
    frontendGroup.add(subCard1, subCard2);

    // Bottom Telemetry Strip
    const bottomStripGeo = new THREE.BoxGeometry(2.2, 0.03, 0.45);
    const bottomStrip = new THREE.Mesh(bottomStripGeo, slabMaterial);
    bottomStrip.position.set(0.45, 0.06, 0.7);
    frontendGroup.add(bottomStrip);

    // ==========================================
    // LAYER 2: API GATEWAY & BACKEND SERVICES (Y: +0.95)
    // ==========================================
    const backendGroup = new THREE.Group();
    backendGroup.position.y = 0.95;
    masterGroup.add(backendGroup);

    // Backend Grid Substrate
    const backendSlabGeo = new THREE.BoxGeometry(3.6, 0.06, 2.6);
    const backendSlab = new THREE.Mesh(backendSlabGeo, slabMaterial);
    backendGroup.add(backendSlab);
    addEdges(backendSlab, backendGroup);

    // Central API Gateway Hub
    const gatewayGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.22, 8);
    const gateway = new THREE.Mesh(gatewayGeo, graphiteMaterial);
    gateway.position.set(0, 0.14, 0);
    backendGroup.add(gateway);
    addEdges(gateway, backendGroup, orangeColor);

    // Gateway Active Status Halo
    const haloGeo = new THREE.TorusGeometry(0.55, 0.02, 8, 32);
    const halo = new THREE.Mesh(haloGeo, orangeAccentMaterial);
    halo.rotation.x = Math.PI / 2;
    halo.position.set(0, 0.18, 0);
    backendGroup.add(halo);

    // Microservice A: Python / FastAPI Service Node
    const pyServiceGeo = new THREE.BoxGeometry(0.85, 0.28, 0.8);
    const pyService = new THREE.Mesh(pyServiceGeo, graphiteMaterial);
    pyService.position.set(-1.15, 0.17, -0.55);
    backendGroup.add(pyService);
    addEdges(pyService, backendGroup, orangeColor);

    // Microservice B: Node.js / Express Service Node
    const nodeServiceGeo = new THREE.BoxGeometry(0.85, 0.28, 0.8);
    const nodeService = new THREE.Mesh(nodeServiceGeo, graphiteMaterial);
    nodeService.position.set(1.15, 0.17, -0.55);
    backendGroup.add(nodeService);
    addEdges(nodeService, backendGroup);

    // Auth & Rate Limiter Module
    const authGeo = new THREE.BoxGeometry(0.7, 0.22, 0.6);
    const authModule = new THREE.Mesh(authGeo, slabMaterial);
    authModule.position.set(0, 0.14, 0.85);
    backendGroup.add(authModule);
    addEdges(authModule, backendGroup);

    // Circuit Bus Connections (API Gateway to Services)
    const busLinePoints = [
      new THREE.Vector3(0, 0.14, 0),
      new THREE.Vector3(-1.15, 0.14, -0.55),
      new THREE.Vector3(0, 0.14, 0),
      new THREE.Vector3(1.15, 0.14, -0.55),
      new THREE.Vector3(0, 0.14, 0),
      new THREE.Vector3(0, 0.14, 0.85),
    ];
    const busGeo = new THREE.BufferGeometry().setFromPoints(busLinePoints);
    const busLines = new THREE.LineSegments(busGeo, orangeLineMaterial);
    backendGroup.add(busLines);

    // ==========================================
    // LAYER 3: AI & NEURAL PROCESSING ENGINE (Y: -0.15)
    // ==========================================
    const aiGroup = new THREE.Group();
    aiGroup.position.y = -0.15;
    masterGroup.add(aiGroup);

    // Neural Lattice Substrate (Open architecture wireframe grid)
    const aiGridGeo = new THREE.BoxGeometry(3.6, 0.05, 2.6);
    const aiGrid = new THREE.Mesh(aiGridGeo, slabMaterial);
    aiGroup.add(aiGrid);
    addEdges(aiGrid, aiGroup, orangeColor);

    // Neural Nodes Matrix
    // Layer I: 3 Input feature nodes
    // Layer H: 4 Hidden synaptic nodes (pulsing)
    // Layer O: 2 Output inference heads
    const inputNodes: THREE.Mesh[] = [];
    const hiddenNodes: THREE.Mesh[] = [];
    const outputNodes: THREE.Mesh[] = [];

    const nodeSphereGeo = new THREE.SphereGeometry(0.11, 16, 16);
    const hiddenSphereGeo = new THREE.SphereGeometry(0.14, 16, 16);

    // Inputs (X: -1.1)
    const inputPositions = [-0.65, 0, 0.65];
    inputPositions.forEach((z) => {
      const node = new THREE.Mesh(nodeSphereGeo, graphiteMaterial);
      node.position.set(-1.1, 0.22, z);
      aiGroup.add(node);
      inputNodes.push(node);
    });

    // Hidden Synaptic Cluster (X: 0)
    const hiddenPositions = [-0.9, -0.3, 0.3, 0.9];
    hiddenPositions.forEach((z) => {
      const node = new THREE.Mesh(hiddenSphereGeo, activeGlowMaterial);
      node.position.set(0, 0.25, z);
      aiGroup.add(node);
      hiddenNodes.push(node);
    });

    // Output Inference Nodes (X: +1.1)
    const outputPositions = [-0.45, 0.45];
    outputPositions.forEach((z) => {
      const node = new THREE.Mesh(nodeSphereGeo, orangeAccentMaterial);
      node.position.set(1.1, 0.22, z);
      aiGroup.add(node);
      outputNodes.push(node);
    });

    // Synaptic Connection Rays
    const synapsePoints: THREE.Vector3[] = [];
    inputNodes.forEach((inp) => {
      hiddenNodes.forEach((hid) => {
        synapsePoints.push(inp.position.clone(), hid.position.clone());
      });
    });
    hiddenNodes.forEach((hid) => {
      outputNodes.forEach((out) => {
        synapsePoints.push(hid.position.clone(), out.position.clone());
      });
    });

    const synapseGeo = new THREE.BufferGeometry().setFromPoints(synapsePoints);
    const synapseMat = new THREE.LineBasicMaterial({
      color: orangeColor,
      transparent: true,
      opacity: 0.5,
    });
    const synapseLines = new THREE.LineSegments(synapseGeo, synapseMat);
    aiGroup.add(synapseLines);

    // Floating Central Tensor Matrix (Slowly rotating icosahedron wireframe)
    const tensorGeo = new THREE.IcosahedronGeometry(0.38, 0);
    const tensorMat = new THREE.MeshStandardMaterial({
      color: orangeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const tensorMesh = new THREE.Mesh(tensorGeo, tensorMat);
    tensorMesh.position.set(0, 0.55, 0);
    aiGroup.add(tensorMesh);

    // ==========================================
    // LAYER 4: DISTRIBUTED DATA & STORAGE (Y: -1.25)
    // ==========================================
    const dataGroup = new THREE.Group();
    dataGroup.position.y = -1.25;
    masterGroup.add(dataGroup);

    // Storage Bay Substrate
    const dataSlabGeo = new THREE.BoxGeometry(3.6, 0.06, 2.6);
    const dataSlab = new THREE.Mesh(dataSlabGeo, slabMaterial);
    dataGroup.add(dataSlab);
    addEdges(dataSlab, dataGroup);

    // Relational Database (PostgreSQL Disk Drums)
    const diskDrumGroup = new THREE.Group();
    diskDrumGroup.position.set(-1.05, 0.26, -0.4);
    dataGroup.add(diskDrumGroup);

    const drumGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.16, 24);
    const drum1 = new THREE.Mesh(drumGeo, graphiteMaterial);
    drum1.position.y = 0;
    const drum2 = new THREE.Mesh(drumGeo, graphiteMaterial);
    drum2.position.y = 0.2;
    const drum3 = new THREE.Mesh(drumGeo, graphiteMaterial);
    drum3.position.y = 0.4;
    diskDrumGroup.add(drum1, drum2, drum3);

    // Disk Divider Rings (Swiss Vermilion)
    const ringGeo = new THREE.TorusGeometry(0.46, 0.02, 8, 32);
    const ring1 = new THREE.Mesh(ringGeo, orangeAccentMaterial);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 0.1;
    const ring2 = new THREE.Mesh(ringGeo, orangeAccentMaterial);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = 0.3;
    diskDrumGroup.add(ring1, ring2);

    // Document Store (MongoDB Clustered Cubes)
    const docGeo = new THREE.BoxGeometry(0.65, 0.4, 0.65);
    const docStore = new THREE.Mesh(docGeo, graphiteMaterial);
    docStore.position.set(0.95, 0.23, -0.4);
    dataGroup.add(docStore);
    addEdges(docStore, dataGroup, orangeColor);

    // In-Memory Cache (Redis Fast Memory Module)
    const cacheGeo = new THREE.BoxGeometry(0.85, 0.25, 0.55);
    const cacheModule = new THREE.Mesh(cacheGeo, slabMaterial);
    cacheModule.position.set(0, 0.16, 0.65);
    dataGroup.add(cacheModule);
    addEdges(cacheModule, dataGroup);

    // Cache Telemetry Line
    const cacheIndicatorGeo = new THREE.BoxGeometry(0.7, 0.03, 0.08);
    const cacheIndicator = new THREE.Mesh(cacheIndicatorGeo, orangeAccentMaterial);
    cacheIndicator.position.set(0, 0.3, 0.65);
    dataGroup.add(cacheIndicator);

    // ==========================================
    // LAYER 5 (BASE): CLOUD & DEVOPS INFRASTRUCTURE (Y: -2.35)
    // ==========================================
    const cloudGroup = new THREE.Group();
    cloudGroup.position.y = -2.35;
    masterGroup.add(cloudGroup);

    // Heavy Architectural Bedrock Plinth
    const plinthGeo = new THREE.BoxGeometry(4.2, 0.22, 3.2);
    const plinth = new THREE.Mesh(plinthGeo, slabMaterial);
    cloudGroup.add(plinth);
    addEdges(plinth, cloudGroup, mutedColor);

    // Server Rack Unit 1
    const rackGeo = new THREE.BoxGeometry(0.45, 0.45, 0.7);
    const rack1 = new THREE.Mesh(rackGeo, graphiteMaterial);
    rack1.position.set(-1.4, 0.33, 0);
    cloudGroup.add(rack1);
    addEdges(rack1, cloudGroup);

    // Server Rack LED status strip
    const ledStripGeo = new THREE.BoxGeometry(0.04, 0.35, 0.04);
    const ledStrip = new THREE.Mesh(ledStripGeo, activeGlowMaterial);
    ledStrip.position.set(-1.16, 0.33, 0.2);
    cloudGroup.add(ledStrip);

    // Kubernetes Container Cluster (4 Modular Pods)
    const podGeo = new THREE.BoxGeometry(0.34, 0.34, 0.34);
    const podPositions = [
      [-0.45, -0.45],
      [-0.45, 0.45],
      [0.35, -0.45],
      [0.35, 0.45],
    ];
    podPositions.forEach(([x, z], idx) => {
      const pod = new THREE.Mesh(podGeo, idx === 1 ? orangeAccentMaterial : graphiteMaterial);
      pod.position.set(x, 0.28, z);
      cloudGroup.add(pod);
      addEdges(pod, cloudGroup);
    });

    // CI/CD Deployment Pipeline Tracks
    const trackPoints = [
      new THREE.Vector3(1.1, 0.12, -1.0),
      new THREE.Vector3(1.1, 0.12, 1.0),
      new THREE.Vector3(1.4, 0.12, -1.0),
      new THREE.Vector3(1.4, 0.12, 1.0),
    ];
    const trackGeo = new THREE.BufferGeometry().setFromPoints(trackPoints);
    const trackLines = new THREE.LineSegments(trackGeo, orangeLineMaterial);
    cloudGroup.add(trackLines);

    // Pipeline Stage Nodes (Build -> Test -> Deploy)
    const stageGeo = new THREE.BoxGeometry(0.24, 0.12, 0.24);
    const stage1 = new THREE.Mesh(stageGeo, graphiteMaterial);
    stage1.position.set(1.25, 0.18, -0.6);
    const stage2 = new THREE.Mesh(stageGeo, graphiteMaterial);
    stage2.position.set(1.25, 0.18, 0);
    const stage3 = new THREE.Mesh(stageGeo, activeGlowMaterial);
    stage3.position.set(1.25, 0.18, 0.6);
    cloudGroup.add(stage1, stage2, stage3);

    // ==========================================
    // VERTICAL ARCHITECTURAL CONDUITS & DATA PARTICLES
    // ==========================================
    // 4 Corner Structural Conduit Pillars
    const cornerPillarGeo = new THREE.CylinderGeometry(0.02, 0.02, 4.6, 8);
    const pillarCoords = [
      [-1.7, -1.2],
      [1.7, -1.2],
      [-1.7, 1.2],
      [1.7, 1.2],
    ];
    pillarCoords.forEach(([x, z]) => {
      const pillar = new THREE.Mesh(cornerPillarGeo, wireframeLineMaterial);
      pillar.position.set(x, -0.15, z);
      masterGroup.add(pillar);
    });

    // Active Vertical Data Stream Particle System
    // Simulates live HTTP calls, database reads, neural inferences, and deployments
    const particleCount = 72;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount);
    const particleConduitIndices = new Uint8Array(particleCount);

    // 4 conduit pathways through the stack
    const conduitPillars = [
      { x: 0, z: 0 },         // Core Gateway & AI pipeline
      { x: -1.15, z: -0.55 }, // Python Backend & PostgreSQL pipeline
      { x: 1.15, z: -0.55 },  // Node Backend & MongoDB pipeline
      { x: 1.25, z: 0.6 },    // Cloud CI/CD pipeline
    ];

    for (let i = 0; i < particleCount; i++) {
      const conduitIdx = i % conduitPillars.length;
      particleConduitIndices[i] = conduitIdx;
      const conduit = conduitPillars[conduitIdx];

      // Jitter around the conduit centerline
      particlePositions[i * 3 + 0] = conduit.x + (Math.random() - 0.5) * 0.12;
      // Spread vertically through the entire stack (-2.4 to +2.2)
      particlePositions[i * 3 + 1] = -2.3 + Math.random() * 4.4;
      particlePositions[i * 3 + 2] = conduit.z + (Math.random() - 0.5) * 0.12;

      // Speed of packet transmission
      particleVelocities[i] = 0.018 + Math.random() * 0.028;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particlesMat = new THREE.PointsMaterial({
      color: orangeColor,
      size: 0.09,
      transparent: true,
      opacity: 0.9,
      blending: THREE.NormalBlending,
    });
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    masterGroup.add(particleSystem);

    // ==========================================
    // LIGHTING SETUP (Warm Editorial Architectural Rig)
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xf5f2ea, 1.8);
    scene.add(ambientLight);

    // Key architectural directional light (casts crisp geometric contours)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(6, 8, 5);
    scene.add(keyLight);

    // Secondary fill light
    const fillLight = new THREE.DirectionalLight(0xeae5da, 1.2);
    fillLight.position.set(-6, 3, -4);
    scene.add(fillLight);

    // Swiss Vermilion accent point light (situated near AI & Gateway)
    const orangePointLight = new THREE.PointLight(0xe76f3c, 25, 9);
    orangePointLight.position.set(-0.5, 0.4, 1.5);
    scene.add(orangePointLight);

    // ==========================================
    // INTERACTION & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.28;
      mouseY = y * 0.22;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    setIsLoaded(true);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const currentActive = activeLayerRef.current;
      const live = isLiveStreamRef.current;

      if (!prefersReducedMotion) {
        // Continuous gentle architectural drift (never aggressive)
        const idleRotY = Math.sin(elapsedTime * 0.3) * 0.08;
        const idleRotX = Math.cos(elapsedTime * 0.25) * 0.04;

        // Smooth mouse damping
        targetRotationX += (mouseY + idleRotX - targetRotationX) * 0.06;
        targetRotationY += (mouseX + idleRotY - targetRotationY) * 0.06;

        masterGroup.rotation.y = targetRotationY;
        masterGroup.rotation.x = targetRotationX;

        // Neural cluster breathing & matrix rotation
        tensorMesh.rotation.x = elapsedTime * 0.4;
        tensorMesh.rotation.y = elapsedTime * 0.55;

        // Pulsing synaptic hidden nodes
        const pulse = 0.5 + Math.sin(elapsedTime * 3.0) * 0.35;
        activeGlowMaterial.emissiveIntensity = pulse;

        // API Gateway halo spin
        halo.rotation.z = elapsedTime * 0.6;

        // Animate Data Stream Particles
        if (live) {
          const positions = particlesGeo.attributes.position.array as Float32Array;
          for (let i = 0; i < particleCount; i++) {
            // Direction: travel down from Frontend (+2.1) to Cloud (-2.35) or reverse
            const vel = particleVelocities[i];
            const isAscending = i % 2 === 0;

            if (isAscending) {
              positions[i * 3 + 1] += vel;
              if (positions[i * 3 + 1] > 2.2) {
                positions[i * 3 + 1] = -2.3;
              }
            } else {
              positions[i * 3 + 1] -= vel;
              if (positions[i * 3 + 1] < -2.3) {
                positions[i * 3 + 1] = 2.2;
              }
            }
          }
          particlesGeo.attributes.position.needsUpdate = true;
        }

        // Layer Isolation Animation (smooth elevation on active selection)
        const targetElevation = 0.3;
        frontendGroup.position.y = 2.05 + (currentActive === 'frontend' ? targetElevation : 0);
        backendGroup.position.y = 0.95 + (currentActive === 'backend' ? targetElevation : 0);
        aiGroup.position.y = -0.15 + (currentActive === 'ai' ? targetElevation : 0);
        dataGroup.position.y = -1.25 + (currentActive === 'database' ? targetElevation : 0);
        cloudGroup.position.y = -2.35 + (currentActive === 'cloud' ? targetElevation : 0);
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
      // Dispose shared geometries & materials
      uiSlabGeo.dispose();
      uiSlabMat.dispose();
      backendSlabGeo.dispose();
      aiGridGeo.dispose();
      dataSlabGeo.dispose();
      plinthGeo.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      slabMaterial.dispose();
      graphiteMaterial.dispose();
      orangeAccentMaterial.dispose();
      activeGlowMaterial.dispose();
      wireframeLineMaterial.dispose();
      orangeLineMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Interactive Layer Filter Pills (Modern Swiss Monospace Header) */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-swiss-border text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-swiss-orange inline-block" />
          <span className="font-bold text-swiss-text tracking-wider uppercase">
            SOFTWARE ECOSYSTEM
          </span>
          <span className="text-swiss-muted hidden sm:inline">[INTERACTIVE 3D]</span>
        </div>

        {/* Live Data Flow Indicator Toggle */}
        <button
          onClick={() => setIsLiveStream((prev) => !prev)}
          className="flex items-center gap-1.5 px-2 py-0.5 border border-swiss-border bg-white text-swiss-muted hover:text-swiss-orange hover:border-swiss-orange transition-colors text-[11px]"
          title="Toggle live telemetry stream"
        >
          {isLiveStream ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-swiss-orange animate-pulse" />
              <span>LIVE DATA STREAM</span>
              <Pause className="w-3 h-3 ml-0.5 text-swiss-muted" />
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-swiss-muted" />
              <span>STREAM PAUSED</span>
              <Play className="w-3 h-3 ml-0.5 text-swiss-orange" />
            </>
          )}
        </button>
      </div>

      {/* Main 3D Container & Interactive Canvas */}
      <div className="relative w-full h-[400px] sm:h-[480px] md:h-[530px] lg:h-[560px] flex items-center justify-center overflow-hidden">
        {webGlAvailable ? (
          <div
            ref={mountRef}
            className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Interactive 3D Software Architecture Stack"
          />
        ) : (
          /* High-Fidelity Swiss Blueprint Fallback */
          <div className="w-full h-full p-6 flex flex-col justify-between bg-white border border-swiss-border">
            <div className="font-mono text-xs uppercase text-swiss-muted pb-3 border-b border-swiss-border flex justify-between">
              <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
              <span className="text-swiss-orange">VERIFIED SPECIFICATION</span>
            </div>
            <div className="space-y-3 py-4">
              {ARCHITECTURE_LAYERS.map((layer) => (
                <div
                  key={layer.key}
                  className="p-3 border border-swiss-border bg-swiss-surface flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <layer.icon className="w-4 h-4 text-swiss-orange" />
                    <div>
                      <span className="font-mono text-xs text-swiss-muted block">
                        TIER {layer.num}
                      </span>
                      <span className="font-bold text-sm text-swiss-text">{layer.label}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-swiss-orange block">
                      {layer.metricValue}
                    </span>
                    <span className="text-[11px] text-swiss-muted font-mono">{layer.metricLabel}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="font-mono text-[11px] text-swiss-muted pt-2 border-t border-swiss-border text-center">
              LEAD SOFTWARE ENGINEER // SYSTEM SPECIFICATION // 2026
            </div>
          </div>
        )}

        {/* 3D Tier Quick Tags on Right Side */}
        <div className="absolute right-2 top-4 bottom-4 flex flex-col justify-between pointer-events-none text-[10px] font-mono text-swiss-muted tracking-tight select-none">
          <div className="flex items-center gap-1.5 justify-end">
            <span className="hidden sm:inline">01 FRONTEND</span>
            <span className="w-1.5 h-1.5 border border-swiss-border bg-white" />
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <span className="hidden sm:inline">02 BACKEND &amp; API</span>
            <span className="w-1.5 h-1.5 border border-swiss-border bg-white" />
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <span className="hidden sm:inline text-swiss-orange font-bold">03 AI &amp; ML ENGINE</span>
            <span className="w-1.5 h-1.5 bg-swiss-orange" />
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <span className="hidden sm:inline">04 DATABASES</span>
            <span className="w-1.5 h-1.5 border border-swiss-border bg-white" />
          </div>
          <div className="flex items-center gap-1.5 justify-end">
            <span className="hidden sm:inline">05 CLOUD &amp; DEVOPS</span>
            <span className="w-1.5 h-1.5 border border-swiss-border bg-white" />
          </div>
        </div>
      </div>

      {/* Layer Navigation Tabs (Bottom Controls) */}
      <div className="w-full pt-3 border-t border-swiss-border space-y-3">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setActiveLayer('all')}
            className={`px-2.5 py-1 text-xs font-mono border transition-all ${
              activeLayer === 'all'
                ? 'bg-swiss-text text-white border-swiss-text font-bold'
                : 'bg-white text-swiss-muted border-swiss-border hover:border-swiss-text hover:text-swiss-text'
            }`}
          >
            [ALL TIERS]
          </button>
          {ARCHITECTURE_LAYERS.map((layer) => {
            const isSelected = activeLayer === layer.key;
            return (
              <button
                key={layer.key}
                onClick={() => selectLayer(layer.key)}
                className={`px-2.5 py-1 text-xs font-mono border flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-swiss-orange text-white border-swiss-orange font-bold shadow-sm'
                    : 'bg-white text-swiss-text border-swiss-border hover:border-swiss-orange hover:text-swiss-orange'
                }`}
              >
                <span>{layer.num}</span>
                <span>{layer.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Inspector Panel */}
        <div className="p-3.5 border border-swiss-border bg-white transition-all duration-300">
          {activeLayerData ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-swiss-orange inline-block" />
                  <span className="font-mono text-xs text-swiss-orange font-bold uppercase">
                    TIER {activeLayerData.num} — {activeLayerData.label}
                  </span>
                </div>
                <div className="font-mono text-[11px] text-swiss-muted flex items-center gap-1">
                  <span>{activeLayerData.metricLabel}:</span>
                  <span className="font-bold text-swiss-text">{activeLayerData.metricValue}</span>
                </div>
              </div>

              <p className="text-xs text-swiss-muted font-sans leading-relaxed">
                {activeLayerData.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {activeLayerData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-swiss-surface border border-swiss-border text-swiss-text"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-swiss-orange" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="space-y-0.5">
                <span className="font-mono text-[11px] font-bold text-swiss-text uppercase block">
                  FULL-STACK &amp; AI SOFTWARE ARCHITECTURE
                </span>
                <span className="text-swiss-muted text-[11px]">
                  Select any tier to elevate that layer and inspect production capabilities.
                </span>
              </div>
              <div className="font-mono text-[10px] text-swiss-orange uppercase tracking-wider shrink-0">
                [ 5 TIERS // FULL END-TO-END ]
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
