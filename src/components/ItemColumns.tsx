import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";
import { IconPhotoOff } from "@tabler/icons-react";

export type Item = {
    id: string;
    type: string;
    category_id: string;
    stream_display_name: string;
    cover?: string;
    season_numbers?: string;
}

export type ItemList = {
    data: Item[];
}

export const columnsMovies: ColumnDef<Item>[] = [
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
    {
        accessorKey: "cover",
        header: "Cover",
        cell: ({ row }) => {
            const coverUrl = row.original.cover;
    
            return (
                <div>
                    <img src={coverUrl?.replace(/"/g, '')} alt="Cover" className="w-12 h-18" />
                </div>
            );
        },
    },    
];

export const columnsCanales: ColumnDef<Item>[] = [
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
    {
        accessorKey: "cover",
        header: "Cover",
        cell: ({ row }) => {
            const coverUrl = row.original.cover;
    
            return (
                <div>
                    {coverUrl ?
                    <img src={ coverUrl?.replace(/"/g, '')} alt="Cover" className="w-12 h-18" />
                    :
                    <div className="w-12 flex flex-row items-center justify-center">
                        <IconPhotoOff />
                    </div>
                    }
                </div>
            );
        },
    },  
];

export const columnsSeries: ColumnDef<Item>[] = [
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
    {
        accessorKey: "season_numbers",
        header: "Temporadas",
        cell: ({ row }) => {
            const temporadas = row.original.season_numbers;
    
            return (
                <div>
                    <h1 className="w-full">{temporadas?.replace(/\[|\]/g, '')}</h1>
                </div>
            );
        },
    }, 
    {
        accessorKey: "cover",
        header: "Cover",
        cell: ({ row }) => {
            const coverUrl = row.original.cover;
    
            return (
                <div>
                    <img src={coverUrl} alt="Cover" className="w-12 h-18" />
                </div>
            );
        },
    },       
];

