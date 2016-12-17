describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function(){
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have the methods named "addToTail", "addToHead", "removeHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should have nodes with both a next and prev property', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.head.next.value).to.equal(2);
    expect(doublyLinkedList.tail.prev.value).to.equal(2);
  });

  it('should designate a new tail when new nodes are added to the tail', function() {
    doublyLinkedList.addToTail(1);
    expect(doublyLinkedList.tail.value).to.equal(1);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.tail.value).to.equal(2);
  });

  it('should designate a new head when new nodes are added to the head', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.head.value).to.equal(1);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.head.value).to.equal(2);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(1);
  });

  it('should return the value of the old head when removeHead is called', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.removeHead()).to.equal(2);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.tail.value).to.equal(2);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(1);
  });

  it('should return the value of the old tail when removeTail is called', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.removeTail()).to.equal(2);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.contains(3)).to.be.true;
    expect(doublyLinkedList.contains(1)).to.be.true;
    expect(doublyLinkedList.contains(2)).to.be.true;
  });

  it('should not contain a value that ws removed', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(3)).to.be.false;
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(1)).to.be.false;
  });
});
