import { Card, SxProps } from "@mui/material";

export default function MaterialCard({ children, styles }: { children?: React.ReactNode, styles?: SxProps}) 
     { 
    return (
        <Card sx={styles}>

            { children } 

        </Card>
          )
}