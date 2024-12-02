import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../@/components/ui/table";

export default function AdminDatatable() {
  return (
    <div class="text-white flex justify-center">
      <Table>
        <TableCaption>Data table 1.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell class="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
