import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl">Participantes</h1>

        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 bg-transparent outline-none border-0 p-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>

            <TableHeader>Código</TableHeader>

            <TableHeader>Participante</TableHeader>

            <TableHeader>Data da inscrição</TableHeader>

            <TableHeader>Data do check-in</TableHeader>

            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400"
                />
              </TableCell>

              <td>52716</td>

              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Allan Vinícius
                  </span>
                  <span>allanvinicius@gmail.com</span>
                </div>
              </TableCell>

              <TableCell>7 dias atrás</TableCell>

              <TableCell>3 dias atrás</TableCell>

              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>

            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
