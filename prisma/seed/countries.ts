import { db } from "../db";

const countries = [
  { name: "Sweden", populationSize: 10540000, landArea: 450295 },
  { name: "Pakistan", populationSize: 240500000, landArea: 881913 },
  { name: "United States", populationSize: 331900000, landArea: 9833517 },
  { name: "Brazil", populationSize: 214300000, landArea: 8515770 },
  { name: "India", populationSize: 1408000000, landArea: 3287263 },
  { name: "Japan", populationSize: 125360000, landArea: 377915 },
  { name: "Nigeria", populationSize: 218500000, landArea: 923768 },
  { name: "Germany", populationSize: 83240000, landArea: 357022 },
  { name: "Australia", populationSize: 25690000, landArea: 7741220 },
  { name: "Mexico", populationSize: 128900000, landArea: 1964375 },
  { name: "Egypt", populationSize: 104260000, landArea: 1001450 },
  { name: "Canada", populationSize: 38250000, landArea: 9984670 },
  { name: "Russia", populationSize: 145450000, landArea: 17098242 },
  { name: "China", populationSize: 1419320000, landArea: 9596960 },
  { name: "Indonesia", populationSize: 283488000, landArea: 1904569 },
  { name: "Argentina", populationSize: 45810000, landArea: 2780400 },
  { name: "Algeria", populationSize: 44180000, landArea: 2381741 },
  { name: "Kazakhstan", populationSize: 19240000, landArea: 2724900 },
  {
    name: "Congo",
    populationSize: 95890000,
    landArea: 2344858,
  },
  { name: "Saudi Arabia", populationSize: 35340000, landArea: 2149690 },
  { name: "South Africa", populationSize: 60040000, landArea: 1219090 },
  { name: "France", populationSize: 67750000, landArea: 551695 },
  { name: "Thailand", populationSize: 70080000, landArea: 513120 },
  { name: "Spain", populationSize: 47420000, landArea: 505990 },
  { name: "Turkey", populationSize: 85040000, landArea: 783562 },
  { name: "Ukraine", populationSize: 43790000, landArea: 603550 },
  { name: "Tanzania", populationSize: 63590000, landArea: 947300 },
  { name: "Myanmar", populationSize: 54180000, landArea: 676578 },
  { name: "Kenya", populationSize: 55100000, landArea: 580367 },
  { name: "Colombia", populationSize: 51520000, landArea: 1141748 },
  { name: "Ethiopia", populationSize: 120280000, landArea: 1104300 },
];

export async function seedCountries() {
  for (const country of countries) {
    await db.countries.upsert({
      where: { name: country.name },
      update: {},
      create: country,
    });
  }
}
