import { db } from './firebase';
import { collection, addDoc, updateDoc, doc, getDocs, query, where } from 'firebase/firestore';

// Types
export interface Initiative {
  id?: string;
  title: string;
  description: string;
  responsible: string;
  porta: "fora" | "dentro";
  statusCounts: {
    satisfatorio: number;
    alerta: number;
    critico: number;
    concluido: number;
    naoMonitorado: number;
  };
  metasCount: number;
  defaultOpen: boolean;
  resultados?: Result[];
}

export interface Result {
  id?: string;
  title: string;
  defaultOpen: boolean;
  metas: Goal[];
}

export interface Goal {
  id?: string;
  status: "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado";
  description: string;
  responsible: string;
  alcance: number;
  date: string;
  parecer: string;
  statusHistory: StatusHistory[];
  encaminhamentos: Encaminhamento[];
}

export interface StatusHistory {
  date: string;
  status: string;
  parecer: string;
}

export interface Encaminhamento {
  id: string;
  description: string;
  prazo: string;
  responsavel: string;
}

// Firebase Operations
export const createInitiative = async (initiative: Initiative) => {
  try {
    const docRef = await addDoc(collection(db, "initiatives"), initiative);
    return docRef.id;
  } catch (error) {
    console.error("Error creating initiative:", error);
    throw error;
  }
};

export const updateInitiative = async (id: string, initiative: Partial<Initiative>) => {
  try {
    const docRef = doc(db, "initiatives", id);
    await updateDoc(docRef, initiative);
  } catch (error) {
    console.error("Error updating initiative:", error);
    throw error;
  }
};

export const getInitiatives = async (porta: "fora" | "dentro") => {
  try {
    const q = query(collection(db, "initiatives"), where("porta", "==", porta));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Initiative[];
  } catch (error) {
    console.error("Error getting initiatives:", error);
    throw error;
  }
};

export const createResult = async (initiativeId: string, result: Result) => {
  try {
    const docRef = await addDoc(collection(db, `initiatives/${initiativeId}/results`), result);
    return docRef.id;
  } catch (error) {
    console.error("Error creating result:", error);
    throw error;
  }
};

export const createGoal = async (initiativeId: string, resultId: string, goal: Goal) => {
  try {
    const docRef = await addDoc(collection(db, `initiatives/${initiativeId}/results/${resultId}/goals`), goal);
    return docRef.id;
  } catch (error) {
    console.error("Error creating goal:", error);
    throw error;
  }
}; 