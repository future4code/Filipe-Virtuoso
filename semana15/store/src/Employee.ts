import { User } from './User';

export class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    adimissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = adimissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate() {
    return this.admissionDate;
  }

  public getBasesalary() {
    return this.baseSalary;
  }

  public calculateTotalSalary() {
    return this.baseSalary + 400;
  }
}
