// @ts-nocheck
import { Container, Grid, Typography, Box, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';
import { useT } from '../hooks/useT';

export default function Contact() {
  const t = useT();

  const contactInfo = [
    { icon: <LocationOnIcon />, text: t.contact.info.location },
    { icon: <EmailIcon />, text: t.contact.info.email },
    { icon: <PhoneIcon />, text: t.contact.info.phone },
  ];

  return (
    <Box id="contacto" sx={{ py: { xs: 10, md: 16 }, bgcolor: 'background.default' }}>
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
            {t.contact.overline}
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            color="primary.main"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 10, lineHeight: 1.2 }}
          >
            {t.contact.title}
          </Typography>
        </FadeInSection>

        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <FadeInSection direction="left" delay={0.1}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                {t.contact.subtitle}
              </Typography>
            </FadeInSection>
            <FadeInSection direction="left" delay={0.2}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                {t.contact.description}
              </Typography>
            </FadeInSection>
            <FadeInSection direction="left" delay={0.3}>
              <Box sx={{ mt: 5 }}>
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 20,
                      cursor: 'default',
                    }}
                  >
                    <Box
                      sx={{
                        mr: 2.5,
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        bgcolor: 'rgba(27,94,32,0.08)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '1.05rem' }}>
                      {item.text}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </FadeInSection>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <FadeInSection direction="right" delay={0.2}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  bgcolor: 'background.paper',
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                }}
              >
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label={t.contact.form.name} variant="outlined" sx={fieldSx} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label={t.contact.form.company} variant="outlined" sx={fieldSx} />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label={t.contact.form.email} variant="outlined" sx={fieldSx} />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label={t.contact.form.message} variant="outlined" multiline rows={4} sx={fieldSx} />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        sx={{
                          py: 1.8,
                          borderRadius: 3,
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1.05rem',
                          letterSpacing: '0.02em',
                          boxShadow: '0 8px 24px rgba(27,94,32,0.25)',
                          background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            boxShadow: '0 12px 32px rgba(27,94,32,0.35)',
                            background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                          },
                        }}
                      >
                        {t.contact.form.send}
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    backgroundColor: '#fafafa',
    transition: 'all 0.3s',
    '&:hover fieldset': { borderColor: 'primary.main' },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(27,94,32,0.08)',
    },
  },
};
