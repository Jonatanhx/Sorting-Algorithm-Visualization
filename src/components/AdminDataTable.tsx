import {
  createResource,
  createSignal,
  Match,
  Switch,
  useContext,
} from "solid-js";
import { AdminDataContext } from "~/contexts/AdminDataContext";
import { db } from "../../prisma/db";
import { Button } from "../components/ui/button";
import AddDataDialog from "./dialogs/AddDataDialog";
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
  const [isEditing, setIsEditing] = createSignal<boolean>(false);

  const [countries] = createResource(async () => {
    "use server";
    const populationData = await db.countries.findMany({});
    return populationData;
  });

  function toggleEditingMode() {
    setIsEditing(!isEditing());
  }
  function handleDeleteCountry(index: number) {}
  return (
    <div class="flex flex-row ">
      <div class="flex flex-1" id="empty-div" />
      <div
        class="text-white border-8 border-purple-600 border-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]"
        id="center-div"
      >
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
          </Match>
        </Switch>
        <Button variant="default" onclick={toggleEditingMode}>
          Edit
        </Button>
        {isEditing() == true && <AddDataDialog />}
      </div>
      <div class="flex flex-1" id="empty-div" />
    </div>
  );
}
