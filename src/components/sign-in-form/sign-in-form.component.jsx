import { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import Button, {
  BUTTON_TYPES_CLASSES,
} from "../../components/button/button.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const loginWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const logInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password": {
          alert("incorrect password");
          break;
        }
        case "auth/user-not-found": {
          alert("no user associated with this email");
          break;
        }
        default:
          console.log(err);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={logInWithEmailAndPassword}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        ></FormInput>
        <div className="buttons-container">
          <Button
            type="submit"
          >
            Sign In
          </Button>
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={loginWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
