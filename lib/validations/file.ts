
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
];

export function validateImage(file: File) {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        return "Invalid file type. Only JPEG, PNG, GIF, and WEBP are allowed.";
    }

    if (file.size > MAX_IMAGE_SIZE) {
        return "File size exceeds the maximum limit of 5MB.";
    }

    return null; // No validation errors
}