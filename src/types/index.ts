export type UserRole = "FREELANCER" | "CLIENT";

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";

export type InvoiceStatus = "PAID" | "PENDING";

// Reusable API response type
export type ApiResponse<T> = {
    success: boolean;
    data?: T;
    message?: string;
    error?: unknown;
};
