
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AvatarProps {
    children?: React.ReactNode;
}

export default function MaterialAvatar({ children}:AvatarProps) {
    const navigate  = useNavigate();
     return (
         <Avatar sx={Styles.avatar} onClick={() => { navigate('/settings') }} variant='circular'>{ children?children:false}</Avatar>
     )   
 }

const Styles = {
    avatar: {
        padding: '5px',
        backgroundColor: 'orange',
        color: 'white',
        "&:hover": { bgcolor: '#0061fc', cursor: 'pointer' },
    },
    
}