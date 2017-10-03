import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', addresses: [] },
      { id: 11, name: 'Mr. Nice', addresses: [] },
      { id: 12, name: 'Narco', addresses: [] },
      { id: 13, name: 'Bombasto', addresses: [] },
      { id: 14, name: 'Celeritas', addresses: [] },
      { id: 15, name: 'Magneta', addresses: [] },
      { id: 16, name: 'RubberMan', addresses: [] },
      { id: 17, name: 'Dynama', addresses: [] },
      { id: 18, name: 'Dr IQ', addresses: [] },
      { id: 19, name: 'Magma', addresses: [] },
      { id: 20, name: 'Tornado', addresses: [] }
    ];
    return {heroes};
  }
}
