import { openDB } from 'idb';

const initdb = async () =>
  openDB('textEdit', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('textEdit')) {
        console.log('text_edit database already exists');
        return;
      }
      db.createObjectStore('textEdit', { keyPath: 'id', autoIncrement: true });
      console.log('textEdit database created');
    },
  });

// Accepts some content and adds it to the database
export const putDb = async (content) => {

    console.log('Post to the DB');
    const textEditDb = await openDB('textEdit', 1);
    const tx = textEditDb.transaction('textEdit', 'readwrite');
    const store = tx.objectStore('textEdit');
    const request = store.put({ id: 1, content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
}

// a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const textEditDb = await openDB('textEdit', 1);
  const tx = textEditDb.transaction('textEdit', 'readonly');
  const store = tx.objectStore('textEdit');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
