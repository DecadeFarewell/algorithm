class LinkNode {
  key = null;
  value = null;
  prev = null;
  next = null;

  constructor(key, value = null) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  size = 0;
  capacity = 0;
  cacheMap = new Map();
  head = new LinkNode(); // 虚拟头节点
  tail = new LinkNode(); // 虚拟尾节点

  constructor(capacity) {
    this.capacity = capacity;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.cacheMap.get(key);

    if (!node) {
      // 如果缓存中不存在该节点，则直接返回-1
      return - 1;
    }

    // 如果缓存中存在该节点，则将其移动到头部位置，并返回该节点的值
    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
    const node = this.cacheMap.get(key);

    if (!node) {
      const putNode = new LinkNode(key, value);
      this.cacheMap.set(key, putNode);

      this.addToHead(putNode);

      this.size++;

      // 如果缓存容量已满，则移除尾节点（即最近最少使用的节点）
      if(this.size > this.capacity) {
        this.removeTail();
        // 缓存容量减1
        this.size--;
      }
    } else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeTail() {
    // 找到尾节点的前驱节点，即最后一个被使用的节点
    const tail = this.tail.prev;
    // 移除尾节点
    this.removeNode(tail);
    // 并将其从缓存中移除
    this.cacheMap.delete(tail.key);
  }
}
