describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
   return string.toUpperCase();
  })
})


describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})