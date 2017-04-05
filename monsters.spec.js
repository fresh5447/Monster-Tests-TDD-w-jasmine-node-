var Monster = require('./monsters');

describe('Monster Constructor', function() {

  var mon = new Monster('Johnny', 'green', false, 'mind reading');

  it('the monster has a name', function() {
    expect(mon.name).toEqual('Johnny');
  });

  it('the monster should be the right color', function() {
    expect(mon.color).toEqual('green');
  });


  it('is the monster aggressive', function() {
    expect(mon.aggressive).toBe(false);
  });

  it('monster can tell you about itself', function() {
    expect(mon.getInfo()).toEqual("I am Johnny with power of mind reading");
  });

  it('monster can say hello to someone', function() {
    expect(mon.sayHello("Doug")).toEqual("Hello Doug");
  });

  it('monster can talk to strangers', function() {
    expect(mon.sayHello()).toEqual("Hello stranger");
  });

});
