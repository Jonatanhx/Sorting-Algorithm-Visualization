import type { ParentProps } from "solid-js";
import { createContext, createResource } from "solid-js";
import type { CountryDataContextValue } from "~/interfaces";
import { db } from "../../prisma/db";

export const CountryDataContext = createContext<CountryDataContextValue>(
  {} as CountryDataContextValue
);

export function CountryDataProvider(props: ParentProps) {
  const [countries, { refetch }] = createResource(async () => {
    "use server";
    const populationData = await db.countries.findMany({
      orderBy: { id: "desc" },
    });

    return populationData;
  });
  return (
    <CountryDataContext.Provider value={{ countries, refetch }}>
      {props.children}
    </CountryDataContext.Provider>
  );
}
