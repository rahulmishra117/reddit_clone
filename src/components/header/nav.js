import './nav.css';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

function nav() {
  return (<>
    <AppBar position='relative'>
      <Container maxWidth="xl">
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            color: '#FFFFFF',
            textDecoration: 'none',
            lineHeight: 3
          }}
        >
          <div className="icon-store">
            <div>
              <Avatar alt="Remy Sharp" src="../reddit.png" />
            </div>
            <div>
              <h3 sx={{ color: '#000000' }}> reddit</h3>
            </div>
          </div>
        </Typography>
      </Container>
    </AppBar>
  </>);
}

export default nav; 