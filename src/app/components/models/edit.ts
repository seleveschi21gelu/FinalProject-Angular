import { FlatblockService } from '../../services/flatblock.service';
import { ProviderService } from '../../services/provider.service';
import { MaterialService } from '../../services/material.service';
import { StatusService } from 'src/app/services/status.service';

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