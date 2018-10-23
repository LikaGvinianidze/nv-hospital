export class RegionsResponse {
  data: Array<RegionsResponseData>;
  links: object;
  meta: object;
}

class RegionsResponseData {
  attributes: Array<RegionsResponseAttribute>;
  id: number;
  type: string;
}

export class RegionsResponseAttribute {
  name: string;
}
