// Common types
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Company {
  name: string;
  address: Address;
  phone: string;
  email: string;
  taxId?: string;
  logo?: string;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
}

// Invoice types
export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxRate?: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: Date;
  dueDate: Date;
  status: "draft" | "sent" | "paid" | "overdue";
  from: Company;
  to: Company;
  billTo: Contact;
  items: InvoiceItem[];
  subtotal: number;
  taxAmount: number;
  total: number;
  notes?: string;
  terms?: string;
  paymentInstructions?: string;
}

// Rate Confirmation types
export interface ShipmentDetails {
  pickupDate: Date;
  deliveryDate: Date;
  origin: Address;
  destination: Address;
  distance: number;
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: "in" | "cm";
  };
  commodity: string;
  specialInstructions?: string;
}

export interface RateDetails {
  baseRate: number;
  fuelSurcharge: number;
  additionalCharges: Array<{
    description: string;
    amount: number;
  }>;
  totalRate: number;
}

export interface RateConfirmation {
  id: string;
  confirmationNumber: string;
  date: Date;
  carrier: Company;
  shipper: Company;
  consignee: Company;
  shipment: ShipmentDetails;
  rate: RateDetails;
  paymentTerms: string;
  status: "pending" | "confirmed" | "cancelled";
  notes?: string;
  authorizedBy?: Contact;
}

// Bill of Lading types
export interface BillOfLading {
  id: string;
  bolNumber: string;
  date: Date;
  carrier: Company;
  shipper: Company;
  consignee: Company;
  shipment: ShipmentDetails;
  items: Array<{
    quantity: number;
    description: string;
    weight: number;
    hazmat: boolean;
  }>;
  specialInstructions?: string;
  shipperSignature?: string;
  carrierSignature?: string;
  dateReceived?: Date;
}

// Purchase Order types
export interface PurchaseOrderItem {
  id: string;
  itemNumber: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  date: Date;
  requiredDate: Date;
  buyer: Company;
  supplier: Company;
  items: PurchaseOrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  paymentTerms: string;
  deliveryAddress: Address;
  notes?: string;
}

// Document type union
export type DocumentType =
  | { type: "invoice"; data: Invoice }
  | { type: "rateConfirmation"; data: RateConfirmation }
  | { type: "billOfLading"; data: BillOfLading }
  | { type: "purchaseOrder"; data: PurchaseOrder };
