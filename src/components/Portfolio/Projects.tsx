import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Dialog,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';
import { getCloudinaryImageUrl, getCloudinarySrcSet } from '../../lib/cloudinary';

interface CaseStudy {
  problem: string;
  approach: string;
  techDecisions: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string;
  //liveUrl: string;
  githubUrl: string;
  caseStudy: CaseStudy;
}
const STATIC_PROJECTS: Project[] = [
  {
    id: 4,
    title: 'Online Service Management System',
    description: 'Built an Online Service Management System using React, Spring Boot and MySQL. Implemented secure JWT authentication and scalable real-time messaging architecture.',
    imageUrl: 'https://res.cloudinary.com/xwva4r80/image/upload/f_auto,q_auto/Screenshot_2026-07-13_175810_vmjjr6', 
    technologies: 'React, Spring Boot, MySQL',

    githubUrl: '#',
    caseStudy: {
      problem: 'Traditional service booking and management systems are inefficient, causing delays, poor communication, and difficulty in tracking service requests.',
      approach: 'Develop an online service management system that enables users to book, track, and manage services in real time through a centralized web platform with automated notifications with secure JWT authentication. Designed the frontend with React and Backend with SpringBoot.',
      techDecisions: [
        'Spring Boot for scalable and secure RESTful backend services',
        'React for a responsive, type-safe user interface',
        'JWT Authentication for secure, stateless user access control',
        'Spring Security for role-based authorization and endpoint protection',
        'Hibernate (JPA) for efficient object-relational mapping and database operations',
        'MySQL for storing data and performing efficent database operations',
        'Swagger (OpenAPI) for interactive API documentation and testing',
      ],
      outcome: 'Developed a scalable online service management platform that streamlines service requests, enhances operational efficiency, and improves user satisfaction through real-time tracking and secure management.',
      metrics: [
        { label: 'Response Time', value: '< 200ms' },
        { label: 'Latency', value: '< 50ms' },
        { label: 'API Response', value: '< 200ms' },
        { label: 'Scalability', value: 'High' },
      ],
    },
  },
  {
    id: 3,
    title: 'MediCare Connect',
    description:
      'An online medical management system. Features streamlines patient registration, appointment scheduling, electronic medical records, and healthcare service management in one centralized system.',
    imageUrl:
      'https://res.cloudinary.com/xwva4r80/image/upload/f_auto,q_auto/Screenshot_2026-07-13_181324_sx3rxs',
    technologies: 'React',

    githubUrl: '#',
    caseStudy: {
      problem:
        'Healthcare facilities often rely on fragmented or manual processes to manage patient records, appointments, and medical information, leading to delays, data inconsistencies, and poor coordination. Patients face long waiting times and limited access to their health records, while administrators struggle with inefficient workflows. A centralized online medical management system is needed to improve operational efficiency, data accessibility, and the overall quality of healthcare services.',
      approach:
        'Built a Frontend react application with a focus on responsive design. Implemented an online medical management system. The Doctors dashboard that allows the doctors to Add , edit, and write prescriptions.The Admin dashboard is made to manage the whole application data. The Pharmacist dashboard is made to check the stocks of medicine, check the prescriptions given by doctor and give medications accordingly.',
      techDecisions: [
        'Chosen React for responsive User Interface',
        'Role Based Authentication for all the roles',
        'Implemented MySQL to store the data and manage CRUD operations',
      ],
      outcome:
        'Successfully made a reponsive online medical management system using only React and MySQL. This project has been done as a part of course in my 2-1 semester of Frontend Development and Frameworks, showcased the project in college hackathon.',
      metrics: [
        { label: 'Active Users', value: '150+' },
        { label: 'Doctors Registered', value: '20+' },
        { label: 'Avg Load Time', value: '1.8s' },
        { label: 'Medical Records', value: '100+' },
      ],
    },
  },
  {
    id: 2,
    title: 'Toursim Homestay Platform',
    description:
      "Built and deployed a comprehensive tourism homestay platform connecting travellers with local hosts, managing bookings, reviews, and communications. Implemented JWT authentication and a responsive design for seamless user experience across devices. ",
    imageUrl:
      'https://res.cloudinary.com/xwva4r80/image/upload/f_auto,q_auto/Screenshot_2026-07-13_183832_miskef',
    technologies: 'React, Spring Boot, MySQL',

    githubUrl: '#',
    caseStudy: {
      problem:
        'The tourism homestay platform lacked a centralized system for managing bookings, reviews, and communications between travellers and hosts. Where users find difficult to navigate and manage their stays.',
      approach:
        'Designed a comprehensive platform with features for homestay listings, booking management, user reviews, and secure communication. Implemented JWT authentication for user security and a responsive design for cross-device compatibility.',
      techDecisions: [
        'Maintained Version Control (Github) for development',
        'Used React for a dynamic and responsive frontend experience',
        'Used Spring Boot for backend services and RESTful API development',
        'Implemented MySQL for flexible and scalable data storage',
        'Implemented JWT authentication for secure user access and data protection',
        'Used Mui for consistent and accessible UI components',
        'Swagger (OpenAPI) for interactive API documentation and testing',
        'Email sending functionality for booking confirmations and notifications',
        'Role Based Authentication for different user roles (travellers, hosts, admins, guides)',
      ],
      outcome:
        'Developed a scalable tourism homestay platform that simplifies property bookings, enhances traveler experiences, and enables seamless communication between guests and hosts. The platform has been deployed for testing and is still in development for production, This platform results in increased bookings and improved user satisfaction.',
      metrics: [
        { label: 'Registered Travelers', value: '100+' },
        { label: 'Guides', value: '50+' },
        { label: 'Customer Rating', value: '4.6/5' },
        { label: 'Tech Stack', value: 'Full Stack' },
      ],
    },
  },
  // {
  //   id: 1,
  //   title: 'VIDHURA AI & Data Science Club',
  //   description:
  //     'Where creativity meets technology. VIDHURA unites thinkers and creators to push AI and data science boundaries through projects, collaboration, and research.',
  //   imageUrl:
  //     'https://res.cloudinary.com/dpff7l6hb/image/upload/v1760550280/lwcnwbbx9ep8j3y4lrrg.png',
  //   technologies: 'React, Node.js, MongoDB, Cloudinary',

  //   githubUrl: '#',
  //   caseStudy: {
  //     problem:
  //       'VIDHURA, KLU\'s AI & Data Science club, lacked an online identity. Club activities, member achievements, and event announcements were scattered across social media with no central repository. New students had difficulty discovering the club or understanding its mission.',
  //     approach:
  //       'Created a modern, content-driven website with sections for events, team members, research projects, and a blog. Used Cloudinary for media management and MongoDB for dynamic content that club admins can update without code changes.',
  //     techDecisions: [
  //       'Component-based architecture allows easy addition of new sections as the club grows',
  //       'Cloudinary integration for optimized image delivery — critical for event galleries',
  //       'MongoDB-backed CMS-like admin panel for non-technical club coordinators',
  //       'SEO-optimized pages to help the club appear in university-related searches',
  //     ],
  //     outcome:
  //       'Became the official web presence for VIDHURA. Increased club visibility and helped drive 40% more applications during the next recruitment cycle.',
  //     metrics: [
  //       { label: 'Monthly Visitors', value: '300+' },
  //       { label: 'Club Applications', value: '+40%' },
  //       { label: 'Pages', value: '12+' },
  //       { label: 'Media Assets', value: '50+' },
  //     ],
  //   },
  // },
];

const PROJECT_IMAGE_WIDTHS = [320, 480, 640, 800];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const c = useThemeColors();

  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: c.sectionBgAlt,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.34,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollScatter direction="up" distance={100}>
          <Box>
            <Typography
              sx={{
                color: '#ff9f1a',
                textTransform: 'uppercase',
                letterSpacing: '0.11em',
                fontSize: '0.72rem',
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
              }}
            >
              Featured Work
            </Typography>

            <Typography
              variant="h3"
              align="center"
              fontWeight={800}
              sx={{ mb: 1.4, color: c.textPrimary }}
            >
              Projects
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: c.textSecondary }}
            >
              Production-style builds where design clarity, feature depth, and
              clean engineering come together.
            </Typography>
          </Box>
        </ScrollScatter>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: '1fr 1fr 1fr',
            },
            gap: { xs: 3, sm: 4, md: 5 },
          }}
        >
          {[...STATIC_PROJECTS]
            .sort((a, b) => b.id - a.id)
            .map((project, index) => {
              const optimizedImage = getCloudinaryImageUrl(project.imageUrl, 640);
              const srcSet = getCloudinarySrcSet(project.imageUrl, PROJECT_IMAGE_WIDTHS);

              return (
                <ScrollScatter
                  key={project.id}
                  direction={
                    index % 3 === 0
                      ? 'left'
                      : index % 3 === 1
                      ? 'up'
                      : 'right'
                  }
                  distance={200}
                >
                  <Box sx={{ height: '100%' }}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '16px',
                        border: `1px solid ${c.accent}`,
                        background: c.cardBg,
                        p: { xs: 1.5, md: 2 },
                        boxShadow: c.cardShadow,
                        transform: { md: getCardTransform(index) },
                        transition:
                          'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': {
                          transform: {
                            md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)',
                          },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={optimizedImage}
                        srcSet={srcSet}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        width={340}
                        height={220}
                        onError={(e: any) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                        sx={{
                          width: '100%',
                          height: 220,
                          objectFit: 'cover',
                          borderRadius: '12px',
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />

                      <CardContent sx={{ flexGrow: 1, p: 2, px: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#eef2ff',
                            mb: 1.1,
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: '#a8b3ca',
                            mb: 2.3,
                            lineHeight: 1.75,
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Box>
                          {project.technologies
                            .split(',')
                            .map(
                              (tech) =>
                                tech.trim() && (
                                  <Chip
                                    key={tech}
                                    label={tech.trim()}
                                    size="small"
                                    sx={{
                                      mr: 0.8,
                                      mb: 0.8,
                                      bgcolor: 'rgba(255,159,26,0.16)',
                                      color: '#ff9f1a',
                                      border: 'none',
                                      fontWeight: 600,
                                      fontSize: '0.75rem',
                                      borderRadius: '6px',
                                      px: 0.5,
                                    }}
                                  />
                                )
                            )}
                        </Box>
                      </CardContent>

                      <Box sx={{ px: 2, pb: 2, pt: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Chip
                          label="Case Study"
                          clickable
                          onClick={() => setSelectedProject(project)}
                          deleteIcon={<ArrowForwardIcon sx={{ fontSize: 16, color: '#ff9f1a !important' }} />}
                          onDelete={() => setSelectedProject(project)}
                          sx={{
                            bgcolor: 'rgba(255,159,26,0.12)',
                            color: '#ff9f1a',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            border: '1px solid rgba(255,159,26,0.3)',
                            '&:hover': {
                              bgcolor: 'rgba(255,159,26,0.22)',
                            },
                            '& .MuiChip-deleteIcon': {
                              color: '#ff9f1a',
                              '&:hover': { color: '#ffb94d' },
                            },
                          }}
                        />
                      </Box>
                    </Card>
                  </Box>
                </ScrollScatter>
              );
            })}
        </Box>
      </Container>

      {/* Case Study Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            border: '1px solid #ff9f1a',
            background: 'linear-gradient(160deg, rgba(12,17,28,0.98), rgba(9,12,19,0.98))',
            backdropFilter: 'blur(20px)',
            maxHeight: '85vh',
            mx: { xs: 1, sm: 2 },
            my: { xs: 1.5, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            overscrollBehavior: 'none',
          },
        }}
      >
        {selectedProject && (
          <>
            {/* Fixed Header */}
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 3 }, 
              pb: { xs: 1.2, sm: 1.5, md: 2 },
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              bgcolor: 'rgb(12, 17, 28)',
              flexShrink: 0,
              zIndex: 10
            }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.5 }}>
                Case Study
              </Typography>
              <Typography variant="h4" sx={{ color: '#f4f7ff', fontWeight: 800, pr: { xs: 0, sm: 4 }, fontSize: { xs: '1.25rem', sm: '1.75rem' } }}>
                {selectedProject.title}
              </Typography>
            </Box>

            {/* Scrollable Content */}
            <Box sx={{ p: { xs: 1.5, sm: 3, md: 4 }, flex: 1, overflowY: 'auto', overscrollBehavior: 'contain' }}>

            {/* Metrics Row */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 0.8, sm: 1.5 }, mb: 4 }}>
              {selectedProject.caseStudy.metrics.map((m) => (
                <Box
                  key={m.label}
                  sx={{
                    p: { xs: 1.6, sm: 2 },
                    borderRadius: '12px',
                    bgcolor: 'rgba(255,159,26,0.08)',
                    border: '1px solid rgba(255,159,26,0.25)',
                    textAlign: 'center',
                    minWidth: 0,
                  }}
                >
                  <Typography sx={{ color: '#ff9f1a', fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.4rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.value}
                  </Typography>
                  <Typography sx={{ color: '#9faaC3', fontSize: { xs: '0.65rem', md: '0.75rem' }, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Problem */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🔍 The Problem
              </Typography>
              <Typography sx={{ color: '#c2cbdf', lineHeight: 1.85 }}>
                {selectedProject.caseStudy.problem}
              </Typography>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', my: 2 }} />

            {/* Approach */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🛠 My Approach
              </Typography>
              <Typography sx={{ color: '#c2cbdf', lineHeight: 1.85 }}>
                {selectedProject.caseStudy.approach}
              </Typography>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', my: 2 }} />

            {/* Technical Decisions */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ⚡ Technical Decisions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {selectedProject.caseStudy.techDecisions.map((decision, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: '#ff9f1a',
                        mt: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ color: '#c2cbdf', lineHeight: 1.75 }}>
                      {decision}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', my: 2 }} />

            {/* Outcome */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,159,26,0.12), rgba(255,159,26,0.06))',
                border: '1px solid rgba(255,159,26,0.3)',
                mb: 4,
              }}
            >
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🎯 Outcome
              </Typography>
              <Typography sx={{ color: '#dbe3f5', lineHeight: 1.85 }}>
                {selectedProject.caseStudy.outcome}
              </Typography>
            </Box>
            </Box>

            <Box sx={{ 
              p: { xs: 1.2, sm: 2 }, 
              borderTop: '1px solid rgba(255,255,255,0.15)', 
              bgcolor: 'rgb(12, 17, 28)',
              mt: 'auto',
              flexShrink: 0,
              zIndex: 10
            }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => setSelectedProject(null)}
                sx={{
                  bgcolor: '#ff9f1a',
                  color: '#090c13',
                  py: 1,
                  fontWeight: 700,
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    bgcolor: '#ffb044',
                  }
                }}
              >
                Close
              </Button>
            </Box>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
