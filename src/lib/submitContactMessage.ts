import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getFirestoreDb } from '@/lib/firebase'

const COLLECTION = 'contactMessages'

export type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function submitContactMessage(payload: ContactPayload): Promise<void> {
  const db = getFirestoreDb()
  await addDoc(collection(db, COLLECTION), {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    source: 'portfolio',
    createdAt: serverTimestamp(),
  })
}
