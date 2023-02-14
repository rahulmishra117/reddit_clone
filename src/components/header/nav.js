import './nav.css';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

function nav() {
  return (<>
    <AppBar position='relative'>
      <Container maxWidth="xl">
        <Typography
          noWrap
          component="a"
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
          <div className='input-home'>
            <TextField
              defaultValue="Home"
              size="small"
              sx={{ width: 250 }}
            />
          </div>
          <div className='input-search-section'>
            <FormControl fullWidth sx={{m:0.5}} variant="filled">
              <TextField
              defaultValue="Search"
              size="small"
              sx={{ width: 450 }}
            />
            </FormControl>
          </div>
          <div className='icon-details'>
            <Avatar
            sx={{ width: 24, height: 24 }} 
            src='../dollar-coin.png'></Avatar>
          </div>
          <div className='icon-with-notification'>
            <Avatar
            sx={{ width: 24, height: 24 }}
            src='../messenger.png'></Avatar>
            <Avatar  sx={{ width: 24, height: 24 }}src='../bell.png'></Avatar>
            <Avatar sx={{ width: 24, height: 24 }} src='../plus.png'></Avatar>
            <Avatar sx={{ width: 24, height: 24 }} src='../megaphone.png'></Avatar>
          </div>
        </Typography>
      </Container>
    </AppBar>
  </>);
}

export default nav;  