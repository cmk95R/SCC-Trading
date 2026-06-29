// @ts-nocheck
import { useState, useRef, useEffect, useCallback } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { useT } from '../hooks/useT';

const exportImages = [
  '/exports/ex1.jpeg',
  '/exports/ex2.jpeg',
  '/exports/ex3.jpeg',
  '/exports/ex4.jpeg',
  '/exports/ex5.jpeg',
  '/exports/ex6.jpeg',

];

export default function ExportsCarousel() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 600) setItemsPerView(1);
      else if (w < 900) setItemsPerView(2);
      else setItemsPerView(3);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const maxIndex = Math.max(0, exportImages.length - itemsPerView);

  const goTo = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(i, maxIndex));
      setIndex(next);
    },
    [maxIndex],
  );

  const paginate = useCallback(
    (dir: number) => goTo(index + dir),
    [index, goTo],
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <Box
      id="exportaciones"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        background: '#fbfaf6',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.18em',
                fontSize: '0.78rem',
                display: 'inline-block',
                position: 'relative',
                pb: 1,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  bottom: 0,
                  transform: 'translateX(-50%)',
                  width: 28,
                  height: 2,
                  background: 'linear-gradient(90deg, #1b5e20, #f9a825)',
                  borderRadius: 1,
                },
              }}
            >
              {t.exports.overline}
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mt: 1.5,
                fontWeight: 700,
                color: 'primary.main',
                lineHeight: 1.15,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              {t.exports.title.split(' ')[0]}{' '}
              <Box
                component="span"
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  background: 'linear-gradient(90deg, #1b5e20 0%, #f9a825 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t.exports.title.split(' ').slice(1).join(' ') || ''}
              </Box>
            </Typography>
            
          </Box>
        </FadeInSection>

        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: { xs: 2.5, md: 4 },
              mx: { xs: -2, sm: -3, md: 0 },
            }}
          >
            <Box
              ref={trackRef}
              sx={{
                display: 'flex',
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'transform',
                transform: {
                  xs: `translateX(calc(-${index} * (100% / 1)))`,
                  sm: `translateX(calc(-${index} * (100% / 2)))`,
                  md: `translateX(calc(-${index} * (100% / 3)))`,
                },
                px: { xs: 2, sm: 3, md: 0 },
              }}
            >
              {exportImages.map((src, i) => (
                <Box
                  key={i}
                  ref={(el) => (slideRefs.current[i] = el)}
                  sx={{
                    flex: { xs: '0 0 100%', sm: '0 0 50%', md: '0 0 33.3333%' },
                    px: { xs: 0, sm: 1, md: 1.5 },
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: 'relative',
                      borderRadius: 18,
                      overflow: 'hidden',
                      aspectRatio: '4 / 5',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
                      backgroundColor: '#eee',
                    }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={`Operación ${i + 1}`}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                        '&:hover': { transform: 'scale(1.06)' },
                      }}
                    />
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(27,94,32,0.75) 100%)',
                      }}
                    />
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.16) 50%, transparent 60%)',
                        transform: 'translateX(-110%)',
                        transition: 'transform 0.9s ease',
                        pointerEvents: 'none',
                        '&:hover': { transform: 'translateX(110%)' },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        bgcolor: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(6px)',
                        color: 'primary.dark',
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>

          <IconButton
            onClick={() => paginate(-1)}
            aria-label="Anterior"
            disableRipple
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 4, md: -22 },
              transform: 'translateY(-50%)',
              zIndex: 5,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              borderRadius: '50%',
              bgcolor: 'white',
              color: 'primary.main',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                transform: 'translateY(-50%) scale(1.08)',
                boxShadow: '0 12px 30px rgba(27,94,32,0.35)',
              },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
          </IconButton>

          <IconButton
            onClick={() => paginate(1)}
            aria-label="Siguiente"
            disableRipple
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 4, md: -22 },
              transform: 'translateY(-50%)',
              zIndex: 5,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              borderRadius: '50%',
              bgcolor: 'white',
              color: 'primary.main',
              boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                transform: 'translateY(-50%) scale(1.08)',
                boxShadow: '0 12px 30px rgba(27,94,32,0.35)',
              },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            mt: { xs: 3, md: 4 },
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <Box
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Ir al grupo ${i + 1}`}
              onClick={() => goTo(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  goTo(i);
                }
              }}
              sx={{
                width: i === index ? 32 : 10,
                height: 4,
                borderRadius: 2,
                bgcolor: i === index ? 'primary.main' : 'rgba(27,94,32,0.20)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  bgcolor: i === index ? 'primary.main' : 'rgba(27,94,32,0.45)',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
