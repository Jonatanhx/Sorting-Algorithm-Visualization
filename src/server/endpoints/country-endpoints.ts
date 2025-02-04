"use server";

import type { Prisma } from "@prisma/client";
import { db } from "../../../prisma/db";

export async function addCountry(country: Prisma.CountriesGetPayload<object>) {
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

export async function updateCountry(
  country: Prisma.CountriesGetPayload<object>
) {
  if (!country.id) {
    throw new Error("Missing country id in PUT request");
  }
  if (country.name === null) {
    throw new Error("Country name cannot be null");
  }
  try {
    await db.countries.update({
      where: { id: country.id },
      data: {
        name: country.name,
        populationSize: country.populationSize,
        landArea: country.landArea,
      },
    });
  } catch (err) {
    throw new Error(`Failed to update country ${country}`);
  }
}
