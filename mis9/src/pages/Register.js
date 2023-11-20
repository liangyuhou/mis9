import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StandardLayout from "../components/layout/StandardLayout";

import Input from "../components/forms/Input";
import PasswordInput from "../components/forms/PasswordInput";
import FormLink from "../components/forms/FormLink";

const REGISTRATION_DATA = {
  username: "",
  email: "",
  password: "",
  address: "",
};

function Registration() {
  const navigate = useNavigate();

  const [registrationForm, setRegistrationForm] = useState(REGISTRATION_DATA);
  const { username, email, password, address } = registrationForm;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegistrationForm({ ...registrationForm, [name]: value });
  };

  const registrationSubmit = () => {
    // TODO: Necessary backend calling for user registration

    // Passed
    navigate("/");
  };

  // Yup validation schema
  const registrationValidation = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email address is required").email("Email must be a valid one"),
    password: Yup.string().required("Password is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <StandardLayout>
      <div className="h-screen px-[200px]">
        <div className="flex items-center justify-center pt-3">
          <div className="w-[400px]">
            <p className="font-bold text-4xl pb-2">Register</p>
            <p className="pb-3">Please enter your information</p>
            <Formik
              enableReinitialize
              initialValues={{ username, email, password, address }}
              validationSchema={registrationValidation}
              onSubmit={() => registrationSubmit()}
            >
              {(formik) => (
                <Form className="flex flex-col gap-2">
                  <Input
                    key="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                  />
                  <Input
                    key="email"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                  />
                  <PasswordInput
                    key="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <Input
                    key="address"
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    onChange={handleOnChange}
                  />
                  <button
                    type="submit"
                    className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
            <div className="flex flex-col gap-2 text-center my-6">
              <p className="text-sm">
                Already have an account?{" "}
                <FormLink name="Login" path="/login" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}

export default Registration;
