// This is a utility file for common functions
// Add your utility functions below

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
	return twMerge(clsx(inputs));
};
// End of utility functions
