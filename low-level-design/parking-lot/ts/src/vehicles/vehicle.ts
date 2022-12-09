import { VehicleType } from "./vehicle.type";

export default abstract class Vehicle {
  private vehicleRegisterNumber: string;
  private vehicleType: VehicleType;

  constructor(vehicleRegisterNumber: string, vehicleType: VehicleType) {
    this.vehicleRegisterNumber = vehicleRegisterNumber;
    this.vehicleType = vehicleType;
  }

  public get getVehicleType() {
    return this.vehicleType;
  }
}
