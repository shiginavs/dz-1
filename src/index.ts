import * as readlineSync from "readline-sync";
import { MyBinaryTreeB } from "./binary-tree.js";

let rootData: string;
//const tree: MyBinaryTreeB<number> = new MyBinaryTreeB<number>(10);
const actions = ["Insert", "Find Node", "Find Parent Node", "Find Child", "Delete Node"];

let index: number;
do {
    index = readlineSync.keyInSelect(actions, "Choose");
    switch (index) {
        case 0: insert();
            break;

        case 1: findNode();
            break;

        default:
            break;
    }
} while (index !== -1);

function insert(): void {
    if (rootData) {
        rootData = readlineSync.question("Enter root data:", {
            defaultInput: "10"
        });
        //tree.insertMyNode(5);
    }

}

function findNode(): void {

}
