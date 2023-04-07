import { Injectable } from '@angular/core';
import { Item } from 'types';
import { AddItem } from 'types/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
    constructor() { }

    async getItems(): Promise<Item[]> {
        const response = await fetch('http://localhost:3000/items', {
            method: 'GET',
        });
    
        if (response.ok) {
            return await response.json();
        }
    
        return [];
    }

    async getItem(id: Item['id']): Promise<Item> {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'GET',
        });
    
        if (response.ok) {
            return await response.json();
        }
    
        throw new Error('item not found');
    }

    async addItem(addItem: AddItem) {
        const response = await fetch('http://localhost:3000/items', {
            method: 'POST',
            body: JSON.stringify(addItem),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
    }
}
