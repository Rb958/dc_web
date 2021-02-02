export class UserModel {
  firstname: string;
  lastname: string;
  // bornon: Date;
  cni: string;
  email: string;
  roles: Array<string>;
  password: string;
  createAt: Date;
  lastUpdateAt: Date;
  ref: string;
}
