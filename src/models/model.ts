export class User {
  id: string;
  name: string;
  code: string;
  postList? : Array<{
    departmentId: string;
    positionId: string;
  }>

  constructor(args: {id: string, name:string, code: string}) {
    if (args.id) this.id = args.id;
    if (args.name) this.name = args.name;
    if (args.code) this.id = args.code;
  }
}