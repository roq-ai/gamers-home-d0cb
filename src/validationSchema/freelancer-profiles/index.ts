import * as yup from 'yup';

export const freelancerProfileValidationSchema = yup.object().shape({
  email: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  address: yup.string().nullable(),
  age: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  gamingexp: yup.string().required(),
  gamingplat: yup.string().required(),
  gamingenre: yup.string().required(),
  streaminplat: yup.string().nullable(),
  streamingfrq: yup.string().nullable(),
  culbg: yup.string().required(),
  lang: yup.string().required(),
});
