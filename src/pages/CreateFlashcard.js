import React from "react";
import { useFormik } from "formik";

const initialValues = {
  title: "",
  description: "",
};

const CreateFlashcard = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(
        "🚀 ~ file: CreateFlashcard.js ~ line 8 ~ CreateFlashcard ~ values",
        values
      );
    },
  });

  return (
    <div className="px-36 bg-[rgba(245,241,236,255)] h-screen">
      <form className="py-5" onSubmit={handleSubmit}>
        <div className="input-block bg-white px-8 rounded py-5">
          <label htmlFor="name" className="input-label font-medium">
            Create Group<span className="text-red-500">*</span>
          </label>
          <br></br>
          <input
            className="focus:border-black form-input rounded w-1/3 h-10 p-2.5 mt-2"
            autoComplete="off"
            name="title"
            id="name"
            placeholder="Enter Group Name"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></input>
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
        <div className="input-block bg-white px-8 rounded pb-5">
          <label htmlFor="name" className="input-label font-medium">
            Add Description
          </label>
          <br></br>
          <textarea
            className="focus:border-black form-textarea rounded w-2/3 h-20 p-2.5 mt-2"
            autoComplete="off"
            name="description"
            id="name"
            placeholder="Add a description for the group."
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
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
