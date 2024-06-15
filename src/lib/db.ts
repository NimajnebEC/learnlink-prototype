import Dexie, { type EntityTable } from "dexie";

export interface Category {
	code: string;
	index: string;
	parent: string;
	name: Blob;
}

export const db = new Dexie("learnlink") as Dexie & {
	category: EntityTable<Category, "code">;
};

db.version(1).stores({
	category: "code, index, parent, name",
});