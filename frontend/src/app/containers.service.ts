import { Injectable } from '@angular/core';
import { Container } from 'types';
import { CONTAINERS } from './mock-containers';
import { AddContainer } from 'types/container';

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor() { }

  async getContainers(): Promise<Container[]> {
    const response = await fetch('http://localhost:3000/containers', {
        method: 'GET',
    });

    if (response.ok) {
        return await response.json();
    }

    return [];
  }

    async getContainer(id: Container['id']): Promise<Container> {
        const response = await fetch(`http://localhost:3000/containers/${id}`, {
            method: 'GET',
        });
    
        if (response.ok) {
            return await response.json();
        }
    
        throw new Error('container not found');
    }

    async addContainer(container: AddContainer) {
        const response = await fetch('http://localhost:3000/containers', {
            method: 'POST',
            body: JSON.stringify(container),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
    }
}
