import { ApiService } from './api.service';

export class InventoryService {
  static async manufacturers() {
    return ApiService.getauth<unknown>('/inventry/car-manufacturers-all');
  }
}
