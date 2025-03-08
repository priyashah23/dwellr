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
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  priceRange: number;
  bedrooms: number;
  isFlat: boolean;
  isNewHome: boolean;
  hasGarden: boolean;
  features: string[];
  location: string;
};

const Preferences = () => {
  const { register, handleSubmit } = useForm<FormValues>();
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

        <FormControl>
          <FormLabel>Property type</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="flat">Flat</Radio>
              <Radio value="house">House</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>New home</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Garden</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Features</FormLabel>
          <CheckboxGroup>
            <Stack direction="row">
              <Checkbox value="1">1</Checkbox>
              <Checkbox value="2">2</Checkbox>
              <Checkbox value="3">3</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>

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
