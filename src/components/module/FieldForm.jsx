import { Field, ErrorMessage } from "formik";

const FieldForm = ({ type, name, minLength, maxLength, placeholder }) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-1 font-Inter font-extralight uppercase">
      <Field
        className="w-full flex flex-row justify-start items-center rounded-md p-2 text-[#C3C4C5] text-sm bg-[#242424] outline-none"
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="w-full h-auto text-[0.60rem] text-red-500"
      />
    </div>
  );
};

export default FieldForm;
