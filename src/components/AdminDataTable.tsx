import { createSignal, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { deleteCountry } from "~/server/endpoints/country-endpoints";
import { Button } from "../components/ui/button";
import AddDataDialog from "./dialogs/AddDataDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function AdminDatatable() {
  const { countries, refetch } = useContext(CountryDataContext);
  const [isEditing, setIsEditing] = createSignal<boolean>(false);

  function toggleEditingMode() {
    setIsEditing(!isEditing());
  }

  function handleDeleteCountry(index: number) {
    const countryData = countries();
    if (countryData && countryData[index]) {
      const countryAtIndex = countryData[index];

      deleteCountry(countryAtIndex);
      refetch();
    } else {
      console.error(`countryData object: ${countryData} threw exception`);
    }
  }

  return (
    <div class="flex flex-row justify-center ">
      <div
        class="text-white border-8 border-purple-600 border-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]"
        id="center-div"
      >
        <Table class="w-96 m-12">
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
                  {isEditing() == true && (
                    <Button
                      variant={"destructive"}
                      onClick={() => handleDeleteCountry(index)}
                    >
                      X
                    </Button>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <Button variant="default" onclick={toggleEditingMode}>
          Edit
        </Button>
        {isEditing() == true && <AddDataDialog />}
      </div>
    </div>
  );
}
