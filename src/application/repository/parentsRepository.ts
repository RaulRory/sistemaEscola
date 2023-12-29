import { Parents } from "../../domain/parents";

export interface Address {
    street: string;
    number: number;
    complement?: string;
    zipCode: string;
}

export interface DataParentsProps {
    name: string;
    surname: string;
    cpf: string;
    address: Address;
    telephones?: string[];
    emails?: string[];

}

export interface ParentsRepository {
    create (dataParents: DataParentsProps): Promise<Parents>;
    listAll (): Promise<Parents[]>;
}