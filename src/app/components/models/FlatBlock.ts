import { FlatblockService } from '../../services/flatblock.service';
import { StatusService } from '../../status.service';
import { ProviderService } from '../../services/provider.service';
import { MaterialService } from '../../services/material.service';

export class Edit{

    invoiceNumber: string | undefined;
    materialAndExecution: MaterialService | undefined;
    provider:ProviderService | undefined;
    unitPrice:number | undefined ;
    quantity:string | undefined;
    tva:number | undefined;
    paidStatus:StatusService | undefined;
    flatblock:FlatblockService | undefined;
}