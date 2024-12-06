import { Checkbox } from "@mui/material"


interface MaterialCheckBoxProps { 
    checked: boolean
}


export function MaterialCheckBox({checked}:MaterialCheckBoxProps) {
    return (
        <Checkbox checked={checked} />
      
    )
}