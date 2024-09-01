import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { CustomFormProviderInterface } from "../../../interfaces";

export const CustomFormProvider: FC<CustomFormProviderInterface> = ({
  children,
  methods,
  onSubmit,
}) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};
