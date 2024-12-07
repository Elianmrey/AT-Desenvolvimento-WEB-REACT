import MaterialContainer from '../../Components/MaterialContainer.tsx';
import MaterialBox from '../../Components/MaterialBox.tsx';
import { useParams } from 'react-router-dom';
import { get } from '../../Services/Supabase.tsx';
import MaterialTypography from '../../Components/MaterialTypography.tsx';
import { useEffect, useState } from 'react';
import MaterialCard from '../../Components/MaterialCard.tsx';
import MaterialAppBar from '../../Components/CustomComponents/AppBar.tsx';
import { useAppContext } from '../../../Context/Context.tsx';
import { getTitle } from '../../Utils/Utils.tsx';

export default function DashBoard() {
    const { translate } = useAppContext();
    const [dataItem, setDataItem] = useState({
        id: 0,
        created_at: "",
        type: 0,
        side: 0,
        quantity: 0,
        start_date: "",
        end_date: "",
        observation: "",
        action_type: 0,
        title: ""
        
    });


    function handleSide(side: number) {
        if (side === 1)
            return translate("left");
        if (side === 2)
            return translate("right");
        if (side === 3)
            return translate("both");
    }


    function handleActionType(actionType: number) {
        return translate(getTitle(actionType));
    }


    interface ResponseType {
        id: number;
        created_at: string;
        type: number;
        side: number;
        quantity: number;
        start_date: string;
        end_date: string;
        observation: string;
        action_type: number;
        title: string;
    }

   
    const { id } = useParams();
   
    useEffect(() => {
        getDashboard(Number(id));
    }, [id]); 
    async function getDashboard(idItem: number) {
  try {
      await get("items", idItem).then((response: ResponseType[] | null  ) => {
          setDataItem(response[0] ?? {
              id: 0,
              created_at: "",
              type: 0,
              side: 0,
              quantity: 0,
              start_date: "",
              end_date: "",
              observation: "",
              action_type: 0,
              title: ""
      });
    });
  } catch (error) {
    console.log("Tivemos um problema ao recuperar as informações",error);
  }
}
  

  
        console.log(dataItem);
    return (

        <MaterialBox styles={styles.container}>
            <MaterialAppBar  title="Dashboard" home={false}/>
            <MaterialContainer styles={{width: "100%", height: "100%",justifyContent: "flex-start", alignItems: "center"}}>
            
             {dataItem.title ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginTop: 10, display: 'block' }}>
                        {translate(dataItem.title)}
                </MaterialTypography> : false}
                {dataItem.side ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginTop: 5, marginBottom: 2, display: 'block' }}>
                       {translate('side')+': ' + handleSide(dataItem.side)}
                </MaterialTypography> : false}
                
                {dataItem.start_date ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 2, display: 'block' }}>
                    {translate('start-date') + ': ' + new Date(dataItem.start_date).toLocaleString()}
                </MaterialTypography> : false}
                
                {dataItem.end_date ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 2, display: 'block' }}>
                    {translate('end-date') + ': ' + new Date(dataItem.end_date).toLocaleString()}
                </MaterialTypography> : false}
                   
                {dataItem.quantity ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 2, display: 'block' }}>
                    {translate('quantity') + ': ' + dataItem.quantity+ ' ml'}
                </MaterialTypography> : false}

                {dataItem.action_type ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 2, display: 'block' }}>
                    {translate('action') + ': ' + handleActionType(dataItem.action_type)}
                </MaterialTypography> : false}
                <MaterialCard>
                    {dataItem.observation ? <MaterialTypography variant="h5" component="h2" styles={{ textAlign: 'center', marginBottom: 2, display: 'block' }}>
                        Observações:  {dataItem.observation}
                    </MaterialTypography>: false}
              </MaterialCard>
           </MaterialContainer>
        </MaterialBox>
    );
};

const styles = {
   container: {
        padding: '30px',
        display: 'flex',
        height: '97vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'indigo',
        borderRadius: '10px',
        borderColor: 'grey',
        borderWidth: '2px',
        borderStyle: 'solid',
        margin: '10px auto',
    },
}