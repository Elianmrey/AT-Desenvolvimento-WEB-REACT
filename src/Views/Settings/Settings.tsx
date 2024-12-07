import { useState } from 'react';

import MaterialContainer from './../../Components/MaterialContainer';
import MaterialAppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';
import MaterialTypography from '../../Components/MaterialTypography.tsx';
import MaterialTextField from '../../Components/MaterialTextField.tsx';
import MaterialCard from '../../Components/MaterialCard.tsx';
import { Box, Button } from '@mui/material';
import { baby } from '../../Constants/BabyData.tsx';
export default function Formulary() {

    const [data, setData] = useState<{ name: string, weight: number, height: number, time: number } | { name: '', weight: 0, height: 0, time: 0 }>({ name: '', weight: 0, height: 0, time: 0 });


    const { translate } = useAppContext();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        baby.name = data.name;
        baby.weight = data.weight.toString();
        baby.height = data.height.toString();
        baby.time = data.time.toString();
        setData({ name: '', weight: 0, height: 0, time: 0 });
    };


    return (
        <MaterialContainer styles={styles.container}>
            <MaterialAppBar title={translate("settings")} home={false} settings />
            <MaterialCard styles={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", }}>
                <MaterialTypography variant='h5' component={'h2'} styles={styles.typographyStyle}>
                    {translate('baby-info')}
                </MaterialTypography>

                <Box component="form" onSubmit={handleSubmit} sx={styles.formStyle}>

                    <label htmlFor="name" >{translate('name')}</label>
                    <MaterialTextField name="name" placeholder={translate('name')} value={data.name} onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))} />

                    <label htmlFor="weight">{translate('weight') + ' (' + translate('grams') + ')'}</label>
                    <MaterialTextField name="weight" placeholder={translate('weight')} value={(data.weight).toString()} onChange={(e) => setData((prevData) => ({ ...prevData, weight: Number(e.target.value) }))} />

                    <label htmlFor="height">{translate('height') + ' (cm)'}</label>
                    <MaterialTextField name="height" placeholder={translate('height')} value={(data.height).toString()} onChange={(e) => setData((prevData) => ({ ...prevData, height: Number(e.target.value) }))} />

                    <label htmlFor="time">{translate('time')}</label>
                    <MaterialTextField name="time" placeholder={translate('time')} value={(data.time).toString()} onChange={(e) => setData((prevData) => ({ ...prevData, time: Number(e.target.value) }))} />



                    <Button type="submit" sx={{ marginTop: '10px' }} variant="contained" color="primary">{translate('save')}</Button>
                </Box>

            </MaterialCard>
        </MaterialContainer>
    );
};
const styles = {
    container: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '97vh',
        backgroundColor: 'indigo',
        borderRadius: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderStyle: 'solid',
        margin: '10px auto',
    },
    typographyStyle: {
        color: 'white',
        textAlign: 'center',
    },
    formStyle: {
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
}