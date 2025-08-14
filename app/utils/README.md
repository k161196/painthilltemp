# Frontend Utilities

## Session Management

### Overview
The session management system creates a unique identifier for each user session and persists it across page visits using localStorage. This allows tracking user behavior and associating form submissions with specific sessions.

### Usage

#### Session ID Generation
```typescript
import { getOrCreateSessionId } from './session';

// Gets existing session ID or creates a new one
const sessionId = getOrCreateSessionId();
console.log(sessionId); // "1691234567890-abc123def456"
```

#### Session Provider
The `SessionProvider` component automatically initializes the session ID when the app loads:

```typescript
import SessionProvider from './components/SessionProvider';

// Wrap your app with SessionProvider
<SessionProvider>
  <YourApp />
</SessionProvider>
```

### Session ID Format
Session IDs follow the format: `{timestamp}-{randomString}`
- **timestamp**: Unix timestamp when the session was created
- **randomString**: Random alphanumeric string for uniqueness

Example: `1691234567890-abc123def456`

### Storage
- Session IDs are stored in `localStorage` with the key `painthill_session_id`
- Session IDs persist across browser sessions until localStorage is cleared
- If localStorage is not available, a temporary session ID is generated

### API Integration
The session ID is automatically included in all quote submissions via the `submitQuote` function:

```typescript
import { submitQuote } from './supabase';

// Session ID is automatically added to the request
const result = await submitQuote(formData);
```

### Utilities

#### `getOrCreateSessionId()`
- Returns existing session ID or creates a new one
- Handles localStorage availability gracefully
- Returns a fallback session ID for server-side rendering

#### `getCurrentSessionId()`
- Returns current session ID without creating a new one
- Returns `null` if no session exists

#### `clearSessionId()`
- Removes session ID from localStorage
- Useful for testing or explicit session reset

### Browser Compatibility
- Works in all modern browsers that support localStorage
- Graceful fallback for environments without localStorage
- Server-side rendering compatible

### Privacy Considerations
- Session IDs are generated client-side and do not contain personal information
- Session IDs are only used for tracking user interactions on the website
- No third-party tracking services are used