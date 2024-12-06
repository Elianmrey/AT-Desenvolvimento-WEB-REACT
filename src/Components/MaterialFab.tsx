import { Fab, FabProps } from "@mui/material";
import { Link } from "react-router-dom";


interface MatrialFabProps extends FabProps {
    route: string,
    childrenIcon: React.ReactNode,
    styles?: React.CSSProperties,
    color?: FabProps['color']
}

export default function MatrialFab({route, childrenIcon,styles,color}: MatrialFabProps) {
    return <Link to={route}><Fab aria-label="add" color={color} sx={styles}>
        {childrenIcon}
    </Fab></Link>;
}

