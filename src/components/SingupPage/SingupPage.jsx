import { useState } from "react";
import { useForm } from "react-hook-form";

function SignupPage() {
  const [info, setInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    setInfo(data);
  };
  return (
    <>
      <form className="container mt-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Email input */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className={`form-control ${
              errors.email ? "is-invalid" : dirtyFields.email && "is-valid"
            }`}
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email ? (
            <span className="text-danger">{errors.email.message}</span>
          ) : (
            dirtyFields.email && (
              <span className="text-success">You typed a valid email</span>
            )
          )}
        </div>

        {/* Password input */}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className={`form-control ${
              errors.password
                ? "is-invalid"
                : dirtyFields.password && "is-valid"
            }`}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password ? (
            <span className="text-danger">{errors.password.message}</span>
          ) : (
            dirtyFields.password && (
              <span className="text-success">You typed a valid password</span>
            )
          )}
        </div>

        {/* Nationality select */}
        <div className="form-group">
          <label>Nationality:</label>
          <select className="form-control" {...register("nationality")}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Submit
        </button>
      </form>
      {info.nationality && (
        <div>
          <p>
            {info.nationality === "en"
              ? "Hello"
              : info.nationality === "de"
              ? "Hallo"
              : "Bonjour"}
          </p>
          <p>Your email is {info.email}</p>
        </div>
      )}
    </>
  );
}

export default SignupPage;
