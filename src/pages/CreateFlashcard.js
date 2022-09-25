import React from "react";
import { useFormik } from "formik";
import { groupSchema } from "../utilities/yupIndex";
import Term from "../components/Term";

const initialValues = {
  title: "",
  description: "",
};

const CreateFlashcard = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: groupSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: CreateFlashcard.js ~ line 17 ~ CreateFlashcard ~ values",
          values
        );
        action.resetForm();
      },
    });

  return (
    <div className="px-12 sm:px-20 md:px-28 lg:px-36 bg-[rgba(245,241,236,255)] h-full">
      <form className="py-5 border" onSubmit={handleSubmit}>
        <div className="bg-white">
          <div className="input-block rounded px-8 py-5">
            <label htmlFor="title" className="input-label font-medium">
              Create Group<span className="text-red-500">*</span>
            </label>
            <br></br>
            <input
              className="focus:border-black form-input rounded w-full sm:w-2/3 md:w-1/2 lg:w-1/3  p-2.5 mt-2"
              autoComplete="off"
              name="title"
              id="title"
              placeholder="Enter Group Name"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title ? (
              <p className="form-error rounded text-red-500 bg-red-50 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 font-medium px-3 py-1">
                {errors.title}
              </p>
            ) : null}
            {/* <div class="w-1/6 py-3">
            <div class="border h-10 rounded border-black bg-gray-100 flex justify-center items-center">
              <div class="absolute">
                <div class="flex flex-col items-center">
                  <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                  <span class="block text-gray-400 font-normal">
                    Upload Image
                  </span>
                </div>
              </div>
              <input type="file" class="h-full w-full opacity-0" name="" />
            </div>
          </div> */}
          </div>
          <div className="input-block px-8 rounded pb-5">
            <label
              htmlFor="description"
              className="input-label font-medium w-full"
            >
              Add Description <span className="text-gray-400">(optional)</span>
            </label>
            <br></br>
            <textarea
              className="focus:border-black form-textarea rounded w-full md:w-2/3 lg:w-2/3 p-2.5 mt-2"
              autoComplete="off"
              name="description"
              id="description"
              placeholder="Add a description for the group."
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        {/* 1234567890 */}

        <div className="input-block bg-white mt-5 px-8 rounded py-5">
          <Term />
        </div>

        <button
          type="submit"
          className="input-button rounded bg-red-600 text-white font-medium flex my-10 mx-auto px-16 py-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateFlashcard;
