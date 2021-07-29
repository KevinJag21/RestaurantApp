export interface shoppingCart{
    clientId?: string;
    details: CartItem[];
}
export interface CartItem{
    quantity: number;
    idDish: string;
}