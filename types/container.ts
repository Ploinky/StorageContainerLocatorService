export type Container = {
    id: number;
    name: string;
};

export type AddContainer = Omit<Container, 'id'>;
