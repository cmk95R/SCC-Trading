const fs = require('fs');
const path = require('path');

const files = [
  'src/components/About.tsx',
  'src/components/Contact.tsx',
  'src/components/Hero.tsx',
  'src/components/Products.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix Grid item xs={..} md={..}
  content = content.replace(/<Grid\s+item\s+xs={(\d+)}\s+md={(\d+)}/g, '<Grid size={{ xs: $1, md: $2 }}');
  content = content.replace(/<Grid\s+item\s+xs={(\d+)}\s+sm={(\d+)}\s+md={(\d+)}/g, '<Grid size={{ xs: $1, sm: $2, md: $3 }}');
  content = content.replace(/<Grid\s+item\s+xs={(\d+)}\s+sm={(\d+)}/g, '<Grid size={{ xs: $1, sm: $2 }}');
  content = content.replace(/<Grid\s+item\s+xs={(\d+)}/g, '<Grid size={{ xs: $1 }}');
  content = content.replace(/<Grid\s+item\s+key={([^}]+)}\s+xs={(\d+)}\s+sm={(\d+)}\s+md={(\d+)}/g, '<Grid key={$1} size={{ xs: $2, sm: $3, md: $4 }}');

  // Fix Grid item alone (if any left)
  content = content.replace(/<Grid\s+item\b/g, '<Grid');

  // Fix Grid container alignItems="..."
  content = content.replace(/<Grid\s+container\s+spacing={([^}]+)}\s+alignItems="([^"]+)"/g, '<Grid container spacing={$1} sx={{ alignItems: "$2" }}');

  // Fix Typography fontWeight="..."
  // Be careful if it already has sx={...}
  // Let's check for specific patterns
  content = content.replace(/fontWeight="bold"\s*>/g, 'sx={{ fontWeight: "bold" }}>');
  content = content.replace(/fontWeight="bold"\s*sx={{([^}]+)}}/g, 'sx={{ fontWeight: "bold", $1 }}');
  
  // Actually, some have fontWeight="bold" BEFORE sx={...}. 
  // Let's do a more robust string replace.

  // About.tsx
  // <Typography variant="h3" component="h2" gutterBottom color="primary.main" fontWeight="bold">
  content = content.replace(/color="primary\.main" fontWeight="bold">/g, 'color="primary.main" sx={{ fontWeight: "bold" }}>');

  // Contact.tsx
  // <Typography variant="h3" component="h2" align="center" gutterBottom color="primary.main" fontWeight="bold" sx={{ mb: 6 }}>
  content = content.replace(/color="primary\.main" fontWeight="bold" sx={{ mb: 6 }}>/g, 'color="primary.main" sx={{ fontWeight: "bold", mb: 6 }}>');
  // <Typography variant="h5" gutterBottom fontWeight="bold">
  content = content.replace(/gutterBottom fontWeight="bold">/g, 'gutterBottom sx={{ fontWeight: "bold" }}>');

  // Hero.tsx
  // <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
  content = content.replace(/gutterBottom fontWeight="bold">/g, 'gutterBottom sx={{ fontWeight: "bold" }}>');

  // Products.tsx
  // <Typography variant="h3" component="h2" align="center" gutterBottom color="primary.main" fontWeight="bold" sx={{ mb: 6 }}>
  content = content.replace(/color="primary\.main" fontWeight="bold" sx={{ mb: 6 }}>/g, 'color="primary.main" sx={{ fontWeight: "bold", mb: 6 }}>');
  // <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
  content = content.replace(/component="h3" fontWeight="bold">/g, 'component="h3" sx={{ fontWeight: "bold" }}>');

  // Fix Typography paragraph
  content = content.replace(/paragraph\s+sx={{/g, 'sx={{ mb: 2, ');
  content = content.replace(/paragraph\s*>/g, 'sx={{ mb: 2 }}>');

  fs.writeFileSync(file, content);
});
