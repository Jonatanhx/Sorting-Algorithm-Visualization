import { createMemo, createSignal, useContext } from "solid-js";
import { CountryDatacontext } from "~/contexts/CountryDataContext";
import type { country } from "~/interfaces";
import { addCountry } from "~/server/endpoints/country-endpoints";
import { Button } from "../ui/button";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldErrorMessage,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from "../ui/number-field";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldLabel,
  TextFieldRoot,
} from "../ui/textfield";

export default function AddDataForm() {
  const { countries, refetch } = useContext(CountryDatacontext);
  const [name, setName] = createSignal<string>("Name");
  const [populationSize, setPopulationSize] = createSignal<number>(0);
  const [landArea, setLandArea] = createSignal<number>(0);

  const minTextLength = 4;
  const maxNumberValue = 1429000000;

  const isNameUnique = () => {
    const currentCountries = countries();
    if (!currentCountries || !Array.isArray(currentCountries)) return true;

    return !currentCountries.some(
      (country) =>
        country.name && country.name.toLowerCase() === name().toLowerCase()
    );
  };

  const isFormValid = createMemo(() => {
    return (
      isNameUnique() &&
      name().length >= minTextLength &&
      populationSize() > 0 &&
      populationSize() <= maxNumberValue &&
      landArea() > 0 &&
      landArea() <= maxNumberValue
    );
  });

  function handleSubmit(event: Event) {
    event.preventDefault();

    const formData: country = {
      name: name(),
      populationSize: populationSize(),
      landArea: landArea(),
    };

    addCountry(formData);
    refetch();
  }

  return (
    <div>
      <form class="flex gap-1 flex-col" onSubmit={handleSubmit}>
        <TextFieldRoot
          class="mb-4"
          defaultValue="Name"
          validationState={
            name().length >= minTextLength && isNameUnique()
              ? "valid"
              : "invalid"
          }
          value={name()}
          onChange={setName}
        >
          <TextFieldLabel>Name</TextFieldLabel>
          <TextField required type="text" />
          <TextFieldErrorMessage>
            Minimum four characters and a unique name is required.
          </TextFieldErrorMessage>
        </TextFieldRoot>

        <NumberField
          minValue={0}
          maxValue={maxNumberValue}
          onRawValueChange={setPopulationSize}
          validationState={
            populationSize() <= maxNumberValue ? "valid" : "invalid"
          }
          class="mb-4"
        >
          <NumberFieldLabel>Population size</NumberFieldLabel>
          <NumberFieldGroup>
            <NumberFieldDecrementTrigger aria-label="Decrement" />
            <NumberFieldInput placeholder="0" />

            <NumberFieldErrorMessage>
              The value can not exceed {maxNumberValue}
            </NumberFieldErrorMessage>

            <NumberFieldIncrementTrigger aria-label="Increment" />
          </NumberFieldGroup>
        </NumberField>

        <NumberField
          minValue={0}
          maxValue={maxNumberValue}
          class="mb-4"
          onRawValueChange={setLandArea}
          validationState={landArea() <= maxNumberValue ? "valid" : "invalid"}
        >
          <NumberFieldLabel>Land area in km2</NumberFieldLabel>
          <NumberFieldGroup>
            <NumberFieldDecrementTrigger aria-label="Decrement" />
            <NumberFieldInput placeholder="0" />

            <NumberFieldErrorMessage>
              The value can not exceed {maxNumberValue}
            </NumberFieldErrorMessage>

            <NumberFieldIncrementTrigger aria-label="Increment" />
          </NumberFieldGroup>
        </NumberField>

        <div class="flex flex-col-reverse">
          <Button type="submit" disabled={!isFormValid()}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
