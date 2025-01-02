import type { Accessor, Resource, ResourceActions, Setter } from "solid-js";

export interface country {
  name: string;
  populationSize: number;
  landArea: number;
}

export interface SortingTimerProps {
  isRunning: boolean;
}

export interface SortingSpeedContextValue {
  speed: Accessor<number>;
  setSpeed: Setter<number>;
}

export interface SelectedDataTableContextValue {
  selectedDataTable: Accessor<string>;
  setSelectedDataTable: Setter<string>;
}

export interface IsSortingContextValue {
  isSorting: Accessor<boolean>;
  setIsSorting: Setter<boolean>;
}

export interface IsSortedContextValue {
  isSorted: Accessor<boolean>;
  setIsSorted: Setter<boolean>;
}

/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
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
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
export interface AdminDataContextValue {
  admins: Resource<
    {
      id: string;
      name: string | null;
      email: string | null;
      image: string | null;
      isAdmin: boolean;
    }[]
  >;

  refetch: ResourceActions<
    | {
        id: string;
        name: string | null;
        email: string | null;
        image: string | null;
        isAdmin: boolean;
      }[]
    | undefined,
    unknown
  >;
}
