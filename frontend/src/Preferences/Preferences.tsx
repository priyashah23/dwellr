import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Radio,
  RadioGroup,
  Stack,
  CheckboxGroup,
  Checkbox,
  Button,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import Main from '../ui/layout/Main';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type FormValues = {
  priceRange: number;
  bedrooms: number;
  isFlat: string;
  isNewHome: string;
  hasGarden: string;
  features: string[];
  location: string;
};

const Preferences = () => {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      priceRange: 200000,
      bedrooms: 2,
      isFlat: 'false',
      isNewHome: 'false',
      hasGarden: 'true',
      features: ['1']
    }
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Main>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={4}
        bg="white"
        padding={4}
        borderRadius="md"
        border="1px solid"
        borderColor="cardDefaultBorderDefault"
        color="textBody"
      >
        <FormControl>
          <FormLabel>Max price</FormLabel>
          <InputGroup>
            <InputLeftElement>£</InputLeftElement>
            <Input type="number" {...register('priceRange')} />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Number of bedrooms</FormLabel>
          <Input type="number" {...register('bedrooms')} />
        </FormControl>

        <Controller
          name="isFlat"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Property type</FormLabel>
              <RadioGroup id="isFlat" {...field}>
                <Stack direction="row">
                  <Radio value="true">Flat</Radio>
                  <Radio value="false">House</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          )}
        />

        <Controller
          name="isNewHome"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>New home</FormLabel>
              <RadioGroup id="isNewHome" {...field}>
                <Stack direction="row">
                  <Radio value="true">Yes</Radio>
                  <Radio value="false">No</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          )}
        />

        <Controller
          name="hasGarden"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Garden</FormLabel>
              <RadioGroup id="hasGarden" {...field}>
                <Stack direction="row">
                  <Radio value="true">Yes</Radio>
                  <Radio value="false">No</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          )}
        />

        <Controller
          name="features"
          control={control}
          render={({ field: {value, onChange, ...rest} }) => (
            <FormControl>
              <FormLabel>Features</FormLabel>
              <CheckboxGroup value={value} onChange={onChange}>
                <Stack direction="row">
                  <Checkbox value="1" name="1" id="1">1</Checkbox>
                  <Checkbox value="2" name="2" id="2">2</Checkbox>
                  <Checkbox value="3" name="3" id="3">3</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>
          )}
        />

        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input type="text" {...register('location')} />
        </FormControl>

        <Button type="submit">Save</Button>
      </Box>
    </Main>
  );
};

export default Preferences;
