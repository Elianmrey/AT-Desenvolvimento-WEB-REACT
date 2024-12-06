import { TextField } from "@mui/material";


interface MaterialTextFieldProps {
    name?: string;
    placeholder?: string;
    styles?: React.CSSProperties;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
 
export default function MaterialTextField({ name, placeholder, styles, value, onChange }: MaterialTextFieldProps) {
    return (
        <TextField name={name} placeholder={placeholder} sx={styles} value={value} onChange={onChange} />
    )
}