// @ts-nocheck
import { Fab, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9997,
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
      >
        <Fab
          size="large"
          sx={{
            bgcolor: '#25D366',
            color: 'white',
            boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: '#128C7E',
              boxShadow: '0 8px 28px rgba(37, 211, 102, 0.5)',
            },
          }}
          component="a"
          href="https://wa.me/541158737974"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon sx={{ fontSize: 28 }} />
        </Fab>
      </motion.div>
    </Box>
  );
}
