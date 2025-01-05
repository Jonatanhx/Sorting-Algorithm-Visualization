import { AiOutlinePlus } from "solid-icons/ai";
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
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="default"
          class=" border border-white hover:bg-white text-white hover:text-black"
        >
          <AiOutlinePlus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="mb-8 ">Add a new entry to database</DialogTitle>
          <DialogDescription>
            <AddDataForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
