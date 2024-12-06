import { save } from "../../Services/Supabase";
import FormComponent from "./Form";
import { useAppContext } from "../../../Context/Context";

interface EatProps {
  data: {
    type?: number;
    side?: number;
    quantity?: string;
    start_date?: string;
    end_date?: string;
    observation?: string;
    action_type?: number;
  };
  setData: (data: object) => void;
  translate: (key: string) => string;
}

export default function Eat({ data, setData, translate }: EatProps) {
  const { ShowAlert } = useAppContext();
  const fields: {
  name: string;
  label: string;
  type: "number" | "select" | "text" | "date";
  options?: { value: string | number; label: string }[];
}[] = [
  { name: "type", label: translate("type"), type: "select", options: [
      { value: 1, label: translate("eat-bottle") },
      { value: 2, label: translate("eat-bosom") },
    ] 
  },
  { name: "side", label: translate("side"), type: "select", options: [
      { value: 1, label: translate("left") },
      { value: 2, label: translate("right") },
    { value: 3, label: translate("both") },
      { value: 4, label: translate("none") },
    ] 
  },
  { name: "quantity", label: translate("quantity"), type: "number" },
  { name: "start_date", label: translate("date-hour-start"), type: "date" },
  { name: "end_date", label: translate("date-hour-end"), type: "date" },
  { name: "observation", label: translate("observation"), type: "text" },
];


  const handleSubmit = () => {
    save('items', { ...data, action_type: 2, title: "eat" });
    ShowAlert(translate("item-saved-success"), "success");
    setData({});
  };

  return <FormComponent fields={fields} data={data} setData={setData} onSubmit={handleSubmit} />;
};


