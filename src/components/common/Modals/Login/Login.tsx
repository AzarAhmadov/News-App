import React, { FormEvent } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../../../ui/Button";
import classNames from "classnames";
import { serviceSetToggleStatus } from "../../../../services/app.service";
import { useStoreApp } from "../../../../store/features/app.slice";
import useForm from "../../../../hooks/useForm";
import { serviceAuthLogin } from "../../../../services/auth.service";
import FormGroup from "../../../ui/Form/FormGroup";
import FormInput from "../../../ui/Form/FormInput";
import { translate } from "../../../../helper/helper";

const Login: React.FC = () => {
  const { values, setField, handleSubmit } = useForm({
    initialState: {
      email: "",
      password: "",
    },
    onSubmit: async (values: any) => {
      await serviceAuthLogin(values);
    },
  });

  const { toggle } = useStoreApp();

  if (toggle) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div
      className={classNames(
        "fixed inset-0 z-10 grid h-screen w-full place-items-center backdrop-blur-sm transition-all duration-300",
        {
          "visible scale-100 opacity-100": toggle,
          "invisible scale-90 opacity-0": !toggle,
        },
      )}
    >
      <div className="w-full max-w-[450px] rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="flex items-center justify-between p-5 border-b dark:border-gray-600">
          <h4 className="text-xl">{translate("auth.login")}</h4>
          <IoMdClose
            onClick={serviceSetToggleStatus}
            className="cursor-pointer text-[1.5rem]"
          />
        </div>
        <div className="py-7 pe-5 ps-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <div className="flex flex-col mb-2">
              <FormGroup label="Email" required={true} error="email">
                <FormInput
                  value={values.email}
                  onChange={(e: FormEvent) => setField("email", e)}
                />
              </FormGroup>
            </div>
            <div className="flex flex-col">
              <FormGroup required={true} label="Password" error="password">
                <FormInput
                  password={true}
                  value={values.password}
                  onChange={(e: FormEvent) => setField("password", e)}
                />
              </FormGroup>
            </div>
            <Button size="sm" type="submit" variant="black" rounded={true}>
              {translate("auth.login")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
