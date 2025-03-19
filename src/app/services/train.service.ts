// src/app/services/train.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  getStations(): string[] {
    return ['Vizianagaram', 'Visakhapatnam', 'Srikakulam', 'Rajahmundry'];
  }

  getClasses(): string[] {
    return ['SLC', 'UC', 'AC'];
  }

  getCategories(): string[] {
    return ['General', 'AC', 'Non-AC'];
  }
}