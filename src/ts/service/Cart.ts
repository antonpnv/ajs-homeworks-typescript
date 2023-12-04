import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateTotalCost(): number {
      const totalCost = this._items.reduce((total, item) => total + item.price, 0)
      return totalCost;
    }

    calculateTotalCostWithDiscount(discount: number): number {
      const totalCostDiscount = this.calculateTotalCost();
      return totalCostDiscount - (totalCostDiscount * discount);
    }

    removeItemById(id: number): void {
      this._items = this._items.filter(item => item.id !== id);
    }
}
