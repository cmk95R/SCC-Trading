// @ts-nocheck
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useT } from '../hooks/useT';

export default function Footer() {
  const t = useT();

  const navLinks = [
    t.header.nav.inicio,
    t.header.nav.about,
    t.header.nav.products,
    t.header.nav.contact,
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        pt: 8,
        pb: 4,
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 6,
            mb: 6,
          }}
        >
          <Box sx={{ flex: '1 1 300px' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'secondary.main' }}>
              {t.header.brand}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.8, maxWidth: 320 }}>
              {t.footer.description}
            </Typography>
          </Box>

          <Box sx={{ flex: '1 1 200px' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>
              {t.footer.navTitle}
            </Typography>
            {navLinks.map((item) => (
              <Typography key={item} variant="body2" sx={{ opacity: 0.7, mb: 1, cursor: 'pointer', transition: 'opacity 0.3s', '&:hover': { opacity: 1 } }}>
                {item}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flex: '1 1 200px' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>
              {t.footer.contactTitle}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>{t.contact.info.location}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>{t.contact.info.email}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>{t.contact.info.phone}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            pt: 3,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} {t.header.brand}. {t.footer.rights}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.5 }}>
            {t.footer.designed}
          </Typography>
        </Box>
      </Container>

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(249,168,37,0.3), transparent)',
        }}
      />
    </Box>
  );
}
