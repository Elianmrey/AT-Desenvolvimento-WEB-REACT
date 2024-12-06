import { SxProps, Typography, TypographyProps } from "@mui/material";


interface MaterialTypographyProps {
    children: React.ReactNode;
    variant?: TypographyProps['variant'];
    styles?: SxProps;
    component?: TypographyProps['component'];
}

export default function MaterialTypography({ children, variant, styles, component = 'span' }: MaterialTypographyProps) {
    return (
        <Typography variant={variant} sx={styles} component={component}>
            {children}
        </Typography>
    );
}