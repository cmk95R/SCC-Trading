// @ts-nocheck
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { useT } from '../hooks/useT';

export default function About() {
  const t = useT();

  return (
    <Box id="quienes-somos" sx={{ py: { xs: 5, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={10} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeInSection direction="left" delay={0.1}>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 4,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <Box
                    component="img"
                    src="/quiensomos1.jpg"
                    alt="Agricultura"
                    sx={{
                      width: '100%',
                      display: 'block',
                      transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)',
                      '&:hover': { transform: 'scale(1.06)' },
                    }}
                  />
                </motion.div>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    bgcolor: 'secondary.main',
                    color: 'black',
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  {t.about.badge}
                </Box>
              </Box>
            </FadeInSection>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FadeInSection direction="right" delay={0.2}>
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.dark',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  fontSize: '0.8rem',
                  mb: 1,
                  display: 'block',
                }}
              >
                {t.about.overline}
              </Typography>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.3}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                color="primary.main"
                sx={{ fontWeight: 700, mb: 3, lineHeight: 1.2 }}
              >
                {t.about.title}
              </Typography>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.45}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                {t.about.p1}
              </Typography>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.6}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                {t.about.p2}
              </Typography>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.75}>
              <Box sx={{ mt: 4, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                {t.about.tags.map((tag: string) => (
                  <Box
                    key={tag}
                    sx={{
                      px: 3,
                      py: 1.2,
                      borderRadius: 3,
                      bgcolor: 'rgba(27,94,32,0.06)',
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      border: '1px solid rgba(27,94,32,0.12)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(27,94,32,0.2)',
                      },
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
