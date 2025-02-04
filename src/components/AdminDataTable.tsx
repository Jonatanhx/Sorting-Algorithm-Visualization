import { useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import AddDataDialog from "./dialogs/AddDataDialog";
import ConfirmDeletionDialog from "./dialogs/ConfirmDeletionDialog";
import EditDataDialog from "./dialogs/EditDataDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function AdminDatatable() {
  const { countries } = useContext(CountryDataContext);

  return (
    <div class="flex flex-row justify-center">
      <div
        class="text-white border-2 border-neutral-400 bg-[#1b1b1b] rounded-md md:p-12 md:min-w-[50rem] mt-4"
        id="center-div"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="text-white">Name</TableHead>
              <TableHead class="md:min-w-[10rem] text-white">
                Population Size
              </TableHead>
              <TableHead class="md:min-w-[10rem] text-white">
                Land Area in km2
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countries.loading ? (
              <TableRow>
                <TableCell colSpan={2}>Loading...</TableCell>
              </TableRow>
            ) : (
              countries()?.map((country, index) => (
                <TableRow>
                  <TableCell class="truncate max-w-36">
                    {country.name}
                  </TableCell>
                  <TableCell>{country.populationSize}</TableCell>
                  <TableCell>{country.landArea}</TableCell>
                  <TableCell>
                    <EditDataDialog country={country} />
                  </TableCell>
                  <TableCell>
                    <ConfirmDeletionDialog index={index} name={country.name} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <AddDataDialog />
      </div>
    </div>
  );
}
