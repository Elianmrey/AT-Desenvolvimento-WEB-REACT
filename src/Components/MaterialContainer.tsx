import { Container, SxProps } from "@mui/material";

interface MaterialContainerProps {
    children: React.ReactNode,
    styles: SxProps
}


export default function MaterialContainer({ children, styles }: MaterialContainerProps) {
    return (
        <Container sx={styles}>
            {children}
        </Container>
    )
}