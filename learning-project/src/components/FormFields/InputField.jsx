import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField({ name, control, label, ...props }) {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      size="small"
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      label={label}
      {...props}
    />
  );
}
