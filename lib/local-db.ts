import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

// Garante que o diretório data existe
async function ensureDbExists() {
  try {
    await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
    try {
      await fs.access(DB_PATH);
    } catch {
      // Se o arquivo não existe, cria com estrutura inicial
      await fs.writeFile(DB_PATH, JSON.stringify({
        initiatives: [],
        lastUpdate: new Date().toISOString()
      }, null, 2));
    }
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
    throw error;
  }
}

// Lê todo o banco de dados
async function readDb() {
  await ensureDbExists();
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

// Salva todo o banco de dados
async function writeDb(data: any) {
  await ensureDbExists();
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

// Exporta as funções do banco de dados
export const db = {
  readDb,
  writeDb,
  ensureDbExists
};

// CRUD Operations

export async function createInitiative(initiative: any) {
  const db = await readDb();
  const id = Date.now().toString();
  const newInitiative = {
    ...initiative,
    id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  db.initiatives.push(newInitiative);
  db.lastUpdate = new Date().toISOString();
  
  await writeDb(db);
  return id;
}

export async function getInitiatives(porta?: 'fora' | 'dentro') {
  const db = await readDb();
  if (porta) {
    return db.initiatives.filter((i: any) => i.porta === porta);
  }
  return db.initiatives;
}

export async function getInitiativeById(id: string) {
  const db = await readDb();
  return db.initiatives.find((i: any) => i.id === id);
}

export async function updateInitiative(id: string, updates: any) {
  const db = await readDb();
  const index = db.initiatives.findIndex((i: any) => i.id === id);
  
  if (index === -1) {
    throw new Error('Initiative not found');
  }
  
  db.initiatives[index] = {
    ...db.initiatives[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  db.lastUpdate = new Date().toISOString();
  await writeDb(db);
  
  return db.initiatives[index];
}

export async function deleteInitiative(id: string) {
  const db = await readDb();
  db.initiatives = db.initiatives.filter((i: any) => i.id !== id);
  db.lastUpdate = new Date().toISOString();
  await writeDb(db);
}

// Backup e Restore
export async function backupDb() {
  const db = await readDb();
  const backupPath = path.join(
    process.cwd(), 
    'data', 
    `backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
  );
  
  await fs.writeFile(backupPath, JSON.stringify(db, null, 2));
  return backupPath;
}

export async function restoreDb(backupPath: string) {
  const backupData = await fs.readFile(backupPath, 'utf-8');
  await writeDb(JSON.parse(backupData));
} 