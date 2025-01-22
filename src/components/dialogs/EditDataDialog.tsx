import type { Prisma } from "@prisma/client";
import { BsPencil } from "solid-icons/bs";
import { createSignal } from "solid-js";
import EditDataForm from "../forms/EditDataForm";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface EditDataDialogProps {
  country: Prisma.CountriesGetPayload<object>;
}

export default function EditDataDialog(props: EditDataDialogProps) {
  const [open, setOpen] = createSignal(false);

  return (
    <Dialog open={open()} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost">
          <BsPencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="mb-2 flex">
            Editing entry:
            <p class="italic ml-2">{props.country.name}</p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <EditDataForm country={props.country} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
