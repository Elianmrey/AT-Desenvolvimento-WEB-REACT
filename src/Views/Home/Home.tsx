import { useEffect, useState } from 'react';
import MaterialGrid from '../../Components/MaterialGrid.tsx';
import MaterialCard from '../../Components/MaterialCard.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import AppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';
import MaterialTypography from './../../Components/MaterialTypography';
import { baby } from '../../Constants/BabyData.tsx';
import CustomItemList from '../../Components/CustomComponents/CustomList.tsx';
import { list } from '../../Services/Supabase';
import { drop } from '../../Services/Supabase';

export default function Home() {
    const [dataBase, setDataBase] = useState([]);
    const { translate } = useAppContext();
    const [loading, setLoading] = useState(false);



    const user: string = JSON.parse(localStorage.getItem("user") || '{}');

    const userJson = JSON.parse(user);

    const userIdentity: string = userJson.id

 
    interface Item {
        user_id: string;
       
    }
    const fetchData = async () => {
        setLoading(true);
        const response = await list("items");
        const items = (response as never[]).filter((item: Item) => item.user_id === userIdentity);
        setLoading(false);

        setDataBase(loading ? [] : items);
    };

    const onDrop = async (id: number) => {
        await drop("items", id);
        fetchData();
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <MaterialBox styles={Styles.container}>
            <MaterialBox styles={Styles.profileBox}>
                <AppBar title={translate("initial-panel")} home={true} />
            </MaterialBox>

            <MaterialTypography variant="h5" component="h1" styles={Styles.title}>
                {translate('welcome')}
            </MaterialTypography>

            <MaterialGrid baby={baby} />
            <MaterialCard styles={Styles.card}>

                <CustomItemList items={dataBase.length > 0 ? dataBase : []} onDrop={onDrop} />
            </MaterialCard>
        </MaterialBox>
    );
}

const Styles = {
    profileBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: '20px',
        width: '100%',
        height: '5vh',
        borderRadius: '10px',
    },
    container: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '97vh',
        backgroundColor: 'indigo',
        borderRadius: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderStyle: 'solid',
        margin: '10px auto',
    },
    card: {
        width: '96%',
        height: 'fit-content',
        padding: '10px',
        boxShadow: '0px 0px 5px #999',
        transition: 'box-shadow 0.3s ease-in-out',
        borderRadius: '10px',
        overflowY: 'scroll',
        margin: '10px auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '&::-moz-scrollbar': {
            display: 'none',
        },
        scrollbarWidth: 'none',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#FFA507',
    },
};
