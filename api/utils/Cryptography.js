import { createHash } from "crypto"

function createSalt() {
    return Math.random().toString(36).substring(2, 18)
}

export function hashContent(content, salt = null) {
    if (!content || typeof content !== 'string') {
        throw new Error('Content must be a non-empty string');
    }

    if (!salt) {
        salt = createSalt();
    } else if (typeof salt !== 'string') {
        throw new Error('Salt must be a string');
    }

    return [salt, createHash('sha256').update(`${content};${salt}`).digest('base64')]
}

