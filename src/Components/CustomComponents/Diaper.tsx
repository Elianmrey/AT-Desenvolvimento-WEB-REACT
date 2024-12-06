
import { save } from "../../Services/Supabase";
import FormComponent from "./Form";
import { useAppContext } from "../../../Context/Context";
interface DiaperProps {
    data: 
    {
        start_date?: string | undefined;
        type?: number;
        observation?: string | undefined;
    };
    setData: (data: object) => void;
    translate: (key: string) => string;
}

export default function Diaper({ data, setData, translate }: DiaperProps) {
    const { ShowAlert } = useAppContext();
    
    const fields: {
        name: string;
        label: string;
        type: "number" | "date" | "select" | "text";
        options?: { value: string | number; label: string; }[];
    }[] = [
            { name: "start_date", label: translate("start-date"), type: "date" },
            { name: "type", label: translate("type"), type: "select", options: [{ value: 1, label: "diaper-wet" }, { value: 2, label: "diaper-dirty" },{ value: 3, label: "diaper-both" }] },
            { name: "observation", label: translate("observation"), type: "text" },
        ];

    const handleSubmit = () => {
        save('items', { ...data, action_type: 3, title: "diaper" });
        
        ShowAlert(translate("item-saved-success"), "success");
    setData({});
  };
    return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};

