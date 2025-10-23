import { InvoiceItem, PurchaseOrderItem } from "../types";

export const calculateItemAmount = (
  quantity: number,
  unitPrice: number
): number => {
  return quantity * unitPrice;
};

export const calculateSubtotal = (
  items: InvoiceItem[] | PurchaseOrderItem[]
): number => {
  return items.reduce((sum, item) => sum + item.amount, 0);
};

export const calculateTax = (subtotal: number, taxRate: number): number => {
  return subtotal * (taxRate / 100);
};

export const calculateTotal = (
  subtotal: number,
  tax: number,
  additionalCharges: number = 0
): number => {
  return subtotal + tax + additionalCharges;
};

export const generateInvoiceNumber = (): string => {
  const prefix = "INV";
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}-${timestamp}-${random}`;
};

export const generateConfirmationNumber = (): string => {
  const prefix = "RC";
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}-${timestamp}-${random}`;
};

export const generatePONumber = (): string => {
  const prefix = "PO";
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}-${timestamp}-${random}`;
};
