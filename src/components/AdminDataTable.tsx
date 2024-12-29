import { useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import AddDataDialog from "./dialogs/AddDataDialog";
import ConfirmDeletionDialog from "./dialogs/ConfirmDeletionDialog";
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
    <div class="flex flex-row justify-center flex-1 items-center">
      <div
        class="text-white border-2 bg-neutral-900 rounded-md p-12"
        id="center-div"
      >
        <Table>
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
              countries()?.map((country, index) => (
                <TableRow>
                  <TableCell>{country.name}</TableCell>
                  <TableCell>{country.populationSize}</TableCell>
                  <TableCell>{country.landArea}</TableCell>
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
