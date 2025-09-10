import { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowDown, ArrowUp, ArrowUpDown, Pencil } from "lucide-react"

type SortState = "asc" | "desc" | "none"

export default function KelolaInformasi() {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: SortState }>({ key: "", direction: "none" })

  // Dummy data
  const [data, setData] = useState(
    Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      col1: `Row ${i + 1} - Col 1`,
      col2: `Row ${i + 1} - Col 2`,
      col3: `Row ${i + 1} - Col 3`,
      col4: `Row ${i + 1} - Col 4`,
      selected: false,
    }))
  )

  // Derived states
  const allSelected = data.every((row) => row.selected)
  const someSelected = data.some((row) => row.selected)

  // Handle header checkbox toggle
  const toggleAll = () => {
    const newValue = !allSelected
    setData(data.map((row) => ({ ...row, selected: newValue })))
  }

  // Handle row checkbox toggle
  const toggleRow = (id: number) => {
    setData(
      data.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    )
  }

  const cycleSort = (key: string) => {
    if (sortConfig.key !== key) {
      setSortConfig({ key, direction: "asc" })
    } else {
      if (sortConfig.direction === "asc") {
        setSortConfig({ key, direction: "desc" })
      } else if (sortConfig.direction === "desc") {
        setSortConfig({ key, direction: "none" })
      } else {
        setSortConfig({ key, direction: "asc" })
      }
    }
  }

  const renderSortIcon = (key: string) => {
    const direction = sortConfig.key === key ? sortConfig.direction : "none"
    if (direction === "asc") return <ArrowUp className="h-4 w-4" />
    if (direction === "desc") return <ArrowDown className="h-4 w-4" />
    return <ArrowUpDown className="h-4 w-4 opacity-50" />
  }

  return (
    <Table className="w-full">
      <TableCaption>A list of client's information.</TableCaption>
      <TableHeader>
        <TableRow>
          {/* Header checkbox */}
          <TableHead className="w-7 px-2 py-2.5">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-200 text-neutral-900 focus:ring-1 focus:ring-neutral-400"
              checked={allSelected}
              ref={(el) => {
                if (el) el.indeterminate = !allSelected && someSelected
              }}
              onChange={toggleAll}
            />
          </TableHead>

          {/* Sortable col 1 */}
          <TableHead className="w-48 px-2 py-2 text-neutral-900 text-sm font-medium leading-tight tracking-tight">
            <div className="flex items-center gap-2">
              <span>Table heading</span>
              <button onClick={() => cycleSort("col1")}>{renderSortIcon("col1")}</button>
            </div>
          </TableHead>

          {/* Sortable col 2 */}
          <TableHead className="w-48 px-2 py-2 text-neutral-900 text-sm font-medium leading-tight tracking-tight">
            <div className="flex items-center gap-2">
              <span>Table heading</span>
              <button onClick={() => cycleSort("col2")}>{renderSortIcon("col2")}</button>
            </div>
          </TableHead>

          {/* Right-aligned plain headers */}
          <TableHead className="w-48 px-2 py-2 text-left text-neutral-900 text-sm font-medium leading-tight tracking-tight">
            Table heading
          </TableHead>
          <TableHead className="w-48 px-2 py-2 text-left text-neutral-900 text-sm font-medium leading-tight tracking-tight">
            Table heading
          </TableHead>
          <TableHead className="w-32 px-2 py-2"></TableHead>

          {/* Empty column */}
          <TableHead className="w-32 px-2 py-2"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <input
                type="checkbox"
                checked={row.selected}
                onChange={() => toggleRow(row.id)}
                className="h-4 w-4 rounded border-neutral-200 text-neutral-900 focus:ring-1 focus:ring-neutral-400"
              />
            </TableCell>
            <TableCell className="text-left">{row.col1}</TableCell>
            <TableCell className="text-left">{row.col2}</TableCell>
            <TableCell className="text-left">{row.col3}</TableCell>
            <TableCell className="text-left">{row.col4}</TableCell>
            <TableCell className="text-right">
              <a
                href="#"
                className="inline-flex items-center gap-1 font-bold hover:underline"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </a>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}