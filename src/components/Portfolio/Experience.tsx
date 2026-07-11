import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';

const experiences = [
  {
    organization: 'KLU SAC',
    role: 'Drafting Council',
    duration: 'June 2026 - Present',
    description: 'As Drafting council member, I have took the responsibilites of drafting SAC activites as well as helped in my research drafting.',
  },
  {
    organization: 'KL VEDA (Student Body)',
    role: 'Director, Research & Discovery wing',
    duration: 'Mar 2025 - July 2026',
    description: 'Focuses on Research driven projects, prototypes, publication of research papers and mentor UG students in their research field.'
  }
];

const Experience: React.FC = () => {
  const animation = useScrollAnimation(0.14);
  const c = useThemeColors();

  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 8 },
        position: 'relative',
        background: c.sectionBg
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.34
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
                mb: 1
              }}
            >
              Professional Journey
            </Typography>
            <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 800, mb: 1.6, color: c.textPrimary }}>
              Experience
            </Typography>
            <Typography align="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto', color: c.textSecondary }}>
              Here's a look at my work experience, leadership roles, and the fun I've had contributing to various clubs and platforms!
            </Typography>
          </Box>
        </ScrollScatter>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3.5 }}>
          {experiences.map((exp, idx) => (
            <ScrollScatter key={idx} direction={idx % 3 === 0 ? "left" : idx % 3 === 1 ? "up" : "right"} distance={200}>
              <Box
                ref={idx === 0 ? animation.ref : null}
                sx={{
                  height: '100%',
                  opacity: animation.isVisible ? 1 : 0,
                  animationDelay: `${idx * 110}ms`
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: `1px solid ${c.accent}`,
                    background: c.cardBg,
                    p: { xs: 2.5, md: 3 },
                    boxShadow: c.cardShadow,
                    transform: { md: getCardTransform(idx) },
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' },
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#ff9f1a', lineHeight: 1.3, fontSize: { xs: '1.25rem', md: '1.4rem' }, mb: 0.5 }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#eef2ff', lineHeight: 1.3, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
                        {exp.organization}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: '#ff9f1a',
                        opacity: 0.9,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        mb: 2.5,
                        display: 'inline-block',
                        p: '4px 10px',
                        background: 'rgba(255,159,26,0.1)',
                        borderRadius: '20px',
                        alignSelf: 'flex-start'
                      }}
                    >
                      {exp.duration}
                    </Typography>

                    <Typography variant="body2" sx={{ color: c.textSecondary, lineHeight: 1.8, fontSize: '0.95rem', flexGrow: 1 }}>
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </ScrollScatter>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
