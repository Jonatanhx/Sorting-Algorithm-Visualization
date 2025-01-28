import { AiOutlinePlus } from "solid-icons/ai";
import { createSignal } from "solid-js";
import AddDataForm from "../forms/AddDataForm";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AddDataDialog() {
  const [open, setOpen] = createSignal(false);
  return (
    <Dialog open={open()} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          variant="default"
          class=" border border-white hover:bg-white text-white hover:text-black"
        >
          <AiOutlinePlus aria-label="Add data icon" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="mb-8 ">Add a new entry to database</DialogTitle>
          <DialogDescription>
            <AddDataForm setOpen={setOpen} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
