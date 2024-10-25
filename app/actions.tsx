'user server';

const database = { data: '' };

export async function saveAction(data: string) {
  database.data = data;
  console.log('data saved:', data);
}
