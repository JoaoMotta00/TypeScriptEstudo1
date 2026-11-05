import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { User } from "../models/users.model";

export class UserRepository {

    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection("users");
    }

    async getById(id: string): Promise<User | null> {
        const snapshot = await this.collection.doc(id).get();
        if (snapshot.exists) {
            return { id: snapshot.id, ...snapshot.data() } as User;
        } else {
            return null;
        }
    }


    async getAll(): Promise<User[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        }) as User[];
    }

    async deleteById(id: string) {
        this.collection.doc(id).delete();
    }

    async putById(user: User) {
        let docRef = this.collection.doc(user.id);
        await docRef.set({
            nome: user.nome,
            email: user.email
        });

    }

    async post(user: User) {
        await this.collection.add(user);
    }


}