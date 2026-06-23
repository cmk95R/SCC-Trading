// @ts-nocheck
import { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Box, IconButton, Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { useT } from '../hooks/useT';

const galleryImages = [
  { src: '/popcorn1.jpg' },
  { src: '/sunflower1.jpg' },
  { src: '/alu1.jpg' },
  { src: '/drkb1.jpg' },
  { src: '/blackbean1.jpg' },
  { src: '/greenmung1.jpg' },
  { src: '/garb1.jpg' },
  { src: '/greenpeas.jpg' },
];

export default function Gallery() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  const openItem = openIndex !== null ? t.gallery.images[openIndex] : null;
  const hasDetails = openItem?.details && openItem.details.length > 0;

  return (
    <Box
      id="galeria"
      sx={{
        py: { xs: 6, md: 10 },
        position: 'relative',
        background:
          'radial-gradient(1200px 600px at 50% 0%, rgba(76,140,74,0.06), transparent 60%), #fbfaf6',
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
              {t.gallery.overline}
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mt: 1.5,
                textAlign: 'center',
                fontWeight: 700,
                color: 'primary.main',
                lineHeight: 1.15,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '-0.02em',
              }}
            >
              {t.gallery.title.split(' ')[0]}{' '}
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
                {t.gallery.title.split(' ').slice(1).join(' ') || ''}
              </Box>
            </Typography>
          </Box>
        </FadeInSection>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenIndex(index);
                }
              }}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.06,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              style={{
                position: 'relative',
                borderRadius: 18,
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                cursor: 'pointer',
                backgroundColor: '#eee',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
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
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />

              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(27,94,32,0.85) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 2.5,
                  '.gallery-card:hover &': { opacity: 1 },
                }}
              >
                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#f9a825',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      fontSize: '0.7rem',
                      display: 'block',
                      mb: 0.5,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      fontSize: { xs: '1.05rem', md: '1.1rem' },
                    }}
                  >
                    {t.gallery.images[index]?.title || ''}
                  </Typography>
                </Box>
              </Box>

              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                  transform: 'translateX(-110%)',
                  transition: 'transform 0.9s ease',
                  pointerEvents: 'none',
                  '.gallery-card:hover &': { transform: 'translateX(110%)' },
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* ─── Product Detail Modal ─── */}
      <Dialog
        open={openIndex !== null}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        TransitionComponent={undefined}
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: 3 },
            overflow: 'hidden',
            maxHeight: { xs: '100%', md: '85vh' },
            m: { xs: 0, sm: 3 },
            boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
            bgcolor: '#fff',
          },
        }}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(8, 20, 10, 0.82)',
            backdropFilter: 'blur(6px)',
          },
        }}
      >
        <AnimatePresence mode="wait">
          {openItem && (
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <DialogContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    height: '100%',
                    minHeight: 0,
                  }}
                >
                  {/* ── Image ── */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: '100%', md: '58%' },
                      height: { xs: 220, md: 'auto' },
                      minHeight: { md: 300 },
                      bgcolor: '#efece3',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={galleryImages[openIndex].src}
                      alt={openItem.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    {/* Close button */}
                    <IconButton
                      onClick={handleClose}
                      aria-label="Cerrar"
                      size="small"
                      disableRipple
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 2,
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.88)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          bgcolor: '#1b5e20',
                          color: '#fff',
                          transform: 'rotate(90deg)',
                          boxShadow: '0 4px 16px rgba(27,94,32,0.4)',
                        },
                      }}
                    >
                      <CloseIcon sx={{ fontSize: 15 }} />
                    </IconButton>

                    {/* Page counter */}
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        bgcolor: 'rgba(255,255,255,0.88)',
                        backdropFilter: 'blur(8px)',
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
                      {(openIndex ?? 0) + 1} / {galleryImages.length}
                    </Box>
                  </Box>

                  {/* ── Specs ── */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '42%' },
                      px: { xs: 2.5, md: 3.5 },
                      pt: { xs: 1.8, md: 2.5 },
                      pb: { xs: 2.2, md: 3 },
                      flexShrink: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      overflowY: 'auto',
                    }}
                  >
                    {/* Title */}
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.15rem', md: '1.4rem' },
                        lineHeight: 1.1,
                        letterSpacing: '-0.015em',
                        color: 'primary.dark',
                        mb: 0.3,
                      }}
                    >
                      {openItem.title}
                    </Typography>

                    {/* Divider */}
                    <Box
                      sx={{
                        width: 28,
                        height: 2.5,
                        borderRadius: 1,
                        background: 'linear-gradient(90deg, #1b5e20, #f9a825)',
                        my: { xs: 1, md: 1.3 },
                      }}
                    />

                    {hasDetails ? (
                      <Box>
                        {openItem.details.map((spec, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: 'flex',
                              alignItems: 'baseline',
                              py: { xs: 0.55, md: 0.7 },
                              borderBottom:
                                i < openItem.details.length - 1
                                  ? '1px solid rgba(27,94,32,0.08)'
                                  : 'none',
                            }}
                          >
                            <Typography
                              sx={{
                                color: '#888',
                                fontSize: { xs: '0.68rem', md: '0.8rem' },
                                fontWeight: 500,
                                flex: 1,
                                letterSpacing: '0.01em',
                              }}
                            >
                              {spec.label}
                            </Typography>
                            <Typography
                              sx={{
                                color: 'primary.dark',
                                fontSize: { xs: '0.72rem', md: '0.85rem' },
                                fontWeight: 700,
                                fontVariantNumeric: 'tabular-nums',
                              }}
                            >
                              {spec.value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    ) : (
                      <Typography
                        sx={{
                          color: '#999',
                          fontSize: { xs: '0.72rem', md: '0.85rem' },
                          fontStyle: 'italic',
                          mt: 0.5,
                        }}
                      >
                        {t.gallery.detailLabel}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </DialogContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </Box>
  );
}
