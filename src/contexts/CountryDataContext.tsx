import type { ParentProps } from "solid-js";
import { createContext, createResource } from "solid-js";
import type { CountryDataContextValue } from "~/interfaces";
import { db } from "../../prisma/db";

export const CountryDatacontext = createContext<CountryDataContextValue>(
  {} as CountryDataContextValue
);

export function CountryDataProvider(props: ParentProps) {
  const [countries, { refetch }] = createResource(async () => {
    "use server";
    const populationData = await db.countries.findMany({});

    return populationData;
  });
  return (
    <CountryDatacontext.Provider value={{ countries, refetch }}>
      {props.children}
    </CountryDatacontext.Provider>
  );
}