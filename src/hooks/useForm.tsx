import { FormEvent, useState } from "react";

interface FormValues {
  [key: string]: string;
}

interface IFormProps {
  initialState: FormValues;
  onSubmit: (values: FormValues) => Promise<void> | void;
}

const useForm = ({ initialState = {}, onSubmit }: IFormProps) => {
  const [values, setValues] = useState<FormValues>(initialState);

  const setField = (name: string, value: string) => {
    setValues((oldVal) => ({
      ...oldVal,
      [name]: value,
    }));
  };

  const resetValues = () => {
    setValues(initialState);
  };

  const handleSubmit = async (e: FormEvent) => {
    e?.preventDefault();
    if (onSubmit) await onSubmit(values);
  };

  return {
    values,
    setField,
    resetValues,
    handleSubmit,
  };
};

export default useForm;
