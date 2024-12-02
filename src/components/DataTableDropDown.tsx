import type { DropdownMenuSubTriggerProps } from "@kobalte/core/dropdown-menu";
import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import { useContext } from "solid-js";
import { AdminDataContext } from "~/contexts/AdminDataContext";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function DataTableDropDown() {
  const { dataTable, setDataTable } = useContext(AdminDataContext);
  return (
    <div>
      <DropdownMenu placement="bottom">
        <DropdownMenuTrigger
          as={(props: DropdownMenuSubTriggerProps) => (
            <Button variant="default" {...props}>
              Open
            </Button>
          )}
        />
        <DropdownMenuContent class="w-56">
          <DropdownMenuGroup>
            <DropdownMenuGroupLabel>Select data table</DropdownMenuGroupLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={dataTable()} onChange={setDataTable}>
              <DropdownMenuRadioItem value="countries">
                Countries
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Data table 2">
                Data table 2
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Data table 3">
                Data table 3
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
