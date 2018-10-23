class RoleResponseData {
  attributes: object;
  id: number;
  links: object;
  relationships: object;
  type: string;
}

export class RoleResponse {
  data: Array<any>;
  included: Array<any>;
  links: object;
  meta: object;
}
