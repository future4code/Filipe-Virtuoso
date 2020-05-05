import { Client } from './interfaces/Client';

export class ClientManager {
  private clients: Client[] = [];

  public getClientsQuantity(): number {
    return this.clients.length;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill();
    });
    return total;
  }

  public deleteUser(registrationNumber: number): void {
    const index = this.clients.findIndex(
      (client: any) => client.registrationNumber == registrationNumber
    );

    if (index) {
      this.clients.splice(index, 1);
    }
  }
}
