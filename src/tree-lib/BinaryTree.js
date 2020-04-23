class Node {
    static counter = 0;

    constructor(value, parent = null) {
        this.id = Node.counter;
        Node.counter++;

        this.parent = parent;
        this.value = value;
        this.left = null;
        this.right = null;
    }

    _convert(item, i = 0) {
        return isNaN(item) ? parseInt(item.charCodeAt(i), 10) : parseInt(item, 10);
    }

    _handleEqual(item, itemValue, thisValue) {
        if (isNaN(item)) {
            let index = 1;
            while (itemValue === thisValue) {
                itemValue = this._convert(item, index);
                thisValue = this._convert(this.value, index);
                index++;

                if (index >= this.value.length) {
                    this.addRightChild(item)
                    return;
                }
                if (index >= item.length) {
                    this.addLeftChild(item);
                    return;
                }
            }
            if (itemValue === thisValue) {
                this.addLeftChild(item)
            } else {
                this._compareValues(item, itemValue, thisValue);
            }

        } else {
            // same number, insert at left child
            this.addLeftChild(item)
        }
    }

    _compareValues(item, itemValue, thisValue) {
        if (itemValue < thisValue) {
            this.addLeftChild(item)
        } else if (itemValue > thisValue) {
            this.addRightChild(item)
        } else {
            // special case for equality
            this._handleEqual(item, itemValue, thisValue);
        }
    }

    addLeftChild(item) {
        this.left ? this.left.insert(item) : this.left = new Node(item, this);
    }

    addRightChild(item) {
        this.right ? this.right.insert(item) : this.right = new Node(item, this);
    }

    insert(item) {
        let itemValue = this._convert(item);
        if (this.value) {
            let thisValue = this._convert(this.value);
            this._compareValues(item, itemValue, thisValue)
        } else {
            this.value = item;
        }
    }

    toGraph() {
        let edges = this.parent ?
            [
                {
                    from: this.parent.id,
                    to: this.id
                }
            ] : [];
        let nodes = this.value ?
            [
                {
                    id: this.id,
                    label: this.value
                }
            ] : [];
        if (this.left) {
            let leftRes = this.left.toGraph();
            edges = [...edges, ...leftRes.edges];
            nodes = [...nodes, ...leftRes.nodes];
        }
        if (this.right) {
            let rightRes = this.right.toGraph();
            edges = [...edges, ...rightRes.edges];
            nodes = [...nodes, ...rightRes.nodes];
        }

        return {
            nodes,
            edges
        }
    }

}

export {Node as BinaryTree};
