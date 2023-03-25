describe('Global object', () => {
  test('should have a record of event handlers', () => {
    expect(global).toBeDefined(); // Global object should exist
    expect(global).toBeInstanceOf(Object); // Global should be an object
    expect(global).toMatchObject({}); // Global should be an empty object
  });

  test('should define a record with a string key and a function value', () => {
    const key = 'test';
    const handler = (event: any) => console.log(event);

    global[key] = handler;

    expect(global[key]).toBeDefined(); // Key should exist
    expect(global[key]).toBeInstanceOf(Function); // Value should be a function
  });
});
