import { createSignal, useContext } from "solid-js";
import { CountryDataContext } from "~/contexts/CountryDataContext";
import { deleteCountry } from "~/server/endpoints/country-endpoints";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ConfirmDeletionDialogProps {
  index: number;
  name: string | null;
}

export default function ConfirmDeletionDialog(
  props: ConfirmDeletionDialogProps
) {
  const { countries, refetch } = useContext(CountryDataContext);
  const [open, setOpen] = createSignal(false);

  async function handleDeleteCountry(index: number) {
    const countryData = countries();
    if (countryData && countryData[index]) {
      const countryAtIndex = countryData[index];

      await deleteCountry({
        ...countryAtIndex,
        id: countryAtIndex.id.toString(),
      });
      refetch();
    } else {
      console.error(`countryData object: ${countryData} threw exception`);
    }
  }

  return (
    <Dialog open={open()} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost">X</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="mb-2 flex">
            Confirm deletion of entry:
            <p class="italic ml-2">{props.name}</p>
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this database entry?
          </DialogDescription>
          <DialogDescription> This action is irreversible</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div class="flex justify-between flex-1">
            <Button onClick={() => handleDeleteCountry(props.index)}>
              Confirm
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
