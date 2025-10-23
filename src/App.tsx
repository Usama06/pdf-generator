import { useState } from "react";
import { PDFPreview, SelectField } from "./components";
import {
  sampleInvoice,
  sampleRateConfirmation,
  samplePurchaseOrder,
} from "./data/sampleData";

type DocumentType = "invoice" | "rateConfirmation" | "purchaseOrder";

function App() {
  const [selectedDocument, setSelectedDocument] =
    useState<DocumentType>("invoice");

  const documentOptions = [
    { value: "invoice", label: "Invoice" },
    { value: "rateConfirmation", label: "Rate Confirmation" },
    { value: "purchaseOrder", label: "Purchase Order" },
  ];

  const getDocumentData = () => {
    switch (selectedDocument) {
      case "invoice":
        return sampleInvoice;
      case "rateConfirmation":
        return sampleRateConfirmation;
      case "purchaseOrder":
        return samplePurchaseOrder;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Enterprise PDF Generator
            </h1>
            <p className="text-gray-600">
              Generate professional PDFs for invoices, rate confirmations,
              purchase orders, and more
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Select Document Type
              </h2>
              <div className="max-w-md">
                <SelectField
                  label="Document Type"
                  value={selectedDocument}
                  onChange={(value) =>
                    setSelectedDocument(value as DocumentType)
                  }
                  options={documentOptions}
                  required
                />
              </div>
            </div>

            {/* Document Information */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Document Information
              </h3>
              {selectedDocument === "invoice" && (
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Invoice #:</strong> {sampleInvoice.invoiceNumber}
                  </p>
                  <p>
                    <strong>From:</strong> {sampleInvoice.from.name}
                  </p>
                  <p>
                    <strong>To:</strong> {sampleInvoice.to.name}
                  </p>
                  <p>
                    <strong>Total:</strong> ${sampleInvoice.total.toFixed(2)}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className="capitalize">{sampleInvoice.status}</span>
                  </p>
                </div>
              )}
              {selectedDocument === "rateConfirmation" && (
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Confirmation #:</strong>{" "}
                    {sampleRateConfirmation.confirmationNumber}
                  </p>
                  <p>
                    <strong>Carrier:</strong>{" "}
                    {sampleRateConfirmation.carrier.name}
                  </p>
                  <p>
                    <strong>Origin:</strong>{" "}
                    {sampleRateConfirmation.shipment.origin.city},{" "}
                    {sampleRateConfirmation.shipment.origin.state}
                  </p>
                  <p>
                    <strong>Destination:</strong>{" "}
                    {sampleRateConfirmation.shipment.destination.city},{" "}
                    {sampleRateConfirmation.shipment.destination.state}
                  </p>
                  <p>
                    <strong>Total Rate:</strong> $
                    {sampleRateConfirmation.rate.totalRate.toFixed(2)}
                  </p>
                </div>
              )}
              {selectedDocument === "purchaseOrder" && (
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>PO #:</strong> {samplePurchaseOrder.poNumber}
                  </p>
                  <p>
                    <strong>Buyer:</strong> {samplePurchaseOrder.buyer.name}
                  </p>
                  <p>
                    <strong>Supplier:</strong>{" "}
                    {samplePurchaseOrder.supplier.name}
                  </p>
                  <p>
                    <strong>Total:</strong> $
                    {samplePurchaseOrder.total.toFixed(2)}
                  </p>
                  <p>
                    <strong>Items:</strong> {samplePurchaseOrder.items.length}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* PDF Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              PDF Preview & Download
            </h2>
            <PDFPreview
              documentType={selectedDocument}
              data={getDocumentData()}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>Built with React, TypeScript, and @react-pdf/renderer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
