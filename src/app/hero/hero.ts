
export class Hero {
  id;
  name;
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const states = ['CA', 'MD', 'OH', 'VA'];
