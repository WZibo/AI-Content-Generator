import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserProfileAPI } from "../../apis/user/usersAPI";
import StatusMessage from "../Alert/StatusMessage";
import { generateContentAPI } from "../../apis/chatGPT/chatGPT";

const BlogPostAIAssistant = () => {
  const [generatedContent, setGeneratedContent] = useState("");
  //get the user profile
  const { isLoading, isError, data, error } = useQuery({
    queryFn: getUserProfileAPI,
    queryKey: ["profile"],
  });

  //mutation
  const mutation = useMutation({ mutationFn: generateContentAPI });
  // Formik setup for handling form data
  const formik = useFormik({
    initialValues: {
      prompt: "",
      tone: "",
      category: "",
    },
    validationSchema: Yup.object({
      prompt: Yup.string().required("Require prompt"),
      tone: Yup.string().required("Selecting a tone"),
      category: Yup.string().required("Selecting a category"),
    }),
    onSubmit: (values) => {
      // Simulate content generation based on form values
      console.log(values);
      mutation.mutate(
        `Generate an article based ${values.prompt}, ${values.category}, ${values.tone}`
      );
      setGeneratedContent(`Generated content for prompt: ${mutation.data}`);
    },
  });
  console.log(mutation);
  //dsiplay loading
  if (isLoading) {
    return <StatusMessage type="loading" message="Loading" />;
  }
  //dsiplay loading
  if (isLoading) {
    return (
      <StatusMessage type="error" message={error?.response?.data?.message} />
    );
  }
  return (
    <div className="min-h-screen bg-[#333333] flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl w-full p-6">
        <h2 className="text-3xl font-extrabold text-black mb-8 text-center">
          AI Article Generator
        </h2>

        {mutation?.isPending && (
          <StatusMessage type="loading" message="Loading." />
        )}


        {mutation?.isSuccess && (
          <StatusMessage
            type="success"
            message="success"
          />
        )}

        {mutation?.isError && (
          <StatusMessage
            type="error"
            message={mutation?.error?.response?.data?.message}
          />
        )}

        <div className="flex mt-3">
          <div className="mr-2 mb-2">
            <span className="text-sm font-semibold bg-blue-200 px-4 py-2 rounded-full">
              Plan: {data?.user?.subscriptionPlan}
            </span>
          </div>

          <div className="mr-2 mb-2">
            <span className="text-sm font-semibold bg-blue-200 px-4 py-2 rounded-full">
              Credit: {data?.user?.apiRequestCount} /{" "}
              {data?.user?.monthlyRequestCount}
            </span>
          </div>
        </div>


        <form onSubmit={formik.handleSubmit} className="space-y-4">

          <div>
            <label
              htmlFor="prompt"
              className="block text-black text-sm font-semibold mb-2"
            >
              Enter your idea
            </label>
            <input
              id="prompt"
              type="text"
              {...formik.getFieldProps("prompt")}
              className="px-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your idea"
            />
            {formik.touched.prompt && formik.errors.prompt && (
              <div className="text-red-500 mt-1">{formik.errors.prompt}</div>
            )}
          </div>


          <div>
            <label
              htmlFor="tone"
              className="block text-black text-sm font-semibold mb-2"
            >
              Select Tone
            </label>
            <select
              id="tone"
              {...formik.getFieldProps("tone")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose a tone</option>
              <option value="formal">Formal</option>
              <option value="informal">Informal</option>
              <option value="humorous">Humorous</option>
              <option value="serious">Serious</option>
              <option value="joyful">Joyful</option>
            </select>
            {formik.touched.tone && formik.errors.tone && (
              <div className="text-red-500 mt-1">{formik.errors.tone}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-black text-sm font-semibold mb-2"
            >
              Select Category
            </label>
            <select
              id="category"
              {...formik.getFieldProps("category")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose a category</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="sports">Sports</option>
              <option value="entertainment">Entertainment</option>
              <option value="fashion">Fashion</option>
              <option value="personal-development">Personal Development</option>
              <option value="science">Science</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 mt-1">{formik.errors.category}</div>
            )}
          </div>


          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Article
          </button>

          <Link to="/history">View History</Link>
        </form>


        {generatedContent && (
          <div className="mt-6 p-4 bg-[#333333] rounded-md">
            <h3 className="text-lg font-semibold text-black mb-2">
              Generated Content:
            </h3>
            <p className="text-black">{mutation.data}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostAIAssistant;
