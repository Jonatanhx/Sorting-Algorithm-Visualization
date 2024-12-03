import { createSignal } from "solid-js";
import type { country } from "~/interfaces";
import { addCountry } from "~/server/endpoints/country-endpoints";
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

export default function AddDataForm() {
  const [name, setName] = createSignal<string>("");
  const [populationSize, setPopulationSize] = createSignal<number>(0);
  const [landArea, setLandArea] = createSignal<number>(0);

  function handleSubmit(event: Event) {
    event.preventDefault();
    const formData: country = {
      name: name(),
      populationSize: populationSize(),
      landArea: landArea(),
    };

    addCountry(formData);
  }

  return (
    <div>
      <form class="flex gap-1 flex-col" onSubmit={handleSubmit}>
        <TextFieldRoot>
          <TextFieldLabel>Name</TextFieldLabel>
          <TextField
            required
            type="text"
            placeholder="Name"
            minLength={4}
            value={name()}
            onChange={(e: Event) => {
              const target = e.target as HTMLInputElement;
              setName(String(target.value));
            }}
          />
        </TextFieldRoot>

        <NumberField minValue={0}>
          <NumberFieldLabel>Population size</NumberFieldLabel>
          <NumberFieldGroup>
            <NumberFieldDecrementTrigger aria-label="Decrement" />
            <NumberFieldInput
              placeholder="0"
              value={populationSize()}
              onChange={(e: Event) => {
                const target = e.target as HTMLInputElement;
                setPopulationSize(Number(target.value));
              }}
            />
            <NumberFieldIncrementTrigger aria-label="Increment" />
          </NumberFieldGroup>
        </NumberField>

        <NumberField minValue={0}>
          <NumberFieldLabel>Land area in km2</NumberFieldLabel>
          <NumberFieldGroup>
            <NumberFieldDecrementTrigger aria-label="Decrement" />
            <NumberFieldInput
              placeholder="0"
              value={landArea()}
              onChange={(e: Event) => {
                const target = e.target as HTMLInputElement;
                setLandArea(Number(target.value));
              }}
            />
            <NumberFieldIncrementTrigger aria-label="Increment" />
          </NumberFieldGroup>
        </NumberField>
        <div class="flex flex-col-reverse">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
