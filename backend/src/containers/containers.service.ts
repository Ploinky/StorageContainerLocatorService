import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { Container } from 'types';
import { AddContainer } from 'types/container';

@Injectable()
export class ContainersService {
  private readonly containers: Container[] = [];

  constructor() {
    for (let i = 0; i < Number.parseInt(process.env.CONTAINER_COUNT); i++) {
      this.create({
        id: i,
        name: faker.word.noun(),
      } as Container);
    }
  }

  findAll(): Container[] {
    return this.containers;
  }

  findById(id: Container['id']): Container | null {
    this.containers.find((i) => {
      console.log(i.id === id);
      return i.id === id;
    });
    return this.containers.find((i) => i.id === id);
  }

  create(addContainer: AddContainer) {
    const highestId =
      this.findAll()
        .map((c) => c.id)
        .sort((a, b) => a - b)
        .pop() ?? 0;

    this.containers.push({
      id: highestId + 1,
      ...addContainer,
    });
  }
}
