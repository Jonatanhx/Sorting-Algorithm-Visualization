"use server";

import type { Prisma } from "@prisma/client";
import type { country } from "~/interfaces";
import { db } from "../../../prisma/db";

export async function addCountry(country: country) {
  try {
    await db.countries.create({
      data: {
        name: country.name,
        populationSize: country.populationSize,
        landArea: country.landArea,
      },
    });
  } catch (error) {
    throw new Error("Failed to add country");
  }
}

export async function deleteCountry(
  country: Prisma.CountriesGetPayload<object>
) {
  try {
    if (country.name === null) {
      throw new Error("Country name cannot be null");
    }

    await db.countries.delete({
      where: {
        name: country.name,
      },
    });
  } catch (error) {
    throw new Error(`Failed to remove country: ${country}`);
  }
}
