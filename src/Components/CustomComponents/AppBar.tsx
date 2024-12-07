import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '../MaterialBox';
import { IconButton } from '@mui/material';
import MaterialAvatar from '../MaterialAvatar';
import TranslateIcon from '@mui/icons-material/Translate';
import {useAppContext } from '../../../Context/Context';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { onLogout } from '../../Services/Authentication';
import MaterialBox from '../MaterialBox';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

interface AppBarProps {
  title: string;
  home?: boolean
  settings?: boolean
}

export default function MaterialAppBar({ title, home,settings }: AppBarProps) {

  const HandleLogout = () => {
    onLogout(supabase);
    localStorage.removeItem('user');
    localStorage.removeItem('session');
    navigate('/signin');
  };

  const navigate = useNavigate();
  const { changeLanguageInteractive, supabase } = useAppContext();
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolBar} >
       {!home? <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={styles.iconButton} onClick={() => navigate('/')} >
          <HomeIcon sx={{ color: 'orange' }}/>
              </IconButton> : <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={styles.iconButton} onClick={HandleLogout} >
          <LogoutIcon sx={{ color: 'orange' }}/>
              </IconButton>}
        
        
        {!settings ?  <MaterialBox styles={styles.settingsBox}>
            <DisplaySettingsIcon sx={styles.settingsText}  onClick={() => navigate('/settings')}/>
        </MaterialBox>: null}
        
        
        <Typography variant="h6" component="h2" sx={styles.title} >
          {title}
        </Typography>
          <Box styles={styles.profileBox}>
            <IconButton sx={styles.languageButton} onClick={() => changeLanguageInteractive()}><TranslateIcon sx={{ color: 'white' }}/></IconButton>
            <MaterialAvatar />
          </Box>
      
      </Toolbar>
    </AppBar>
  );
}

const styles = {
    appBar: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
    },
  toolBar: {
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    zIndex:1,
  },
    profileBox: {
      display: { xs: 'flex', md: 'flex' },
        position: 'absolute',
        right: 55,
        zIndex: 10,
        width: '20%',
      justifyContent: 'flex-end',
      alignItems: 'center',
        alignSelf: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        position: 'absolute',
        left: 0, width: '100%',
        zIndex: 1,
    }, 
    iconButton: {
        position: 'relative',
      zIndex: 2,
  },
  languageButton: {
    bgcolor: '#1976D2',
    cursor: 'pointer',
    padding: '10px 10px',
    marginRight: '5px',
  },
  settingsBox: {
    position: 'absolute',
    
    left: 65,
    zIndex: 110,
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  settingsText: {
    fontSize: '30px',
    color: 'white',
    '&:hover': {
      color: 'orange',
    },
  }
}