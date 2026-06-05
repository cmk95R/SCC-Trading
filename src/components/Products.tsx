// @ts-nocheck
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { useT } from '../hooks/useT';
import VerifiedIcon from '@mui/icons-material/Verified';

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const productImages = [
  '/prod1.jpg',
  '/prod2.jpg',
  '/prod3.jpg',
  '/prod4.jpg',
];

export default function Products() {
  const t = useT();

  return (
    <Box id="productos" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'background.paper' }}>
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
            {t.products.overline}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary.main"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 2, lineHeight: 1.2 }}
          >
            {t.products.title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.2,
                borderRadius: 50,
                bgcolor: 'rgba(27,94,32,0.08)',
                border: '1px solid rgba(27,94,32,0.2)',
              }}
            >
              <VerifiedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography
                sx={{
                  fontWeight: 600,
                  color: 'primary.main',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                }}
              >
                {t.products.origin}
              </Typography>
            </Box>
          </Box>
        </FadeInSection>

        <Grid container spacing={4}>
          {t.products.items.map((product: { name: string; category: string; description: string; info: string }, index: number) => (
            <Grid key={product.name} size={{ xs: 12, sm: 6, md: 6 }}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  {/* Image with hover overlay */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '100%', md: '50%' },
                      height: { xs: 240, md: 'auto' },
                      minHeight: { md: 280 },
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={productImages[index]}
                      alt={product.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)',
                        '.MuiCard-root:hover &': { transform: 'scale(1.08)' },
                      }}
                    />

                    {/* Shine effect on hover */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.7s ease',
                        pointerEvents: 'none',
                        '.MuiCard-root:hover &': {
                          transform: 'translateX(100%)',
                        },
                      }}
                    />

                    {/* Origin badge (always visible) */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(6px)',
                        color: 'primary.main',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1.5,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        }}
                      />
                      {t.products.originBadge}
                    </Box>

                    {/* Info overlay on hover */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0, 30, 6, 0.85)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        p: 4,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        '.MuiCard-root:hover &': { opacity: 1 },
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          color: 'secondary.main',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          fontSize: '0.7rem',
                          mb: 1,
                        }}
                      >
                        {product.category}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1.05rem',
                          lineHeight: 1.4,
                          mb: 2,
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Box
                        sx={{
                          width: 32,
                          height: 2,
                          bgcolor: 'secondary.main',
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '0.85rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {product.info}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'secondary.dark',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        fontSize: '0.75rem',
                        mb: 1,
                      }}
                    >
                      {product.category}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3 }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
