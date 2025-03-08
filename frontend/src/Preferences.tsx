import {
  FormLabel,
  Flex,
  FormControl,
  Input,
  Radio,
  RadioGroup,
  Stack,
  CheckboxGroup,
  Checkbox
} from '@chakra-ui/react';
import Main from './ui/layout/Main';

// price range - number
// bedrooms - number
// isflat - boolean
// isnewhome - boolean
// hasgarden - boolean
// features - string[]
// location - string

const Preferences = () => {
  return (
    <Main
    >
      <FormControl>
        <FormLabel>Max price</FormLabel>
        <Input type="number" />
      </FormControl>

      <FormControl>
        <FormLabel>Number of bedrooms</FormLabel>
        <Input type="number" />
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
        <Input type="text" />
      </FormControl>
    </Main>
  );
};

export default Preferences;
