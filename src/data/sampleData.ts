import {
  Invoice,
  RateConfirmation,
  PurchaseOrder,
  Company,
  Address,
} from "../types";

// Sample company data
export const sampleCompanyFrom: Company = {
  name: "Acme Corporation",
  address: {
    street: "123 Business Ave",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
  },
  phone: "+1 (555) 123-4567",
  email: "billing@acmecorp.com",
  taxId: "12-3456789",
};

export const sampleCompanyTo: Company = {
  name: "Global Tech Industries",
  address: {
    street: "456 Tech Park Dr",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "USA",
  },
  phone: "+1 (555) 987-6543",
  email: "accounts@globaltech.com",
  taxId: "98-7654321",
};

// Sample Invoice
export const sampleInvoice: Invoice = {
  id: "1",
  invoiceNumber: "INV-2024-001",
  date: new Date("2024-01-15"),
  dueDate: new Date("2024-02-14"),
  status: "sent",
  from: sampleCompanyFrom,
  to: sampleCompanyTo,
  billTo: {
    name: "John Smith",
    email: "john.smith@globaltech.com",
    phone: "+1 (555) 987-6543",
  },
  items: [
    {
      id: "1",
      description: "Professional Services - Web Development",
      quantity: 40,
      unitPrice: 150,
      amount: 6000,
    },
    {
      id: "2",
      description: "Cloud Hosting - Monthly Subscription",
      quantity: 1,
      unitPrice: 299,
      amount: 299,
    },
    {
      id: "3",
      description: "SSL Certificate - Annual",
      quantity: 1,
      unitPrice: 99,
      amount: 99,
    },
  ],
  subtotal: 6398,
  taxAmount: 575.82,
  total: 6973.82,
  notes: "Thank you for your business. Please remit payment within 30 days.",
  terms:
    "Payment due within 30 days. Late payments may incur a 1.5% monthly interest charge.",
  paymentInstructions:
    "Wire transfer to Account #123456789, Routing #987654321",
};

// Sample Rate Confirmation
export const sampleRateConfirmation: RateConfirmation = {
  id: "1",
  confirmationNumber: "RC-2024-001",
  date: new Date("2024-01-15"),
  carrier: {
    name: "Swift Transport LLC",
    address: {
      street: "789 Freight Way",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    phone: "+1 (555) 246-8135",
    email: "dispatch@swifttransport.com",
  },
  shipper: sampleCompanyFrom,
  consignee: sampleCompanyTo,
  shipment: {
    pickupDate: new Date("2024-01-20"),
    deliveryDate: new Date("2024-01-25"),
    origin: {
      street: "123 Business Ave",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
    destination: {
      street: "456 Tech Park Dr",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA",
    },
    distance: 2900,
    weight: 5000,
    dimensions: {
      length: 48,
      width: 40,
      height: 42,
      unit: "in",
    },
    commodity: "Computer Equipment",
    specialInstructions: "Handle with care. Temperature controlled required.",
  },
  rate: {
    baseRate: 2800,
    fuelSurcharge: 420,
    additionalCharges: [
      { description: "Temperature Control", amount: 250 },
      { description: "Liftgate Service", amount: 75 },
    ],
    totalRate: 3545,
  },
  paymentTerms: "Net 30 days from delivery",
  status: "confirmed",
  notes: "Please ensure all equipment is properly secured and labeled.",
  authorizedBy: {
    name: "Jane Doe",
    email: "jane.doe@acmecorp.com",
    phone: "+1 (555) 123-4567",
  },
};

// Sample Purchase Order
export const samplePurchaseOrder: PurchaseOrder = {
  id: "1",
  poNumber: "PO-2024-001",
  date: new Date("2024-01-15"),
  requiredDate: new Date("2024-02-15"),
  buyer: sampleCompanyTo,
  supplier: {
    name: "Office Supplies Inc.",
    address: {
      street: "321 Supply Chain Blvd",
      city: "Dallas",
      state: "TX",
      zipCode: "75201",
      country: "USA",
    },
    phone: "+1 (555) 369-2580",
    email: "orders@officesupplies.com",
  },
  items: [
    {
      id: "1",
      itemNumber: "DESK-001",
      description: "Ergonomic Office Desk - Standing",
      quantity: 10,
      unitPrice: 599,
      amount: 5990,
    },
    {
      id: "2",
      itemNumber: "CHAIR-002",
      description: "Executive Office Chair - Leather",
      quantity: 10,
      unitPrice: 449,
      amount: 4490,
    },
    {
      id: "3",
      itemNumber: "MON-003",
      description: '27" 4K Monitor',
      quantity: 20,
      unitPrice: 399,
      amount: 7980,
    },
  ],
  subtotal: 18460,
  tax: 1476.8,
  shipping: 250,
  total: 20186.8,
  paymentTerms: "Net 30 days",
  deliveryAddress: {
    street: "456 Tech Park Dr",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "USA",
  },
  notes: "Please deliver between 9 AM - 5 PM. Loading dock access available.",
};
