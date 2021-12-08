var MyBinaryTreeB = /** @class */ (function () {
    function MyBinaryTreeB(data) {
        this.root = undefined;
        this.nodeData = data;
    }
    MyBinaryTreeB.prototype.findMyNode = function (value) {
        if (this.root !== undefined) {
            var targetElement = this.root;
            if (targetElement.nodeData === value) {
                return targetElement;
            }
            while (targetElement.nodeData !== value) {
                if (value < targetElement.nodeData && targetElement.leftRibN !== undefined) {
                    targetElement = targetElement.leftRibN;
                }
                else if (targetElement.rightRibN !== undefined) {
                    targetElement = targetElement.rightRibN;
                }
                if (targetElement === undefined) {
                    return undefined;
                }
            }
            return targetElement;
        }
        return undefined;
    };
    MyBinaryTreeB.prototype.findParentMyNode = function (value) {
        if (this.root !== undefined) {
            var targetElement = this.root;
            var parentElement = this.root;
            if (targetElement.nodeData === value) {
                return undefined;
            }
            while (targetElement.nodeData !== value) {
                parentElement = targetElement;
                if (value < targetElement.nodeData && targetElement.leftRibN !== undefined) {
                    targetElement = targetElement.leftRibN;
                }
                else if (targetElement.rightRibN !== undefined) {
                    targetElement = targetElement.rightRibN;
                }
                if (targetElement === undefined) {
                    return undefined;
                }
            }
            return parentElement;
        }
        return undefined;
    };
    MyBinaryTreeB.prototype.insertMyNode = function (value, root) {
        if (root) {
            if (value < root.nodeData) {
                if (root.leftRibN === undefined) {
                    root.leftRibN = { nodeData: value, leftRibN: undefined, rightRibN: undefined };
                }
                else {
                    this.insertMyNode(value, root.leftRibN);
                }
            }
            else if (value > root.nodeData) {
                if (root.rightRibN === undefined) {
                    root.rightRibN = { nodeData: value, leftRibN: undefined, rightRibN: undefined };
                }
                else {
                    this.insertMyNode(value, root.rightRibN);
                }
            }
        }
        else {
            root = { nodeData: value, leftRibN: undefined, rightRibN: undefined };
        }
    };
    MyBinaryTreeB.prototype.findChild = function (root) {
        var parentElement = root;
        var childElement = root;
        var currentElement = root.rightRibN;
        while (currentElement !== undefined) {
            parentElement = root;
            childElement = root;
            currentElement = currentElement.leftRibN;
        }
        if (childElement !== root.rightRibN) {
            parentElement.leftRibN = childElement.rightRibN;
            childElement.rightRibN = root.rightRibN;
        }
        return childElement;
    };
    MyBinaryTreeB.prototype.deleteMyNode = function (root, value) {
        var currentElement = this.findMyNode(value);
        if (!currentElement) {
            return false;
        }
        var parentElement = this.findParentMyNode(value);
        if (!parentElement) {
            return false;
        }
        if (currentElement && currentElement.leftRibN === undefined && currentElement.rightRibN === undefined) {
            currentElement = undefined;
        }
        else if (currentElement.leftRibN === undefined && parentElement) {
            if (currentElement === parentElement) {
                currentElement = undefined;
            }
            else if (currentElement > parentElement) {
                parentElement.rightRibN = currentElement.rightRibN;
            }
            else {
                parentElement.leftRibN = currentElement.rightRibN;
            }
        }
        else if (currentElement.rightRibN === undefined && parentElement) {
            if (currentElement === parentElement) {
                currentElement = undefined;
            }
            else if (currentElement > parentElement) {
                parentElement.rightRibN = currentElement.leftRibN;
            }
            else {
                parentElement.leftRibN = currentElement.leftRibN;
            }
        }
        else {
            var child = this.findChild(currentElement);
            if (currentElement === parentElement) {
                root = child;
            }
            else if (currentElement > parentElement) {
                parentElement.rightRibN = child;
            }
            else {
                parentElement.leftRibN = child;
            }
        }
        return true;
    };
    return MyBinaryTreeB;
}());
export { MyBinaryTreeB };
