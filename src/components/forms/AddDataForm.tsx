import { createMemo, createSignal, useContext } from "solid-js";
import { z } from "zod";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import type { country } from "~/interfaces";
import { addCountry } from "~/server/endpoints/country-endpoints";
import { CountrySchema } from "~/zod/zodSchemas";
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
  const { countries, refetch } = useContext(CountryDataContext);
  const [name, setName] = createSignal<string>("");
  const [populationSize, setPopulationSize] = createSignal<number>(0);
  const [landArea, setLandArea] = createSignal<number>(0);
  const [errors, setErrors] = createSignal<Record<string, string>>({});

  const isNameUnique = createMemo(() => {
    const currentCountries = countries();
    if (!currentCountries || !Array.isArray(currentCountries)) return true;

    return !currentCountries.some(
      (country) =>
        country.name && country.name.toLowerCase() === name().toLowerCase()
    );
  });

  const validateForm = () => {
    const formData = {
      name: name(),
      populationSize: populationSize(),
      landArea: landArea(),
    };

    try {
      CountrySchema.parse(formData);
      if (!isNameUnique()) {
        throw new Error("Name must be unique");
      }
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        if (!isNameUnique()) {
          newErrors.name = "Name must be unique";
        }
        setErrors(newErrors);
      }
      return false;
    }
  };

  const isFormValid = createMemo(() => {
    return validateForm();
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();

    if (!isFormValid()) return;

    const formData: country = {
      name: name(),
      populationSize: populationSize(),
      landArea: landArea(),
    };

    await addCountry(formData);
    await refetch();

    setName("");
    setPopulationSize(0);
    setLandArea(0);
  }

  return (
    <div>
      <form class="flex gap-1 flex-col" onSubmit={handleSubmit}>
        <TextFieldRoot
          class="mb-4"
          value={name()}
          onChange={(value: string) => setName(value)}
        >
          <TextFieldLabel>Name</TextFieldLabel>
          <TextField required type="text" />
          {errors().name && (
            <TextFieldErrorMessage>{errors().name}</TextFieldErrorMessage>
          )}
        </TextFieldRoot>

        <NumberField
          minValue={0}
          maxValue={1429000000}
          onRawValueChange={(value) => setPopulationSize(Number(value))}
          class="mb-4"
        >
          <NumberFieldLabel>Population size</NumberFieldLabel>
          <NumberFieldGroup>
            <NumberFieldDecrementTrigger aria-label="Decrement" />
            <NumberFieldInput placeholder="0" />
            {errors().populationSize && (
              <NumberFieldErrorMessage>
                {errors().populationSize}
              </NumberFieldErrorMessage>
            )}
            <NumberFieldIncrementTrigger aria-label="Increment" />
          </NumberFieldGroup>
        </NumberField>

        <NumberField
          minValue={0}
          maxValue={1429000000}
          class="mb-4"
          onRawValueChange={(value) => setLandArea(Number(value))}
        >
          <NumberFieldLabel>Land area in km2</NumberFieldLabel>
          <NumberFieldGroup>
            <NumberFieldDecrementTrigger aria-label="Decrement" />
            <NumberFieldInput placeholder="0" />
            {errors().landArea && (
              <NumberFieldErrorMessage>
                {errors().landArea}
              </NumberFieldErrorMessage>
            )}
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
