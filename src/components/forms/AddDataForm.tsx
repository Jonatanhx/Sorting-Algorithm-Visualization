import type { Prisma } from "@prisma/client";
import {
  createEffect,
  createMemo,
  createSignal,
  Setter,
  useContext,
} from "solid-js";
import { z } from "zod";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { addCountry } from "~/server/endpoints/country-endpoints";
import { CountrySchema } from "~/zod/zodSchemas";
import { Button } from "../ui/button";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from "../ui/number-field";
import { TextField, TextFieldLabel, TextFieldRoot } from "../ui/textfield";

interface AddDataFormProps {
  setOpen: Setter<boolean>;
}

export default function AddDataForm(props: AddDataFormProps) {
  const { countries, refetch } = useContext(CountryDataContext);
  const [name, setName] = createSignal<string>("");
  const [populationSize, setPopulationSize] = createSignal<number>(0);
  const [landArea, setLandArea] = createSignal<number>(0);
  const [errors, setErrors] = createSignal<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = createSignal<boolean>(false);

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

  createEffect(() => {
    if (isSubmitted() === true) {
      validateForm();
    }
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      setIsSubmitted(true);
      return;
    }

    const formData: Prisma.CountriesGetPayload<object> = {
      id: "",
      name: name(),
      populationSize: populationSize(),
      landArea: landArea(),
    };

    setName("");
    setPopulationSize(0);
    setLandArea(0);
    props.setOpen(false);
    await addCountry(formData);
    refetch();
  }

  return (
    <form
      class="flex gap-1 flex-col border min-h-[25rem]"
      onSubmit={handleSubmit}
    >
      <TextFieldRoot
        class="mb-4 min-h-[5rem]"
        value={name()}
        onChange={(value: string) => setName(value)}
      >
        <TextFieldLabel class="text-neutral-800">Name</TextFieldLabel>
        <TextField type="text" placeholder="Example" />
        {errors().name && <p class="text-red-700">{errors().name}</p>}
      </TextFieldRoot>

      <NumberField
        minValue={0}
        maxValue={1429000000}
        onRawValueChange={(value) => setPopulationSize(Number(value))}
        class="mb-4 min-h-[5rem] "
      >
        <NumberFieldLabel class="text-neutral-800">
          Population size
        </NumberFieldLabel>
        <NumberFieldGroup>
          <NumberFieldDecrementTrigger aria-label="Decrement" />
          <NumberFieldInput placeholder="0" />
          <NumberFieldIncrementTrigger aria-label="Increment" />
        </NumberFieldGroup>
        {errors().populationSize && (
          <p class="text-red-700">{errors().populationSize}</p>
        )}
      </NumberField>

      <NumberField
        minValue={0}
        maxValue={1429000000}
        class="mb-4 min-h-[5rem]"
        onRawValueChange={(value) => setLandArea(Number(value))}
      >
        <NumberFieldLabel class="text-neutral-800">
          Land area in km2
        </NumberFieldLabel>
        <NumberFieldGroup>
          <NumberFieldDecrementTrigger aria-label="Decrement" />
          <NumberFieldInput placeholder="0" />
          <NumberFieldIncrementTrigger aria-label="Increment" />
        </NumberFieldGroup>
        {errors().landArea && <p class="text-red-700">{errors().landArea}</p>}
      </NumberField>

      <div class="flex flex-col-reverse">
        <Button type="submit" aria-label="Submit data button">
          Submit
        </Button>
      </div>
    </form>
  );
}
