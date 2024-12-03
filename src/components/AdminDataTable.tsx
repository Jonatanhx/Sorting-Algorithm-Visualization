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
  const [isFormVisible, setIsFormVisible] = createSignal<boolean>(false);

  const [countries] = createResource(async () => {
    "use server";
    const populationData = await db.countries.findMany({});
    return populationData;
  });

  function handleSetEditing() {
    setIsEditing(!isEditing());
  }

  function toggleAddForm() {
    setIsFormVisible(!isFormVisible());
  }

  return (
    <div class="flex flex-row ">
      <div class="flex flex-1" id="empty-div" />
      <div
        class="text-white border-8 border-purple-600 border-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]"
        id="center-div"
      >
        <DataTableDropDown />
        <Button variant="default" onclick={handleSetEditing}>
          Edit
        </Button>

        {isEditing() == true && (
          <p class="text-white">Editing mode is enabled</p>
        )}

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

                {isEditing() == true && (
                  <Button variant="default" onclick={toggleAddForm}>
                    +
                  </Button>
                )}

                {isFormVisible() && <div class="text-white">Test</div>}
              </TableBody>
            </Table>
          </Match>
        </Switch>
      </div>
      <div class="flex flex-1" id="empty-div" />
    </div>
  );
}
