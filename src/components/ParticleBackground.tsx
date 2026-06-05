import { Box } from '@mui/material';

export default function ParticleBackground() {
  // Pre-generate stable particle data to avoid impure functions during render
  const particles = [
    { x: 12, y: 15, size: 2, duration: 22, delay: 0 },
    { x: 85, y: 22, size: 1.5, duration: 18, delay: 2 },
    { x: 45, y: 8, size: 2.5, duration: 25, delay: 4 },
    { x: 70, y: 65, size: 1, duration: 20, delay: 1 },
    { x: 25, y: 80, size: 2, duration: 24, delay: 6 },
    { x: 92, y: 45, size: 1.5, duration: 19, delay: 3 },
    { x: 5, y: 55, size: 2, duration: 21, delay: 5 },
    { x: 55, y: 35, size: 1, duration: 23, delay: 7 },
    { x: 38, y: 50, size: 2.5, duration: 17, delay: 2 },
    { x: 78, y: 12, size: 1.5, duration: 26, delay: 4 },
    { x: 15, y: 40, size: 1, duration: 20, delay: 8 },
    { x: 62, y: 75, size: 2, duration: 22, delay: 1 },
    { x: 33, y: 25, size: 1.5, duration: 18, delay: 6 },
    { x: 88, y: 88, size: 2, duration: 24, delay: 3 },
    { x: 48, y: 60, size: 1, duration: 21, delay: 5 },
    { x: 10, y: 70, size: 2.5, duration: 19, delay: 7 },
    { x: 72, y: 30, size: 1.5, duration: 25, delay: 0 },
    { x: 50, y: 90, size: 1, duration: 23, delay: 4 },
    { x: 20, y: 5, size: 2, duration: 20, delay: 2 },
    { x: 95, y: 60, size: 1.5, duration: 22, delay: 6 },
  ];

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {particles.map((p) => (
        <Box
          key={p.x + '-' + p.y}
          sx={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.35)',
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            '@keyframes floatParticle': {
              '0%': { transform: 'translateY(0) translateX(0)', opacity: 0.2 },
              '50%': { opacity: 0.55 },
              '100%': { transform: 'translateY(-40px) translateX(10px)', opacity: 0.2 },
            },
          }}
        />
      ))}
    </Box>
  );
}
