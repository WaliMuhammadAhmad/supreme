# @supreme/shared-utils

Shared utility functions for the Supreme monorepo (JavaScript/ES6+).

## Installation

This package is internal to the monorepo and is automatically available to all apps and packages.

## Usage

### In Frontend (@supreme/web)

```javascript
import { formatDate, isValidEmail, truncateText } from '@supreme/shared-utils';

const formattedDate = formatDate(new Date());
const isValid = isValidEmail('test@example.com');
const shortText = truncateText('Long text here', 50);
```

### In Backend (@supreme/api)

```javascript
const { formatDate, isValidEmail, generateId } = require('@supreme/shared-utils');

const formattedDate = formatDate(new Date());
const isValid = isValidEmail(email);
const uniqueId = generateId();
```

## Available Functions

- `formatDate(date)` - Format date to readable string
- `isValidEmail(email)` - Validate email format
- `generateId()` - Generate unique identifier
- `truncateText(text, maxLength)` - Truncate text with ellipsis
- `delay(ms)` - Promise-based delay

## Adding New Utilities

1. Add your function to `src/index.js`
2. Document it with JSDoc comments
3. Export it from the main module
4. Update this README

## JSDoc Example

```javascript
/**
 * Calculate percentage
 * @param {number} value - Current value
 * @param {number} total - Total value
 * @returns {number} Percentage (0-100)
 */
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return (value / total) * 100;
};
```

## Philosophy

Keep utilities:
- **Pure**: No side effects
- **Tested**: Add tests for each utility
- **Documented**: Clear JSDoc comments
- **Reusable**: Useful in both frontend and backend
- **JavaScript**: No TypeScript, pure ES6+

## Note

This package uses **JavaScript (ES6+)** - TypeScript is not configured in this monorepo.
