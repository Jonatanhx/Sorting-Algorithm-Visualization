import type { Accessor, Resource, Setter } from "solid-js";

export interface country {
  name: string;
  populationSize: number;
  landArea: number;
}

export interface CountryWithId extends country {
  id: string;
}

export interface SortingTimerProps {
  isRunning: boolean;
}

export interface DataContextValue {
  data: Accessor<number[]>;
  setData: Setter<number[]>;
}

/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
export interface CountryDataContextValue {
  countries: Resource<
    {
      name: string | null;
      id: string;
      populationSize: number;
      landArea: number;
    }[]
  >;

  refetch: (info?: unknown) =>
    | {
        name: string | null;
        id: string;
        populationSize: number;
        landArea: number;
      }[]
    | Promise<
        | {
            name: string | null;
            id: string;
            populationSize: number;
            landArea: number;
          }[]
        | undefined
      >
    | null
    | undefined;
}
