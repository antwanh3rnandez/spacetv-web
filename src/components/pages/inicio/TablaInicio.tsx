import { 
    Avatar,
    AvatarImage,
    AvatarFallback
} from "../../ui/avatar";

import { Badge } from "../../ui/badge";

import { Visitante } from "../../../interfaces/Visitantes.interface"

const visitantes: Visitante[] = [
    {
        id: "728ed52f",
        amount: "$1,999.00",
        status: "pending",
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
    },
    {
        id: "489e1d42",
        amount: "$1,299.00",
        status: "processing",
        name: "Example Name",
        email: "example@gmail.com",
    },
    {
        id: "c1234abc",
        amount: "$1,680.00",
        status: "success",
        name: "Ejemplo Loco",
        email: "user@example.com",
    },
    {
        id: "d5678def",
        amount: "$1,000.00",
        status: "failed",
        name: "Toi Trabajando",
        email: "another@example.com",
    },
    {
        id: "e91011xyz",
        amount: "$1,345.00",
        status: "pending",
        name: "Bruno Mendoza",
        email: "test@example.com",
    },
];

function PrimerasLetras(nombre: { palabras:string }) {

    const inputString = nombre.palabras;
    
    const palabrasArray = inputString.split(' ');
    
    const primerasLetras = palabrasArray?.map((word:string) => word?.charAt(0)).join('');
    
    return (
      primerasLetras
    );
}

export function TablaInicio() {
    return (
        <>
          <div className="space-y-8">
            {visitantes.map((item) => (
                <div className="flex items-center">   
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>
                            <PrimerasLetras palabras={item.name} />
                        </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                        {item.email}
                        </p>
                    </div>
                    <div className="ml-auto font-medium">{item.amount}</div>
                    <Badge variant="outline">{item.status}</Badge>
                </div>
            ))}
          </div>
        </>
    );
}