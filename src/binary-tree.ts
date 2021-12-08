
export interface MyNode<T> {
    nodeData: T;
    leftRibN?: MyNode<T>;
    rightRibN?: MyNode<T>;
}



export class MyBinaryTreeB<T> implements MyNode<T> {
    root: MyNode<T> | undefined;
    constructor(data: T) {
        this.root = undefined;
        this.nodeData = data;
    }
    nodeData: T;
    leftRibN?: MyNode<T>;
    rightRibN?: MyNode<T>;
    findMyNode(value: T): MyNode<T> | undefined {
        if (this.root !== undefined) {
            let targetElement: MyNode<T> = this.root;
            if (targetElement.nodeData === value) {
                return targetElement;
            }
            while (targetElement.nodeData !== value) {
                if (value < targetElement.nodeData && targetElement.leftRibN !== undefined) {
                    targetElement = targetElement.leftRibN;
                } else if (targetElement.rightRibN !== undefined) {
                    targetElement = targetElement.rightRibN;
                }
                if (targetElement === undefined) {
                    return undefined;
                }
            }
            return targetElement;
        }
        return undefined;
    }
    findParentMyNode(value: T): MyNode<T> | undefined {
        if (this.root !== undefined) {
            let targetElement: MyNode<T> = this.root;
            let parentElement: MyNode<T> = this.root;
            if (targetElement.nodeData === value) {
                return undefined;
            }
            while (targetElement.nodeData !== value) {
                parentElement = targetElement;
                if (value < targetElement.nodeData && targetElement.leftRibN !== undefined) {
                    targetElement = targetElement.leftRibN;
                } else if (targetElement.rightRibN !== undefined) {
                    targetElement = targetElement.rightRibN;
                }
                if (targetElement === undefined) {
                    return undefined;
                }
            }
            return parentElement;
        }
        return undefined;
    }
    insertMyNode(value: T, root?: MyNode<T>): void {
        if (root) {
            if (value < root.nodeData) {
                if (root.leftRibN === undefined) {
                    root.leftRibN = { nodeData: value, leftRibN: undefined, rightRibN: undefined };
                } else {
                    this.insertMyNode(value, root.leftRibN);
                }
            } else if (value > root.nodeData) {
                if (root.rightRibN === undefined) {
                    root.rightRibN = { nodeData: value, leftRibN: undefined, rightRibN: undefined };
                } else {
                    this.insertMyNode(value, root.rightRibN);
                }
            }
        } else {
            root = { nodeData: value, leftRibN: undefined, rightRibN: undefined };
        }
    }
    findChild(root: MyNode<T>): MyNode<T> {
        let parentElement: MyNode<T> = root;
        let childElement: MyNode<T> = root;
        let currentElement: MyNode<T> | undefined = root.rightRibN;
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
    }
    deleteMyNode(root: MyNode<T>, value: T): boolean {
        let currentElement: MyNode<T> | undefined = this.findMyNode(value);
        if (!currentElement) {
            return false;
        }
        const parentElement: MyNode<T> | undefined = this.findParentMyNode(value);
        if (!parentElement) {
            return false;
        }
        if (currentElement && currentElement.leftRibN === undefined && currentElement.rightRibN === undefined) {
            currentElement = undefined;
        } else if (currentElement.leftRibN === undefined && parentElement) {
            if (currentElement === parentElement) {
                currentElement = undefined;
            } else if (currentElement > parentElement) {
                parentElement.rightRibN = currentElement.rightRibN;
            } else {
                parentElement.leftRibN = currentElement.rightRibN;
            }
        } else if (currentElement.rightRibN === undefined && parentElement) {
            if (currentElement === parentElement) {
                currentElement = undefined;
            } else if (currentElement > parentElement) {
                parentElement.rightRibN = currentElement.leftRibN;
            } else {
                parentElement.leftRibN = currentElement.leftRibN;
            }
        } else {
            const child: MyNode<T> = this.findChild(currentElement);
            if (currentElement === parentElement) {
                root = child;
            } else if (currentElement > parentElement)  {
                parentElement.rightRibN = child;
            } else {
                parentElement.leftRibN = child;
            }
        }
        return true;
    }
}
