import Layout from './layout';
import { Typography, Grid, Box, Link } from '@mui/material';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', py: 8, color: 'white' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to VisionEdit
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: 'white' }}>
          Modify Your Environment with Augmented Reality.
        </Typography>
        <img src='https://aczyvz1jdj.ufs.sh/f/maw3yw2MQ30DjJnDgLbZs3aiHIy7w4PCzkVbprLxte5D6Fcu' alt="Home Screen" style={{ maxWidth: '100%', height: '500px', borderRadius: '40px' }} />
      </Box>

      {/* Key Features Section */}
      <Box sx={{ py: 8, color: 'white' }}>
        <Typography variant="h4" gutterBottom align="center">
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs:12, sm:4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6">Feature 1</Typography>
              <Typography variant="body1" sx={{ color: 'white', pb: 1 }}>
              Pick from a plethora of different models.
              </Typography>
              <img src='https://aczyvz1jdj.ufs.sh/f/maw3yw2MQ30Db4tF2N7xYGpOl1HiP49CN3Bwzqs75dVaUKuj' alt="Upcoming Events" style={{ maxWidth: '50%', height: '450px', borderRadius: '40px' }} />

            </Box>
          </Grid>
          <Grid size={{ xs:12, sm:4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6">Feature 2</Typography>
              <Typography variant="body1" sx={{ color: 'white', pb: 1 }}>
                Explore your new world.
              </Typography>
              <img src='https://aczyvz1jdj.ufs.sh/f/maw3yw2MQ30DPH755es23xKuG4Dejt9nVb0ysZ5oBqSLNYIC' alt="Respond" style={{ maxWidth: '50%', height: '450px', borderRadius: '40px' }} />
            </Box>
          </Grid>
          <Grid size={{ xs:12, sm:4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6">Feature 3</Typography>
              <Typography variant="body1" sx={{ color: 'white', pb: 1 }}>
                See all available models in 3D.
              </Typography>
              <img src='https://aczyvz1jdj.ufs.sh/f/maw3yw2MQ30DrpdiUaPRsAbGEM2e3T9XWNlugVfHQSpiJOzD' alt="View Responses" style={{ maxWidth: '50%', height: '450px', borderRadius: '40px' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action */}
      <Box sx={{ textAlign: 'center', py: 8, bgcolor: '#545454' }}>
        <Typography variant="h4" gutterBottom>
          Get Started
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, }}>
          Ready to feel? Available on the Apple App Store.
        </Typography>
        {<Link href='https://apps.apple.com/gb/app/visionedit/id6749544179?platform=iphone'>
          <img src='https://utfs.io/f/j1ytmAM8ijT5xxtosw7ypD0IXK6UH7WFcVGlOoEP14d3qCkw' alt="Download Now" style={{ padding: '12px 30px' }} />
        </Link>}
      </Box>
    </Layout>
  );
}