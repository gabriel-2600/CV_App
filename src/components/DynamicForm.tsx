import React from "react";

interface FieldConfig {
  keyName: string;
  label: string;
  required?: boolean;
  type?: string;
}

interface DynamicFormProps<Type> {
  formData: Type;
  fields: FieldConfig[];
  onChange: (key: keyof Type, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  showCancel?: boolean;
}

function DynamicForm<Type>({
  formData,
  fields,
  onChange,
  onSubmit,
  onCancel,
  showCancel,
}: DynamicFormProps<Type>) {
  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ keyName, label, required, type = "text" }) => (
        <div className="py-[5px]" key={keyName}>
          <label htmlFor={label}>{label}: </label>
          <input
            className="border-1 border-solid"
            id={label}
            type={type}
            required={required}
            value={String(formData[keyName as keyof typeof formData])}
            onChange={(e) => onChange(keyName as keyof Type, e.target.value)}
          />
        </div>
      ))}

      <button type="submit">Add</button>
      {showCancel && onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default DynamicForm;
export type { FieldConfig };
