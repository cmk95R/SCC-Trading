import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useT } from '../hooks/useT';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const t = useT();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 110 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1b5e20',
            color: '#fff',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                width: 60,
                height: 60,
                border: '4px solid rgba(255,255,255,0.15)',
                borderTop: '4px solid #f9a825',
                borderRadius: '50%',
                margin: '0 auto 24px',
              }}
            />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: '2rem',
                marginBottom: 8,
                letterSpacing: '-0.02em',
              }}
            >
              {t.loading.title}
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                marginBottom: 40,
              }}
            >
              {t.loading.subtitle}
            </motion.p>
            <div style={{ width: 200, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden', margin: '0 auto' }}>
              <motion.div
                style={{ height: '100%', background: '#f9a825', borderRadius: 3,  }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
