import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../components/ui/button"
import { ArrowUpDown } from "lucide-react"

export type Movie = {
    id: string;
    type: string;
    category_id: string;
    stream_display_name: string;
}

export type MovieList = {
    data: Movie[];
}

export const movieColumns: ColumnDef<Movie>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "stream_display_name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
]
