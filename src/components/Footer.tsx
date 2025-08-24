import { Box, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1B1B21',
        padding: '40px 20px',
        marginTop: 'auto',
        textAlign: 'center',
        //borderTop: '1.5px solid #e0e0e0',
        //mt: '2rem',
      }}
    >
      <Grid container justifyContent="center">
        <Grid size={{ xs:12 }}>
          <Typography variant="body2" component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/" underline="hover" sx={{ color: 'white', marginRight: '20px' }}>
              Home
            </Link>
            <Link href="/privacy" underline="hover" sx={{ color: 'white' }}>
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}