import { AppBar, Toolbar, Button, Box, Link } from '@mui/material';
//import Logo from '../assets/media/Logo.svg';

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1B1B21' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
        {/* Logo on the left */}
        <Link href='/'>
        <img src='https://aczyvz1jdj.ufs.sh/f/maw3yw2MQ30D6fa4Ky9kN20cpj4oZrIJKsG8UfzDX7vATeY6' alt="Logo" style={{ width: '100px', height: '100px' }} />
        </Link>
        
        {/* Links on the right */}
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/privacy">Privacy Policy</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}