import { z } from "zod";

export const CountrySchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters long"),
  populationSize: z
    .number()
    .positive()
    .max(1429000000, "Population size cannot exceed 1,429,000,000"),
  landArea: z
    .number()
    .positive()
    .max(1429000000, "Land area cannot exceed 1,429,000,000 km²"),
});
