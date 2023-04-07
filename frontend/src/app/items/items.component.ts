import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from 'types';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
    items: Item[] = [];

    constructor(private itemsService: ItemsService) {}

    ngOnInit() {
        this.itemsService.getItems().then((i) => this.items = i).catch(() => this.items = []);
    }
}
