import { useState, useEffect } from 'react';


import MaterialContainer from './../../Components/MaterialContainer';
import MaterialAppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';

export default function Formulary() {

    const [data, setData] = useState<{ message: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { translate } = useAppContext();
    
    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            try {
                await setTimeout(() => {
                    setData({ message: 'Olá ,Voce está em Configurações!' });

                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error((error as Error).message);
            }
        }

        fetchData();
    }, []);

    return (
        <MaterialContainer styles={styles.container}>
            <MaterialAppBar title={ translate("settings")} home={false} />
            <h1>Página Settings</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <p>{data?.message}</p>
            )}

        </MaterialContainer>
    );
};
const styles = {
    container: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90vh',
        backgroundColor: 'indigo',
        borderRadius: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderStyle: 'solid',
        margin: '10px auto',
    },
}