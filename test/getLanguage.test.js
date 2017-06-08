describe('should get language selected', function(){
  it('should check if english radio button was checked', function(){
    assert.equal(getLanguage("English", "Hello, "))

  });
  it('should check if the spanish radio button was checked', function(){
    assert.equal(getLanguage("Spanish", "Hola, "))
  });
  it('should check if the dutch button was checked', function(){
    assert.equal(getLanguage("Dutch", "hallo, "))
  })
})
