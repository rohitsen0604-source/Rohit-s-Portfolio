# Rohit Sen — Lead Software Engineer | Personal Portfolio

A distinctive, premium, modern, interactive, enterprise-grade personal portfolio website for **Rohit Sen**, showcasing his professional identity, full work experience, technical expertise, engineering capabilities, projects, education, and credentials.

> **Professional Headline:**  
> *"Engineering Intelligent Digital Products. Building Scalable Software. Solving Real-World Problems."*

---

## 🚀 Key Highlights & Architectural Features

- **Framework**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Design Aesthetic**: Premium dark editorial theme, deep charcoal background (`#08090C`), emerald accents (`#10B981`), fine borders, ambient glow, and micro-interactions.
- **Centralized Content Management**: All profile details, work experience, projects, skills, and credentials are structured in typed TypeScript modules under `src/data/`.
- **Complete Reverse-Chronological Career Timeline**:
  1. **Black Grapes Softech** — Lead Software Developer (*Oct 2026 – Present*, Indore, MP, On-site)
  2. **04 O'Clock Technologies** — Software Engineer (*Aug 2026 – Present*, Remote)
  3. **Professional Freelancer** — Professional Freelancer (*Apr 2026 – Present*, Remote)
  4. **Zenvora Pvt. Ltd.** — Dual Progression:
     - *Position A*: AI/ML Engineer (*Jul 2026 – Nov 2026*, Indore, MP)
     - *Position B*: AI/ML Engineer Intern (*May 2026 – Jul 2026*, Indore, MP)
  5. **Ethara AI** — LLM Post Training Intern (*Oct 2025 – Jan 2026*, Indore, MP, On-site)
  6. **Unified Mentor Private Limited** — Data Analyst (*Feb 2025 – May 2025*, Remote)
- **Deep Case Study System**:
  - Detailed `/projects/[slug]` route featuring problem contexts, architectural solutions, workflow topologies, and key capabilities for:
    - **NeuroHR AI** (FastAPI, LangChain, ChromaDB, Hugging Face, Gemini API)
    - **GoRush** (Flutter, NestJS, PostgreSQL, WebSockets, Maps APIs)
    - **Climate Change Modeling for Agricultural Lands** (Random Forest, Streamlit, Folium, Pandas)
    - **Return Order Verification SaaS** (Android, Node.js, Express, Barcode/QR API)
- **Production-Ready & Search-Engine Optimized**:
  - Semantic HTML5, dynamic Open Graph metadata, structured JSON-ready sitemap (`/sitemap.xml`), and robots rules (`/robots.txt`).
  - Native API contact endpoint (`/api/contact`).
  - Custom desktop cursor with halo effect and subtle ambient lighting.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation
```bash
# Clone the repository
git clone https://github.com/rohitsen0604-source/Rohit-s-Portfolio.git
cd Rohit-s-Portfolio

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Production Build & Verification
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
Rohit-s-Portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Contact inquiry API handler
│   │   ├── projects/[slug]/page.tsx  # Dynamic project case study pages
│   │   ├── globals.css               # Editorial dark theme & Tailwind
│   │   ├── layout.tsx                # Root layout, metadata & font config
│   │   ├── not-found.tsx             # 404 handler
│   │   ├── page.tsx                  # Master portfolio one-page experience
│   │   ├── robots.ts                 # Search crawler instructions
│   │   └── sitemap.ts                # Auto-generated sitemap index
│   ├── components/
│   │   ├── layout/                   # Navbar, Footer, Mobile Navigation
│   │   ├── sections/                 # Hero, About, Experience, Skills, Projects,
│   │   │                             # Capabilities, Education, Certs, GitHub, Contact
│   │   └── ui/                       # Button, Badge, Card, SectionHeading, CustomCursor
│   ├── data/                         # Centralized typed content data files
│   │   ├── personalInfo.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── capabilities.ts
│   │   ├── education.ts
│   │   ├── certifications.ts
│   │   ├── achievements.ts
│   │   ├── githubActivity.ts
│   │   └── socialLinks.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts                  # TypeScript definitions
├── public/                           # Static assets & icons
├── tailwind.config.ts                # Theme tokens & custom palettes
├── tsconfig.json                     # Strict TypeScript configuration
└── package.json
```

---

## 👤 Personal Brand Identity

- **Name**: Rohit Sen
- **Primary Designation**: Lead Software Engineer
- **Positioning**: Software Engineer | Full-Stack Developer | AI/ML Engineer | Software Architect
- **Location**: Indore, Madhya Pradesh, India
- **LinkedIn**: [linkedin.com/in/rohit957](https://www.linkedin.com/in/rohit957/)
- **GitHub**: [github.com/rohitsen0604-source](https://github.com/rohitsen0604-source)
