import React from "react";

interface FieldConfig {
  keyName: string;
  label: string;
  required?: boolean;
  type?: string;
}

interface DynamicFormProps<Type> {
  formData: Type & { id: string };
  fields: FieldConfig[];
  onChange: (key: keyof Type, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  showCancel?: boolean;
  onDelete: (id: string) => void;
  showDelete?: boolean;
}

function DynamicForm<Type>({
  formData,
  fields,
  onChange,
  onSubmit,
  onCancel,
  showCancel,
  onDelete,
  showDelete,
}: DynamicFormProps<Type>) {
  const inputStyling: string =
    "bg-[#EBEDF3] border-solid rounded-sm p-2 text-[14px]";

  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ keyName, label, required, type = "text" }) => {
        const isDescription: boolean = keyName === "description";

        return (
          <div className="py-[5px] flex flex-col" key={keyName}>
            <label htmlFor={label}>{label}</label>

            {isDescription ? (
              <textarea
                className={inputStyling}
                id={label}
                required={required}
                value={String(formData[keyName as keyof typeof formData])}
                onChange={(e) =>
                  onChange(keyName as keyof Type, e.target.value)
                }
              />
            ) : (
              <input
                className={inputStyling}
                id={label}
                type={type}
                required={required}
                value={String(formData[keyName as keyof typeof formData])}
                onChange={(e) =>
                  onChange(keyName as keyof Type, e.target.value)
                }
              />
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap gap-2 py-2">
        {showCancel ? (
          <button
            className="w-15 rounded-md  bg-[#26c245] text-white"
            type="submit"
          >
            Save
          </button>
        ) : (
          <button
            className="w-15 rounded-md  bg-[#26c245] text-white"
            type="submit"
          >
            Add
          </button>
        )}
        {showCancel && onCancel && (
          <button
            type="button"
            className="w-15 rounded-md  bg-[#d9dae3]"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}

        {showDelete && onDelete && (
          <button
            className="w-15 rounded-md  bg-[#FF4545]"
            onClick={() => onDelete(formData["id"])}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

export default DynamicForm;
export type { FieldConfig };
