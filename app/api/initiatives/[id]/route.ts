import { NextApiRequest, NextApiResponse } from 'next';
import * as db from '@/lib/local-db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid initiative ID' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const initiative = await db.getInitiativeById(id);
        
        if (!initiative) {
          return res.status(404).json({ error: 'Initiative not found' });
        }
        
        return res.status(200).json(initiative);
      } catch (error) {
        console.error('Error fetching initiative:', error);
        return res.status(500).json({ error: 'Failed to fetch initiative' });
      }

    case 'PUT':
      try {
        const updates = req.body;
        const initiative = await db.updateInitiative(id, updates);
        
        return res.status(200).json(initiative);
      } catch (error) {
        console.error('Error updating initiative:', error);
        return res.status(500).json({ error: 'Failed to update initiative' });
      }

    case 'DELETE':
      try {
        await db.deleteInitiative(id);
        return res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error deleting initiative:', error);
        return res.status(500).json({ error: 'Failed to delete initiative' });
      }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
} 