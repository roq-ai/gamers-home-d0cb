import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createFreelancerProfile } from 'apiSdk/freelancer-profiles';
import { freelancerProfileValidationSchema } from 'validationSchema/freelancer-profiles';
import { FreelancerProfileInterface } from 'interfaces/freelancer-profile';

function FreelancerProfileCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: FreelancerProfileInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createFreelancerProfile(values);
      resetForm();
      router.push('/freelancer-profiles');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<FreelancerProfileInterface>({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      address: '',
      age: '',
      city: '',
      country: '',
      gamingexp: '',
      gamingplat: '',
      gamingenre: '',
      streaminplat: '',
      streamingfrq: '',
      culbg: '',
      lang: '',
    },
    validationSchema: freelancerProfileValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Freelancer Profiles',
              link: '/freelancer-profiles',
            },
            {
              label: 'Create Freelancer Profile',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Freelancer Profile
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.email}
            label={'Email'}
            props={{
              name: 'email',
              placeholder: 'Email',
              value: formik.values?.email,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.firstname}
            label={'Firstname'}
            props={{
              name: 'firstname',
              placeholder: 'Firstname',
              value: formik.values?.firstname,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.lastname}
            label={'Lastname'}
            props={{
              name: 'lastname',
              placeholder: 'Lastname',
              value: formik.values?.lastname,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.address}
            label={'Address'}
            props={{
              name: 'address',
              placeholder: 'Address',
              value: formik.values?.address,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.age}
            label={'Age'}
            props={{
              name: 'age',
              placeholder: 'Age',
              value: formik.values?.age,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.city}
            label={'City'}
            props={{
              name: 'city',
              placeholder: 'City',
              value: formik.values?.city,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.country}
            label={'Country'}
            props={{
              name: 'country',
              placeholder: 'Country',
              value: formik.values?.country,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.gamingexp}
            label={'Gamingexp'}
            props={{
              name: 'gamingexp',
              placeholder: 'Gamingexp',
              value: formik.values?.gamingexp,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.gamingplat}
            label={'Gamingplat'}
            props={{
              name: 'gamingplat',
              placeholder: 'Gamingplat',
              value: formik.values?.gamingplat,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.gamingenre}
            label={'Gamingenre'}
            props={{
              name: 'gamingenre',
              placeholder: 'Gamingenre',
              value: formik.values?.gamingenre,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.streaminplat}
            label={'Streaminplat'}
            props={{
              name: 'streaminplat',
              placeholder: 'Streaminplat',
              value: formik.values?.streaminplat,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.streamingfrq}
            label={'Streamingfrq'}
            props={{
              name: 'streamingfrq',
              placeholder: 'Streamingfrq',
              value: formik.values?.streamingfrq,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.culbg}
            label={'Culbg'}
            props={{
              name: 'culbg',
              placeholder: 'Culbg',
              value: formik.values?.culbg,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.lang}
            label={'Lang'}
            props={{
              name: 'lang',
              placeholder: 'Lang',
              value: formik.values?.lang,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/freelancer-profiles')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'freelancer_profile',
    operation: AccessOperationEnum.CREATE,
  }),
)(FreelancerProfileCreatePage);
