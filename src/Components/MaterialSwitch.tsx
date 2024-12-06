import { FormControlLabel, Switch } from "@mui/material";

interface MaterialSwitchProps {
   checked: boolean;
    onChange: () => void;
    defaultChecked?: boolean;
    icon?: React.ReactNode;
    label: string;
    style?: React.CSSProperties;
    checkedIcon?: React.ReactNode;
}
export default function MaterialSwitch({ defaultChecked, icon, checkedIcon, checked, onChange, label,style }: MaterialSwitchProps) {
    return (
        <FormControlLabel
            control={<Switch
                defaultChecked={defaultChecked}
                icon={icon}
                checkedIcon={checkedIcon}
                checked={checked} />}
            label={label}
            sx={style}
            onChange={onChange} />
    
        
    )
}