// Supabase configuration for quote submission
import { getOrCreateSessionId } from './session';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

interface QuoteFormData {
  phone: string;
  service: 'rental' | 'texture' | 'waterproofing' | 'onewall';
  name: string;
  address?: string;
  pincode: string;
  homeType: '1rk' | '1bhk' | '2bhk' | '3bhk' | 'villa' | 'other';
  numberOfWalls?: string;
  area?: string;
  paintType?: 'new' | 'repaint' | '';
  consultationType: 'visit' | 'call';
  date?: string;
  time?: string;
  sessionId?: string; // Added session ID to the interface
}

interface QuoteResponse {
  success: boolean;
  message: string;
  quoteId?: string;
  error?: string;
}

export async function submitQuote(formData: QuoteFormData): Promise<QuoteResponse> {
  try {
    // Get or create session ID
    const sessionId = getOrCreateSessionId();
    
    // Add session ID to form data
    const dataWithSession = {
      ...formData,
      sessionId
    };

    const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(dataWithSession),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit quote request');
    }

    return result;
  } catch (error) {
    console.error('Error submitting quote:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}