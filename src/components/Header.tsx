// @ts-nocheck
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useLang } from '../hooks/useLang';
import { useT } from '../hooks/useT';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLang();
  const t = useT();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.header.nav.inicio, to: 'inicio' },
    { label: t.header.nav.about, to: 'quienes-somos' },
    { label: t.header.nav.products, to: 'productos' },
    { label: t.header.nav.gallery, to: 'galeria' },
    { label: t.header.nav.contact, to: 'contacto' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px) saturate(180%)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(0,0,0,0.03)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: { xs: 0.5, md: 0.8 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <AgricultureIcon
                sx={{
                  mr: 1.5,
                  color: 'primary.main',
                  transition: 'all 0.5s',
                  fontSize: 32,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  transition: 'all 0.5s',
                  letterSpacing: '-0.02em',
                  fontSize: '1.3rem',
                }}
              >
                {t.header.brand}
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: 'text.primary',
                    transition: 'all 0.4s',
                    position: 'relative',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      width: 0,
                      height: '2.5px',
                      bgcolor: 'secondary.main',
                      borderRadius: 1,
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::before': {
                      width: '55%',
                    },
                    '&:hover': {
                      bgcolor: 'rgba(27,94,32,0.04)',
                    },
                  }}
                >
                  <Link to={item.to} smooth={true} duration={800} offset={-90}>
                    {item.label}
                  </Link>
                </Button>
              ))}

              {/* Language Toggle */}
              <ToggleButtonGroup
                value={lang}
                exclusive
                onChange={(_, value) => value && toggleLang()}
                size="small"
                sx={{
                  ml: 2,
                  '& .MuiToggleButton-root': {
                    color: 'text.primary',
                    borderColor: 'rgba(0,0,0,0.15)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    minWidth: 42,
                    py: 0.5,
                    transition: 'all 0.3s',
                    '&.Mui-selected': {
                      bgcolor: 'secondary.main',
                      color: '#1a1a1a',
                      '&:hover': {
                        bgcolor: 'secondary.dark',
                      },
                    },
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.04)',
                    },
                  },
                }}
              >
                <ToggleButton value="es">ES</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ height: { xs: 56, md: 72 } }} />
    </motion.div>
  );
}
