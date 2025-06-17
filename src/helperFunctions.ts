import { country } from "./interfaces";

export function scrambleData(data: number[]) {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
}
export function calculateHeight(
  value: number,
  array: country[],
  selectedDataTable: keyof country
) {
  const values = array.map((country) => country[selectedDataTable] as number);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const minLog = Math.log(minValue || 1);
  const maxLog = Math.log(maxValue);
  const logPercentage = ((Math.log(value) - minLog) / (maxLog - minLog)) * 100;
  return `${Math.max(5, Math.min(100, logPercentage))}%`;
}
