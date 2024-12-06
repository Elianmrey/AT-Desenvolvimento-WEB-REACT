import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface MaterialButtonProps {
    route: string,
    buttonText: string
}

export default function MaterialButton({ route, buttonText }: MaterialButtonProps) {
    return <Link to={route}><Button variant="contained"  color="primary"  sx={{ margin: '10px'}}>{buttonText}</Button></Link>;
}