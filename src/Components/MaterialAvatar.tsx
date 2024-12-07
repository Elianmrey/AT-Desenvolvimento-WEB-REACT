
import { Avatar } from '@mui/material';


interface AvatarProps {
    children?: React.ReactNode;
}

export default function MaterialAvatar({ children}:AvatarProps) {
    
     return (
         <Avatar sx={Styles.avatar} variant='circular'>{ children?children:false}</Avatar>
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