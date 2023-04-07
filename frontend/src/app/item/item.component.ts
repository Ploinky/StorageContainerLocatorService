import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from 'types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    item: Item | null = null;

    constructor(private itemsService: ItemsService, private route: ActivatedRoute) {}

    ngOnInit() {
        const itemId = this.route.snapshot.paramMap.get('itemId');
        this.itemsService.getItem(Number(itemId!)).then((i) => this.item = i).catch(() => this.item = null);
    }
}
