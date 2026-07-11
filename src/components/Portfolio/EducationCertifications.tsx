import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';
import { getCloudinaryImageUrl, getCloudinarySrcSet } from '../../lib/cloudinary';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl: string;
}

const defaultEducations = [
  {
    institution: 'Top Kids School',
    degree: 'CBSE (10th)',
    year: '2021 - 2022',
    location: 'Guntur, Andhra Pradesh, India',
    description: 'Finished high school with a primary focus on foundational courses in mathematics, sciences and languages.',
    image: '/brc.jpg'
  },
  {
    institution: 'Vidwan Junior College',
    degree: 'Intermediate (11th and 12th)',
    year: '2022 - 2024',
    location: 'Guntur, Andhra Pradesh, India',
    description: 'Focused on Mathematics, Physics, and Chemistry with consistent academic performance and problem-solving abilities.',
    image: '/btc.jpg'
  },
  {
    institution: 'KL University',
    degree: 'B.Tech in CSE - Honors through Research (Ongoing)',
    year: '2024 - 2028',
    location: 'Vijayawada, Andhra Pradesh, India',
    description: 'Currently pursuing B.Tech with interests in software engineering, algorithms, web development in Research track.',
    image: '/klu.jpg'
  }
];

const staticCertifications: Certification[] = [
  {
    id: 1,
    name: 'AWS CP-02F: AWS Certified Cloud Practitioner',
    issuer: 'Amaxon Web Services (AWS)',
    year: 'May 2026',
    description: 'Fundamentals of cloud computing, Amazon web services, core solutions, and security, compliance, and pricing best practices.',
    imageUrl: 'https://res.cloudinary.com/xwva4r80/image/upload/f_auto,q_auto/AWS_Certified_Cloud_Practitioner_certificate_page-0001_rxylbi'
  },
  {
    id: 2,
    name: 'Microsoft Git Copilot Certification',
    issuer: 'Microsoft',
    year: 'Nov 2025',
    description: 'Demonstrated proficiency in GitHub Copilot, leveraging AI-assisted coding to enhance software development productivity and developer efficiency.',
    imageUrl: 'https://res.cloudinary.com/xwva4r80/image/upload/f_auto,q_auto/Microsoft_Github_Copilot_Certification_d0s88f'
  },
  {
    id: 3,
    name: 'Mobile App Development with React Native',
    issuer: 'EduSkills Academy',
    year: '2026',
    description: 'Completed 8-week internship focusing on real-world applications and hands-on projects. Achieved good grade through program EduSkills.',
    imageUrl: 'https://res.cloudinary.com/xwva4r80/image/upload/f_auto,q_auto/Technical_Internship_Certification_page-0001_fn8ltx'
  },
  {
    id: 4,
    name: 'Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle University',
    year: 'Oct 2025',
    description: 'Certified for expertise in DevOps on Oracle Cloud, including building and managing automated pipelines and secure cloud deployments. Valid until October 31, 2027.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1762451528/whufyprvnnpgwjr8glbd.jpg'
  },
  {
    id: 5,
    name: 'Aviatrix Certified Engineer - Multicloud Network Associate (ACE)',
    issuer: 'Aviatrix',
    year: 'Oct 2025',
    description: 'Skilled in multicloud networking and security using Aviatrix to build and manage solutions across AWS, Azure, GCP, and Oracle Cloud.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1762451858/oz0kbbqbsii4cglr09lj.jpg'
  },
  {
    id: 6,
    name: 'Certified Essentials Automation Professional',
    issuer: 'Automation Anywhere',
    year: 'Jan 2026',
    description: 'Certified in essential automation practices with Automation Anywhere, covering core RPA concepts and workflow automation fundamentals.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1776617341/Essential_Automation_fdaumh.jpg'
  }
];

const CERT_IMAGE_WIDTHS = [320, 480, 640];

const EducationCertifications: React.FC = () => {
  const educationAnimation = useScrollAnimation(0.14);
  const c = useThemeColors();
  const certificationAnimation = useScrollAnimation(0.14);
  const certRow1Animation = useScrollAnimation(0.14);
  const certRow2Animation = useScrollAnimation(0.14);

  const getCertificateAnimationClass = (index: number) => {
    const mod = index % 3;
    if (mod === 0) return 'scroll-animate-cert-left';
    if (mod === 1) return 'scroll-animate-cert-up';
    return 'scroll-animate-cert-right';
  };

  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  return (
    <>
      <Box
        id="education"
        sx={{
          py: { xs: 5, md: 6 },
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
              Academic Path
            </Typography>
            <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 800, mb: 1.6, color: c.textPrimary }}>
              Education
            </Typography>
            <Typography align="center" sx={{ mb: 5, maxWidth: 640, mx: 'auto', color: c.textSecondary }}>
              My academic journey and the institutions that shaped my foundation.
            </Typography>
          </Box>
        </ScrollScatter>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.3 }}>
            {defaultEducations.map((edu, idx) => (
              <ScrollScatter key={idx} direction={idx % 3 === 0 ? "left" : idx % 3 === 1 ? "up" : "right"} distance={200}>
                <Box
                  ref={idx === 0 ? educationAnimation.ref : null}
                  sx={{
                    height: '100%',
                    opacity: educationAnimation.isVisible ? 1 : 0,
                    animationDelay: `${idx * 110}ms`
                  }}
                >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: '1px solid #ff9f1a',
                    background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                    p: { xs: 1.5, md: 2 },
                    boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
                    transform: { md: getCardTransform(idx) },
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' }
                    }
                  }}
                >
                  <CardContent sx={{ p: 1.6, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
                    <Typography variant="h5" title={edu.institution} sx={{ fontWeight: 800, color: '#ff9f1a', mb: 2, lineHeight: 1.3, fontSize: { xs: '1.2rem', md: '1.35rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#dbe2f3', fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                      {edu.degree}
                    </Typography>
                    <Typography sx={{ color: '#8f9ab4', fontSize: '0.875rem', mb: 2 }}>
                      {edu.year} • {edu.location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: c.textSecondary, lineHeight: 1.7, fontSize: '0.875rem', mt: 'auto' }}>
                      {edu.description}
                    </Typography>
                  </CardContent>
                </Card>
                </Box>
              </ScrollScatter>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        id="certificates"
        sx={{
          py: { xs: 5, md: 6 },
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(8,10,16,1) 0%, rgba(6,8,14,1) 100%)'
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
              Verified Learning
            </Typography>
            <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 800, mb: 1.6, color: c.textPrimary }}>
              Certificates
            </Typography>
            <Typography align="center" sx={{ mb: 5, maxWidth: 640, mx: 'auto', color: c.textSecondary }}>
              Selected certifications that reflect my continuous learning in software development and cloud technologies.
            </Typography>
          </Box>
        </ScrollScatter>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2.5, md: 4 } }}>
            {[...staticCertifications].sort((a, b) => b.id - a.id).map((cert, index) => {
              const animatingRow = index < 3 ? certRow1Animation : certRow2Animation;
              const isVisible = animatingRow.isVisible;
              const optimizedImage = getCloudinaryImageUrl(cert.imageUrl, 640);
              const srcSet = getCloudinarySrcSet(cert.imageUrl, CERT_IMAGE_WIDTHS);
              
              return (
              <ScrollScatter key={cert.id} direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} distance={200}>
                <Box
                  ref={index === 0 ? certRow1Animation.ref : (index === 3 ? certRow2Animation.ref : null)}
                  sx={{
                    height: '100%',
                    opacity: isVisible ? 1 : 0,
                    animationDelay: `${Math.floor(index / 3) * 150 + (index % 3) * 110}ms`
                  }}
                >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    border: '1px solid #ff9f1a',
                    background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                    p: { xs: 1.5, md: 2 },
                    boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
                    transform: { md: getCardTransform(index) },
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' }
                    }
                  }}
                >
                  {cert.imageUrl && (
                    <CardMedia
                      component="img"
                      image={optimizedImage}
                      srcSet={srcSet}
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      alt={`${cert.name} certificate`}
                      loading="lazy"
                      decoding="async"
                      width={340}
                      height={220}
                      sx={{
                        height: { xs: 210, sm: 220, md: 228 },
                        width: '100%',
                        objectFit: 'fill',
                        borderRadius: '12px',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                      }}
                    />
                  )}
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 2.25, px: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#eef2ff',
                        lineHeight: 1.35,
                        mb: 0.75,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {cert.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#ff9f1a', mb: 1, fontWeight: 600 }}>
                      {cert.issuer} • {cert.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#a9b4cc',
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {cert.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              </ScrollScatter>
            );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EducationCertifications;