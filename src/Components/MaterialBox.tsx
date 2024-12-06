import { Box, SxProps } from "@mui/material";
import React from "react";

interface MaterialBoxProps {
    styles?: SxProps;
    children?: React.ReactNode;
}

export default function MaterialBox({ styles, children }: MaterialBoxProps) {
    return (
        <Box sx={styles}>
            {children}
        </Box>
    );
}
