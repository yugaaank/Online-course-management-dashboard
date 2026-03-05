import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter items by property', () => {
    const items = [{ name: 'Angular' }, { name: 'React' }];
    expect(pipe.transform(items, 'ang', 'name')).toEqual([{ name: 'Angular' }]);
  });
});
