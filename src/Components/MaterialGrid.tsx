import { Grid2 } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CardNewItem from './CustomComponents/CardNewItem';
import { useAppContext } from "../../Context/Context";
import MaterialContainer from "./MaterialContainer";
import babyImg from "../assets/img/Baby.png";
import SettingsIcon from '@mui/icons-material/Settings';
import MaterialTypography from "./MaterialTypography";
import MaterialCard from "./MaterialCard";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';


interface MaterialGridProps {
    baby: {
        name?: string;
        time?: string;
        height?: string;
        weight?: string;
    };
}


export default function MaterialGrid({ baby }: MaterialGridProps) {

    const { translate } = useAppContext();
    return (
        <Grid2 container spacing={3} sx={styles.containerGrid}>
            <MaterialContainer styles={styles.containerCards}>
               
                <MaterialCard styles={styles.card}>
                <MaterialContainer styles={styles.containerIcons}>
                    <SignalCellularAltIcon sx={styles.icon} />
                    <MaterialTypography  styles={styles.text}>{translate("growth-height")+": "+ baby.height}</MaterialTypography>
                </MaterialContainer>

                <MaterialContainer styles={styles.containerIcons}>
                    <img src={babyImg} alt="Image" style={styles.img} />
                    <MaterialTypography  styles={styles.text}>{ baby.name }</MaterialTypography>
                    <MaterialTypography  styles={styles.text}>{ baby.time + translate('months')} </MaterialTypography>
                </MaterialContainer>

                <MaterialContainer styles={styles.containerIcons}  >
                    <SettingsIcon sx={styles.icon}/>
                    <MaterialTypography styles={styles.text}>{translate('weight')+": "+ baby.weight}</MaterialTypography>
                    </MaterialContainer>
                    
                </MaterialCard>
                
            </MaterialContainer>

            <MaterialContainer styles={styles.containerCards}>
            <CardNewItem icon={<AddIcon />} color="primary" title={translate('diaper')} actionInfo="Item" representIcon={<BabyChangingStationIcon  sx={styles.iconSetFirst}/>} route="/new/diaper" />
             <CardNewItem icon={<AddIcon />} color="primary" title={translate('eat')} actionInfo="Item" representIcon={<LocalDiningIcon sx={styles.iconSetSecond}/>} route="/new/eat"/>
                <CardNewItem icon={<AddIcon />} color="primary" title={translate('sleep')} actionInfo="Item" representIcon={<BedtimeIcon sx={styles.iconSetThird} />} route="/new/sleep"/>
            </MaterialContainer>

       </Grid2>
    )
}

const styles = {
    containerGrid: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'fit-content',
        backgroundColor: 'orange',
        borderRadius: '10px',
    },
    img: {
        width: '90%',
    },
    containerCards: 
    {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 'fit-content',
        backgroundColor: 'orange',
        borderRadius: '10px',
        gap: '15px',
        position: 'relative',
        zIndex: 1,
    },
    
    containerIcons: {
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '3px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        borderRadius: '5px',
        zIndex: 2,
    },
    icon: {
        fontSize: '50px',
        color: 'indigo',
        borderStyle: 'solid',
        borderColor: 'indigo',
        borderWidth: '2px',
        borderRadius: '50%',
        padding: '5px',
    },
    card: {
        width: '100%',
        height: '100%',
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconSetFirst: {
        fontSize: '50px',
        color: 'indigo',
        borderWidth: '2px',
        borderRadius: '50%',
        padding: '5px',
    },
    iconSetSecond: {
        fontSize: '50px',
        color: '#06B024',
        borderWidth: '2px',
        borderRadius: '50%',
        padding: '5px',
    },
    iconSetThird: {
        fontSize: '50px',
        color: '#FFB300',
        borderWidth: '2px',
        borderRadius: '50%',
        padding: '5px',
    },
    text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'black',
        textRendering: 'optimizeLegibility',
    }
}