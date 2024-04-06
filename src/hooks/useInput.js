import { useState } from "react";

export function useInput(defaultValue, validationFn) {

  const [formValue, setFormValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(formValue);

  function handleInputChange(event) {
    setFormValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }


  return {
    value: formValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  }
}
