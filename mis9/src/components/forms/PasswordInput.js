import { useField, ErrorMessage } from "formik";
import { useState } from "react";

function PasswordInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  const [passswordVisibility, setPassswordVisibility] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-600 text-sm font-semibold">
        {field.name}
      </label>
      <div>
        <input
          type={passswordVisibility ? "text" : "password"}
          name={field.name}
          placeholder={placeholder}
          {...field}
          {...props}
          className={`w-full border-2 ${
            meta.touched && meta.error && "border-red-600"
          } border-gray-300 p-2 rounded-md`}
        />
        <div
          className="text-xs font-semibold py-1 text-gray-400 hover:text-gray-600 hover:cursor-pointer transition-all ease-in-out"
          onClick={() => setPassswordVisibility(!passswordVisibility)}
        >
          {passswordVisibility ? "Hide password" : "Show password"}
        </div>
      </div>
      <p className="text-red-700 text-xs font-bold">
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </p>
    </div>
  );
}

export default PasswordInput;
