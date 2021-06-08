import { v4 as uuidv4 } from "uuid";
uuidv4();

const arr1 = ["a", "b", "c", "d", "d"];
const newArray = arr1.map((ele) => ({ name: ele, id: nanoid }));
