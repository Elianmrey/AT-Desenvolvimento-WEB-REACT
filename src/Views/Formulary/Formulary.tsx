import Eat from "../../Components/CustomComponents/Eat";
import Diaper from "../../Components/CustomComponents/Diaper";
import Sleep from "../../Components/CustomComponents/Sleep";
import { useAppContext } from "../../../Context/Context";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MaterialContainer from "../../Components/MaterialContainer";
import MaterialAppBar from "../../Components/CustomComponents/AppBar";


export default function DynamicFormView(){
    const { action } = useParams();
    console.log(action)
    const { translate } = useAppContext();
    const [dataDiaper, setDataDiaper] = useState({});
    const [dataSleep, setDataSleep] = useState({});
    const [dataEat, setDataEat] = useState({});
  
    
    function Getform(action: string | undefined) {
    
        switch (action) {
            case 'diaper':
                return <Diaper data={dataDiaper} setData={setDataDiaper} translate={translate} />;
            case 'sleep':
                return <Sleep data={dataSleep} setData={setDataSleep} translate={translate} />;
            case 'eat':
                return <Eat data={dataEat} setData={setDataEat} translate={translate} />;
            default:
                return null;
        }
    }
    const getTitle = (action: string | undefined): string => {
        switch (action) {
            case 'diaper':
                return translate('diaper');
            case 'sleep':
                return translate('sleep');
            case 'eat':
                return translate('eat');
            default:
                return '';
        }
    }
    return (
        <MaterialContainer styles={styles.container}>

            <MaterialAppBar title={translate('formulary') + ": " + getTitle(action)}  home={false} />
            {Getform(action)}
      </MaterialContainer>
    )

}
 
const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
       color: 'white',
        gap: 10,
        backgroundColor: 'white',
        padding: 5,
    },  
    };