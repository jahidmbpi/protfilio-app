"use client";
import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  fullName: string;
  email: string;
  reason: string;
  message: string;
};
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="max-w-5xl flex mx-auto min-h-screen ">
      <div className="flex items-center w-full mt-7 sm:mt-0 p-2 sm:p-0">
        <div className="w-full">
          <div className="mb-5 sm:mb-7 md:my-10">
            <h2 className="text-xl md:text-2xl font-semibold capitalize text-black">
              contact me
            </h2>
            <p className="text-[#5b5454]">
              Feel free to reach out for collaboration, questions, or just a
              friendly hello.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" space-y-2 md:space-y-3">
                <div>
                  <label className="text-sm font-medium text-slate-700 font-sans capitalize">
                    full name
                  </label>
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 bg-transparent outline-none"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 font-sans capitalize">
                    email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Full name is required",
                    })}
                    className="w-full  border border-gray-300 rounded-md px-3 py-1 bg-transparent outline-none"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Reason for Contact
                  </label>
                  <select
                    {...register("reason", {
                      required: "Full name is required",
                    })}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md bg-transparent outline-none"
                  >
                    <option value="" disabled>
                      --select an option
                    </option>
                    <option value="collaboration">Collaboration</option>
                    <option value="freelance">Freelance/Project Work</option>
                    <option value="question">Question/Help</option>
                    <option value="just_saying_hi">Just Saying Hi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="capitalize font-medium  font-sans text-slate-700">
                    message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md px-3"
                  ></textarea>
                </div>
              </div>
              <Button className="bg-blue-400" type="submit">
                submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
