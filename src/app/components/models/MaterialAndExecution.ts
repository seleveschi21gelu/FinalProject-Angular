import { DeliveryTypeService } from '../../services/delivery-type.service';
import { FlatblockService } from '../../services/flatblock.service';
import { ProviderService } from '../../services/provider.service';
import { MaterialService } from '../../services/material.service';
import { DeliveryType } from './DeliveryType';

export class MaterialAndExecution {
    id: number | undefined;
    deliveryType:DeliveryType | undefined;
}