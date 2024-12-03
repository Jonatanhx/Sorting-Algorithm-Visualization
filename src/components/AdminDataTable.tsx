import { createResource, Match, Switch, useContext } from "solid-js";
import { AdminDataContext } from "~/contexts/AdminDataContext";
import { db } from "../../prisma/db";
import DataTableDropDown from "./OpenDataTableDropDown";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function AdminDatatable() {
  const { dataTable } = useContext(AdminDataContext);
  const [countries] = createResource(async () => {
    "use server";
    const populationData = await db.countries.findMany({});
    return populationData;
  });
  return (
    <div class="flex flex-row">
      <div class="flex flex-1" />
      <div class="text-white flex justify-center border-8 border-purple-600 border-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)] flex-col">
        <DataTableDropDown />
        <Switch>
          <Match when={dataTable() == "countries"}>
            <Table class="w-96 m-12">
              <TableCaption>Data table 1.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Population Size</TableHead>
                  <TableHead>Land Area in km2</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {countries.loading ? (
                  <TableRow>
                    <TableCell colSpan={2}>Loading...</TableCell>
                  </TableRow>
                ) : (
                  countries()?.map((country) => (
                    <TableRow>
                      <TableCell>{country.name}</TableCell>
                      <TableCell>{country.populationSize}</TableCell>
                      <TableCell>{country.landArea}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Match>
        </Switch>
      </div>
      <div class="flex flex-1" />
    </div>
  );
}
