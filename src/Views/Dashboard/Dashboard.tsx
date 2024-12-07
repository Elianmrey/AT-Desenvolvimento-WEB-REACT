import MaterialContainer from '../../Components/MaterialContainer.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import { useParams } from 'react-router-dom';
import { get } from '../../Services/Supabase.tsx';
import MaterialTypography from '../../Components/MaterialTypography.tsx';
import { useEffect, useState } from 'react';
import MaterialCard from '../../Components/MaterialCard.tsx';
import MaterialAppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';

export default function DashBoard() {
    const { translate } = useAppContext();
    const [dataItem, setDataItem] = useState({
        id: 0,
        title: '',
        observation: '',
    });
    const { id } = useParams();
   
    useEffect(() => {
        getDashboard(Number(id));
    }, [id]); 
    async function getDashboard(idItem: number) {
  try {
    await get("items", idItem).then((response : any[] | null) => {
      setDataItem(response?.[0] ?? {});
    });
  } catch (error) {
    console.log(error);
  }
}
  

  
        console.log(dataItem);
    return (

        <MaterialBox styles={styles.container}>
            <MaterialAppBar  title="Dashboard" home={false}/>
            <MaterialContainer styles={{width: "100%"}}>
                
                <MaterialTypography variant="h4" component="h1" styles={{ textAlign: 'center', marginBottom: 20, display:'block'} }>Dashboard</MaterialTypography>
            <MaterialCard>
                 
                    <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 20, display: 'block' }}>
                        {translate(dataItem.title)}
                    </MaterialTypography>
                    <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 20, display: 'block' }}>
                        {dataItem.observation}
                    </MaterialTypography>
                
                <MaterialTypography> Sem Implementação Grafica (Não solicitado)</MaterialTypography>
              </MaterialCard>
           </MaterialContainer>
        </MaterialBox>
    );
};

const styles = {
   container: {
        padding: '30px',
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
}