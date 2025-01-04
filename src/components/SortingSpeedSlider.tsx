import { Slider } from "@kobalte/core/slider";
import { useContext } from "solid-js";
import { SortingSpeedContext } from "~/contexts/SortingSpeedContext";

export default function SortingSpeedSlider() {
  const { speed, setSpeed } = useContext(SortingSpeedContext);

  return (
    <div class="flex text-white flex-1 justify-center">
      <Slider
        class="SliderRoot justify-center"
        step={10}
        minValue={10}
        maxValue={100}
        value={[speed()]}
        onChange={(value: number[]) => setSpeed(value[0])}
      >
        <Slider.ValueLabel class="flex justify-end" />
        <Slider.Track class="SliderTrack">
          <Slider.Fill class="SliderRange" />
          <Slider.Thumb class="SliderThumb">
            <Slider.Input />
          </Slider.Thumb>
        </Slider.Track>
        <Slider.Label>Sorting speed</Slider.Label>
      </Slider>
    </div>
  );
}
