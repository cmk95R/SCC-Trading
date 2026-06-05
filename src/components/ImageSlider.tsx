import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  {
    image: '/hero1.jpg',
    title: 'Excelencia en Exportación de Legumbres',
    subtitle: 'Conectamos la mejor calidad de Sudamérica con el mercado internacional.',
  },
  {
    image: '/hero2.jpg',
    title: 'Cultivos de Calidad Superior',
    subtitle: 'Trabajamos con los mejores productores para garantizar calidad premium.',
  },
  {
    image: '/hero3.jpg',
    title: 'Producción Sostenible',
    subtitle: 'Comprometidos con prácticas agrícolas responsables y respetuosas.',
  },
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 1.02,
    }),
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.6 },
            scale: { duration: 1.2 },
          }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0, 30, 6, 0.82), rgba(0, 20, 4, 0.88)), url(${slides[index].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Controls */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5,
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            sx={{
              width: i === index ? 40 : 12,
              height: 4,
              borderRadius: 2,
              bgcolor: i === index ? 'secondary.main' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: i === index ? 'secondary.main' : 'rgba(255,255,255,0.7)',
              },
            }}
          />
        ))}
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={() => paginate(-1)}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(8px)',
          width: 48,
          height: 48,
          transition: 'all 0.3s',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.4)', scale: 1.1 },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={() => paginate(1)}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(8px)',
          width: 48,
          height: 48,
          transition: 'all 0.3s',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.4)', scale: 1.1 },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
