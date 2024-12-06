import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useAppContext } from '../../../Context/Context';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import MaterialTypography from '../MaterialTypography';
import MaterialBox from '../MaterialBox';
import { getTitle } from '../../Utils/Utils';
import DeleteIcon from '@mui/icons-material/Delete';


interface ItemListProps {
    
    items: Array<{ id: number; action_type: number; start_date: string; end_date: string; observation: string; title: string }>;
    onDrop: ( id: number) => void;
}



export default function CustomItemList({ items,onDrop, ...props }: ItemListProps) {


    const navigate = useNavigate();
    const { translate } = useAppContext();

    if (!translate) {
        console.error("translate function is missing from context.");
        return null;
    }

    function getIcon(actionTypeScale: number) {
        switch (actionTypeScale) {
            case 1:
                return <BedtimeIcon sx={{ color: '#FFB300' }}/>;
            case 2:
                return <RestaurantMenuIcon  sx={{ color: '#06B024' }}/>;
            case 3:
                return <BabyChangingStationIcon  sx={{ color: 'indigo' }}/>;
            default:
                return <RestaurantMenuIcon sx={{ color: '#06B024'  }}/>;
        }
    }

    const actionTypeListToInt: { [key: number]: string } = {
        1: "sleep",
        2: "eat",
        3: "diaper",
    };

    const typeColor: { [key: number]: string } = {
        1: "#4b10a9",
        2: "lightgreen",
        3: "#f4cc1d",
    };


    const generateSubtitle = (item: { title: string;action_type: number}, translate: (key: string) => string) => {
        return `${translate('action')}: ${translate(getTitle(item.action_type))} `;
    };


    return (
        <MaterialBox>
            {items.length > 0 ? (
            <List {...props}>
            {items.map((item, index) => {
                const typeStr = actionTypeListToInt[item.action_type];
                return (
                    <ListItem
                        key={item.id}
                        sx={{
                            backgroundColor: "primary.light",
                            borderRadius: "60px",
                            marginTop: "1em",
                            color: "white",
                           
                        }}
                        id={`new-item-list-${index}`}
                      
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: typeColor[item.action_type] }}>
                                {getIcon(item.action_type)}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={translate(typeStr)}
                            secondary={generateSubtitle(item, translate)} onClick={() => navigate(`/dashboard/${item.id}`)}
                        />
                        <DeleteIcon sx={{ color: 'secondary.light', cursor: 'pointer',zIndex: 1000 }} onClick={() => onDrop(item.id)}/>
                    </ListItem>
                );
            })}
                </List>)
                 : <MaterialTypography variant="h6" component="h1" styles={Styles.title}>{translate("no-items-to-show")}</MaterialTypography>
            }
        </MaterialBox>
    );
}

const Styles = {
    title: {
        marginTop: "1em",
        marginBottom: "1em",
    },
};