import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { TechnicalSkills } from '@/components/sections/TechnicalSkills';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { EngineeringCapabilities } from '@/components/sections/EngineeringCapabilities';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { ProfessionalAchievements } from '@/components/sections/ProfessionalAchievements';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <TechnicalSkills />
      <FeaturedProjects />
      <EngineeringCapabilities />
      <Education />
      <Certifications />
      <ProfessionalAchievements />
      <GitHubActivity />
      <Contact />
    </>
  );
}
