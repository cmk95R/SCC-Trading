// @ts-nocheck
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import ParticleBackground from './ParticleBackground';
import { useT } from '../hooks/useT';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  const t = useT();

  return (
    <Box
      id="inicio"
      sx={{
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Carousel */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <ImageSlider />
      </Box>

      {/* Particle overlay */}
      <ParticleBackground />

      {/* Subtle noise texture overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, py: { xs: 16, md: 24 } }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontWeight: 600,
                letterSpacing: '0.15em',
                fontSize: '0.9rem',
                mb: 2,
                display: 'block',
              }}
            >
              {t.hero.overline}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              }}
            >
              {t.hero.title}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 6,
                fontWeight: 300,
                opacity: 0.95,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.35rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              {t.hero.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-block' }}
          >
            <Link to="productos" smooth={true} duration={800} offset={-80}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  fontWeight: 700,
                  px: 6,
                  py: 2,
                  borderRadius: 50,
                  boxShadow: '0 10px 30px rgba(249,168,37,0.35)',
                  background: 'linear-gradient(135deg, #f9a825 0%, #fbc02d 100%)',
                  color: '#1a1a1a',
                  fontSize: '1.05rem',
                  letterSpacing: '0.02em',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 15px 40px rgba(249,168,37,0.5)',
                    background: 'linear-gradient(135deg, #fbc02d 0%, #f9a825 100%)',
                  },
                }}
              >
                {t.hero.cta}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ marginTop: 60 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box
              sx={{
                width: 26,
                height: 40,
                border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: 13,
                mx: 'auto',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4,
                  height: 8,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255,255,255,0.7)',
                },
              }}
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom fade transition */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 140,
          background: (theme) =>
            `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </Box>
  );
}
