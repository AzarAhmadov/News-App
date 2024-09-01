import React, { useState } from "react";

const useForm: React.FC<any> = ({ initialValue = {}, onSubmit } = {}) => {
  const [form, setForm] = useState(initialValue);

  const handleInput = (e: any) => {
    const { name, value } = e.target;

    setForm((values: any) => ({ ...values, [name]: value }));
  };

  const resetData = () => setForm(initialValue);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(form);
  };

  return {
    form,
    setForm,
    handleInput,
    resetData,
    handleSubmit,
  };
};

export default useForm;
