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
  { name: "Congo", populationSize: 95890000, landArea: 2344858 },
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
  { name: "Italy", populationSize: 60360000, landArea: 301340 },
  { name: "South Korea", populationSize: 51780000, landArea: 100210 },
  { name: "Vietnam", populationSize: 98190000, landArea: 331212 },
  { name: "Poland", populationSize: 37840000, landArea: 312696 },
  { name: "Iran", populationSize: 87290000, landArea: 1648195 },
  { name: "Peru", populationSize: 33720000, landArea: 1285216 },
  { name: "Malaysia", populationSize: 33180000, landArea: 330803 },
  { name: "Uzbekistan", populationSize: 34920000, landArea: 447400 },
  { name: "Morocco", populationSize: 37380000, landArea: 446550 },
  { name: "Ghana", populationSize: 32830000, landArea: 238533 },
  { name: "Yemen", populationSize: 31150000, landArea: 527968 },
  { name: "Nepal", populationSize: 30030000, landArea: 147181 },
  { name: "Venezuela", populationSize: 28200000, landArea: 916445 },
  { name: "Madagascar", populationSize: 28920000, landArea: 587041 },
  { name: "Cameroon", populationSize: 27200000, landArea: 475442 },
  { name: "Ivory coast", populationSize: 27480000, landArea: 322463 },
  { name: "North Korea", populationSize: 25970000, landArea: 120538 },
  { name: "Australia", populationSize: 25690000, landArea: 7692024 },
  { name: "Niger", populationSize: 25130000, landArea: 1267000 },
  { name: "Taiwan", populationSize: 23570000, landArea: 36197 },
  { name: "Sri Lanka", populationSize: 22160000, landArea: 65610 },
  { name: "Burkina Faso", populationSize: 21500000, landArea: 274200 },
  { name: "Mali", populationSize: 20860000, landArea: 1240192 },
  { name: "Romania", populationSize: 19120000, landArea: 238397 },
  { name: "Chile", populationSize: 19490000, landArea: 756102 },
  { name: "Kazakhstan", populationSize: 19000000, landArea: 2724900 },
  { name: "Malawi", populationSize: 19650000, landArea: 118484 },
  { name: "Zambia", populationSize: 18920000, landArea: 752612 },
  { name: "Ecuador", populationSize: 17800000, landArea: 283561 },
  { name: "Netherlands", populationSize: 17530000, landArea: 41850 },
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
