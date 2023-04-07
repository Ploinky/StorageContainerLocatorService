import { Injectable } from '@nestjs/common';
import { Item } from 'types';
import { AddItem } from 'types/item';
import { faker } from '@faker-js/faker';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

  constructor() {
    for (let i = 0; i < Number.parseInt(process.env.ITEM_COUNT); i++) {
      this.create({
        id: i,
        name: faker.word.noun(),
        note: '',
      } as Item);
    }
  }

  findAll(): Item[] {
    return this.items;
  }

  findById(id: Item['id']): Item | null {
    return this.items.find((i) => i.id === id) ?? null;
  }

  create(addItem: AddItem) {
    const highestId =
      this.findAll()
        .map((c) => c.id)
        .sort((a, b) => a - b)
        .pop() ?? 0;

    this.items.push({
      id: highestId + 1,
      ...addItem,
    });
  }
}
