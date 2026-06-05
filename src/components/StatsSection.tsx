import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useT } from '../hooks/useT';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref}>
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          lineHeight: 1,
        }}
      >
        {count.toLocaleString()}{suffix}
      </Typography>
    </div>
  );
}

export default function StatsSection() {
  const t = useT();

  const stats = [
    { label: t.stats.years, value: 15, suffix: '+' },
    { label: t.stats.countries, value: 28, suffix: '' },
    { label: t.stats.tons, value: 50000, suffix: '' },
    { label: t.stats.clients, value: 120, suffix: '+' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #f5f7f4 0%, #e8efe8 100%)',
        borderTop: '1px solid rgba(0,0,0,0.04)',
        borderBottom: '1px solid rgba(0,0,0,0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,94,32,0.03) 0%, transparent 70%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,168,37,0.04) 0%, transparent 70%)',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: 6, textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              style={{ flex: '1 1 200px', minWidth: 180 }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: 'text.secondary',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                }}
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
