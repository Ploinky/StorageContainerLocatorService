import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { NgForm } from '@angular/forms';
import { Item } from 'types';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
    constructor(private itemsService: ItemsService) {}

    model = { } as Item;

    onSubmit(f: NgForm) {
        this.itemsService.addItem({
            name: `${f.value.name}` ?? 'Default Container Name',
            note: `${f.value.note}` ?? ''
        });

        f.resetForm();
    }
}
