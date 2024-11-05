import { Box, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { InputField } from "../../../components/FormFields/InputField";

export function AddEditPostForm({ data, onSubmit, onCancel }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: data?.title ?? "",
      author: data?.author ?? "",
      description: data?.description ?? "",
      imageUrl: data?.imageUrl ?? "",
    },
  });

  const handleFormSubmit = handleSubmit((formValues) => {
    onSubmit?.(formValues);
  });

  return (
    <Stack component="form" noValidate spacing={2} onSubmit={handleFormSubmit}>
      <Box>
        <InputField name="title" control={control} label="Title" />
      </Box>

      <Box>
        <InputField name="author" control={control} label="Author" />
      </Box>

      <Box>
        <InputField name="imageUrl" control={control} label="Image" />
      </Box>

      <Box>
        <InputField name="description" control={control} label="Description" />
      </Box>

      <Box>
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <Button variant="outlined" onClick={() => onCancel?.()}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            {data ? "Update" : "Create"}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
