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
        <Button variant="default">Add new entry</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new entry to database</DialogTitle>
          <DialogDescription>
            <AddDataForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
