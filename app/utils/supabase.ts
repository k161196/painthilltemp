// Supabase configuration for quote submission
import { getOrCreateSessionId } from './session';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Validate environment variables
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase environment variables');
}

interface QuoteFormData {
  phone: string;
  service: 'rental' | 'texture';
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
    // Validate required environment variables
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error('Supabase configuration is missing');
    }

    // Get or create session ID
    const sessionId = getOrCreateSessionId();
    
    // Add session ID to form data
    const dataWithSession = {
      ...formData,
      sessionId,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'x-client-info': 'painthill-website',
      },
      body: JSON.stringify(dataWithSession),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Quote submission failed:', result);
      throw new Error(result.error || result.message || 'Failed to submit quote request');
    }

    return {
      success: true,
      message: result.message || 'Quote submitted successfully',
      quoteId: result.quoteId
    };
  } catch (error) {
    console.error('Error submitting quote:', error);
    
    // User-friendly error messages
    let userMessage = 'Unable to submit your request. Please try again.';
    if (error instanceof TypeError && error.message.includes('fetch')) {
      userMessage = 'Network error. Please check your connection and try again.';
    }
    
    return {
      success: false,
      message: userMessage,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Contact form message interface
interface MessageFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source?: string;
  sessionId?: string;
}

interface MessageResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

// Submit contact form message to Supabase
export async function submitMessage(formData: MessageFormData): Promise<MessageResponse> {
  try {
    // Validate required environment variables
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error('Supabase configuration is missing');
    }

    // Get or create session ID
    const sessionId = getOrCreateSessionId();
    
    // Add session ID and source to form data
    const dataWithMeta = {
      ...formData,
      source: 'website',
      sessionId,
      created_at: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown'
    };

    const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'x-client-info': 'painthill-website',
      },
      body: JSON.stringify(dataWithMeta),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Message submission failed:', result);
      throw new Error(result.error || result.message || 'Failed to submit message');
    }

    return {
      success: true,
      message: result.message || 'Message sent successfully',
      messageId: result.messageId
    };
  } catch (error) {
    console.error('Error submitting message:', error);
    
    // User-friendly error messages
    let userMessage = 'Unable to send your message. Please try again.';
    if (error instanceof TypeError && error.message.includes('fetch')) {
      userMessage = 'Network error. Please check your connection and try again.';
    }
    
    return {
      success: false,
      message: userMessage,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}