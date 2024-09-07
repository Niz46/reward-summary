import * as yup from "yup";

export const fundAccountSchema = yup.object().shape({
  currency: yup.mixed().required("please select currency"),
  account: yup.mixed().required("please select account"),
  amount: yup.string().required("please input amount"),
});

export const withdrawAccountSchema = yup.object().shape({
  currency: yup.mixed().required("please select currency"),
  account: yup.mixed().required("please select account"),
  amount: yup.string().required("please input amount"),
  reason: yup.string(),
});
