import React from "react";
import { useFormik } from "formik";
import { termSchema } from "../utilities/yupIndex";

const initialValues = {
  termTitle: "",
  termDefinition: "",
};

const Term = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: termSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: Term.js ~ line 16 ~ Term ~ values", values);
        action.resetForm();
      },
    });
  console.log("🚀 ~ file: Term.js ~ line 12 ~ Term ~ errors", errors);
  console.log("🚀 ~ file: Term.js ~ line 16 ~ Term ~ values", values);

  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-red-500 w-7 h-7 flex basis-1/12 justify-center items-center text-white">
        <p>1</p>
      </div>
      <div className="input-block rounded flex-col basis-4/12">
        <label htmlFor="termTitle" className="input-label font-medium">
          Enter Term<span className="text-red-500">*</span>
        </label>
        <input
          className="focus:border-black form-input rounded w-full mt-2"
          autoComplete="off"
          name="termTitle"
          id="termTitle"
          placeholder="Enter Group Name"
          value={values.termTitle}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.termTitle && touched.termTitle ? (
          <p className="form-error rounded text-red-500 bg-red-50 w-full font-medium px-3 py-1">
            {errors.termTitle}
          </p>
        ) : null}
      </div>
      <div className="input-block rounded flex-col basis-4/12">
        <label htmlFor="termDefinition" className="input-label font-medium">
          Enter Definition<span className="text-red-500">*</span>
        </label>
        <input
          className="focus:border-black form-input rounded w-full mt-2"
          autoComplete="off"
          name="termDefinition"
          id="termDefinition"
          placeholder="Enter Group Name"
          value={values.termDefinition}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.termDefinition && touched.termDefinition ? (
          <p className="form-error rounded text-red-500 bg-red-50 w-full font-medium px-3 py-1">
            {errors.termDefinition}
          </p>
        ) : null}
      </div>

      <div>4</div>
    </div>
  );
};

export default Term;
