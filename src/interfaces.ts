import type { Accessor, Resource, Setter } from "solid-js";

export interface country {
  name: string;
  populationSize: number;
  landArea: number;
}

export interface SelectedDataTableContextValue {
  selectedDataTable: Accessor<string>;
  setSelectedDataTable: Setter<string>;
}

export interface CountryDataContextValue {
  countries: Resource<
    {
      name: string | null;
      id: number;
      populationSize: number;
      landArea: number;
    }[]
  >;

  refetch: (info?: unknown) =>
    | {
        name: string | null;
        id: number;
        populationSize: number;
        landArea: number;
      }[]
    | Promise<
        | {
            name: string | null;
            id: number;
            populationSize: number;
            landArea: number;
          }[]
        | undefined
      >
    | null
    | undefined;
}
