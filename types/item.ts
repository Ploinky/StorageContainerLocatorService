export type Item = {
    id: number;
    name: string;
    note: string;
};

export type AddItem = Omit<Item, 'id'>;