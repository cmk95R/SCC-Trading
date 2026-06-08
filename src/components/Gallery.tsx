// @ts-nocheck
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { useT } from '../hooks/useT';

const galleryImages = [
  { src: '/galeria1.jpg', span: 'tall' },
  { src: '/galeria2.jpg', span: 'normal' },
  { src: '/galeria3.jpg', span: 'wide' },
  { src: '/galeria4.jpg', span: 'normal' },
  { src: '/galeria5.jpg', span: 'tall' },
  { src: '/galeria6.jpg', span: 'normal' },
  { src: '/galeria7.jpg', span: 'normal' },
  { src: '/galeria8.jpg', span: 'wide' },
];

export default function Gallery() {
  const t = useT();

  return (
    <Box id="galeria" sx={{ py: { xs: 5, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <FadeInSection>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.dark',
              fontWeight: 600,
              letterSpacing: '0.12em',
              fontSize: '0.8rem',
              mb: 1,
              display: 'block',
              textAlign: 'center',
            }}
          >
            {t.gallery.overline}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary.main"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 10, lineHeight: 1.2 }}
          >
            {t.gallery.title}
          </Typography>
        </FadeInSection>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gridAutoRows: 240,
            gap: 2.5,
          }}
        >
          {galleryImages.map((img, index) => {
            const gridColumn = img.span === 'wide' ? { md: 'span 2' } : undefined;
            const gridRow = img.span === 'tall' ? { md: 'span 2' } : undefined;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  gridColumn: gridColumn as string | undefined,
                  gridRow: gridRow as string | undefined,
                  position: 'relative',
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <motion.img
                  src={img.src}
                  alt={t.gallery.images[index]?.title || ''}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 3,
                    '&:hover': { opacity: 1 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      transform: 'translateY(10px)',
                      transition: 'transform 0.4s ease',
                      '.MuiBox-root:hover &': {
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    {t.gallery.images[index]?.title || ''}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.7s ease',
                    pointerEvents: 'none',
                    '&:hover': {
                      transform: 'translateX(100%)',
                    },
                  }}
                />
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
