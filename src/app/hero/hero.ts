
export class Hero {
  id;
  name;
  power;
  sidekick;
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const states = ['CA', 'MD', 'OH', 'VA'];
