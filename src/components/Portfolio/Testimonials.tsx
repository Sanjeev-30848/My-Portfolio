import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Container, Card, CardContent, IconButton } from '@mui/material';
import {
  FormatQuote as QuoteIcon,
  Star as StarIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  org: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Online Medical System - Medicare Connect',
    role: 'Team Member - Haindavi Pathakamudi',
    org: 'KL-University',
    quote:
      "Sanjeev delivered exactly what we team had thought — a clean, professional medical system that is easy to use. He understood our team requirements and delivered an application with good UI.",
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Service Management System',
    role: 'Reviewer',
    org: 'KL University',
    quote:
      "The service management system application has been designed well. Registration that used to take 15-20 minutes per manager for managing services now takes under 2 minutes. The mail sending option was brilliant idea that saves hours of manual verification during services for the customers. He added security for the system by implementing JWT Authentication module.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Tourism Home Stay',
    role: 'Team Leader - Dinesh Chandhu',
    org: 'KL University SDP Team Project',
    quote:
      "Having a professional website gave our team instant credibility. The admin panel makes it easy for guides and hosts to update content. We saw 40% more tourists after launching the site — it really helped tourists to  discover and understand our application.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const c = useThemeColors();

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextTestimonial, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: c.sectionBgAlt,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollScatter direction="up" distance={100}>
          <Box>
            <Typography
              sx={{
                color: c.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.11em',
                fontSize: '0.72rem',
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
              }}
            >
              Projects Feedback
            </Typography>

            <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: c.textPrimary }}>
              Testimonials
            </Typography>

            <Typography align="center" sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: c.textSecondary }}>
              What people say about working with me on their projects.
            </Typography>
          </Box>
        </ScrollScatter>

        <ScrollScatter direction="up" distance={150}>
          <Box sx={{ maxWidth: 800, mx: 'auto', position: 'relative' }}>
            <Card
              sx={{
                borderRadius: '16px',
                border: `1px solid ${c.accent}`,
                background: c.cardBg,
                p: { xs: 2.5, md: 4 },
                boxShadow: c.cardShadow,
                minHeight: { xs: 280, md: 260 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Quote Icon */}
                <QuoteIcon
                  sx={{
                    fontSize: 48,
                    color: 'rgba(255,159,26,0.2)',
                    transform: 'rotate(180deg)',
                    mb: 2,
                  }}
                />

                {/* Quote Text */}
                <Typography
                  sx={{
                    color: c.textSecondary,
                    fontSize: { xs: '1rem', md: '1.12rem' },
                    lineHeight: 1.9,
                    mb: 3,
                    fontStyle: 'italic',
                    minHeight: { xs: 100, md: 80 },
                  }}
                >
                  "{TESTIMONIALS[activeIndex].quote}"
                </Typography>

                {/* Rating */}
                <Box sx={{ display: 'flex', gap: 0.3, mb: 2 }}>
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 20, color: '#ff9f1a' }} />
                  ))}
                </Box>

                {/* Author */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                  <Box>
                    <Typography sx={{ color: c.textPrimary, fontWeight: 700, fontSize: '1rem' }}>
                      {TESTIMONIALS[activeIndex].name}
                    </Typography>
                    <Typography sx={{ color: '#ff9f1a', fontSize: '0.85rem', fontWeight: 600 }}>
                      {TESTIMONIALS[activeIndex].role} — {TESTIMONIALS[activeIndex].org}
                    </Typography>
                  </Box>

                  {/* Navigation */}
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <IconButton
                      onClick={() => { prevTestimonial(); setIsAutoPlaying(false); }}
                      aria-label="Previous testimonial"
                      sx={{
                        color: '#aeb8ce',
                        bgcolor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        width: 40,
                        height: 40,
                        '&:hover': { bgcolor: 'rgba(255,159,26,0.12)', borderColor: 'rgba(255,159,26,0.4)', color: '#ff9f1a' },
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>

                    {/* Dots */}
                    <Box sx={{ display: 'flex', gap: 0.8 }}>
                      {TESTIMONIALS.map((_, i) => (
                        <Box
                          key={i}
                          onClick={() => { setActiveIndex(i); setIsAutoPlaying(false); }}
                          sx={{
                            width: activeIndex === i ? 24 : 8,
                            height: 8,
                            borderRadius: '4px',
                            bgcolor: activeIndex === i ? c.accent : (c.isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'),
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </Box>

                    <IconButton
                      onClick={() => { nextTestimonial(); setIsAutoPlaying(false); }}
                      aria-label="Next testimonial"
                      sx={{
                        color: '#aeb8ce',
                        bgcolor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        width: 40,
                        height: 40,
                        '&:hover': { bgcolor: 'rgba(255,159,26,0.12)', borderColor: 'rgba(255,159,26,0.4)', color: '#ff9f1a' },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </ScrollScatter>
      </Container>
    </Box>
  );
};

export default Testimonials;
