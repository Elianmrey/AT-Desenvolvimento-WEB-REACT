import { Box, TextField, MenuItem, Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { useAppContext } from "../../../Context/Context";

interface FormComponentProps {
  fields: {
    name: string;
    label: string;
    type: "text" | "select" | "date" | "number";
    options?: { value: number | string; label: string }[];
  }[];
  data: Record<string, string | number | undefined>;
  setData: (data: Record<string, string | number | undefined>) => void;
  onSubmit: () => void;
}

export default function FormComponent({
  fields,
  data,
  setData,
  onSubmit,
}: FormComponentProps) {
  const { translate } = useAppContext();

  const handleChange = (name: string, value: string | number | undefined) => {
    setData({ ...data, [name]: value });
  };

  const handleDateChange = (name: string, value: Dayjs | null) => {
    if (value) {
      setData({ ...data, [name]: value.toISOString() });
    } else {
      setData({ ...data, [name]: undefined });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ display: "grid", gap: 2 }}
    >
      {fields.map((field) => (
        <Box key={field.name}>
          {field.type === "select" ? (
            <TextField
              select
              label={translate(field.label)}
              value={data[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              fullWidth
            >
              {field.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {translate(option.label)}
                </MenuItem>
              ))}
            </TextField>
          ) : field.type === "date" ? (
            <DateTimePicker
              label={translate(field.label)}
              value={data[field.name] ? dayjs(data[field.name] as string) : null}
              onChange={(value) => handleDateChange(field.name, value)}
            />
          ) : (
            <TextField
              type={field.type}
              label={translate(field.label)}
              value={data[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              fullWidth
            />
          )}
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={onSubmit}>
        {translate("save")}
      </Button>
    </Box>
  );
}
