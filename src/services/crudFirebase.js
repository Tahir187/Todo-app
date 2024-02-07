import { firebase, db } from "./firebase";

export const addTodo = async (todo) => {
  try {
    await db.collection("todos").add(todo);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const editTodo = async (id, updatedTodo) => {
  try {
    await db.collection("todos").doc(id).update(updatedTodo);
  } catch (error) {
    console.error("Error editing todo:", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    await db.collection("todos").doc(id).delete();
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export const getTodos = async () => {
  try {
    const snapshot = await db.collection("todos").get();
    const todos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return todos;
  } catch (error) {
    console.error("Error getting todos:", error);
    return [];
  }
};
