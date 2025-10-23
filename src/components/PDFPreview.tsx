import React, { useState } from "react";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { Invoice, RateConfirmation, PurchaseOrder } from "../types";
import {
  InvoiceTemplate,
  RateConfirmationTemplate,
  PurchaseOrderTemplate,
} from "../templates";
import { Button } from "./Button";

interface PDFPreviewProps {
  documentType: "invoice" | "rateConfirmation" | "purchaseOrder";
  data: Invoice | RateConfirmation | PurchaseOrder;
}

export const PDFPreview: React.FC<PDFPreviewProps> = ({
  documentType,
  data,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const renderDocument = () => {
    switch (documentType) {
      case "invoice":
        return <InvoiceTemplate invoice={data as Invoice} />;
      case "rateConfirmation":
        return (
          <RateConfirmationTemplate
            rateConfirmation={data as RateConfirmation}
          />
        );
      case "purchaseOrder":
        return <PurchaseOrderTemplate purchaseOrder={data as PurchaseOrder} />;
    }
  };

  const getFileName = () => {
    switch (documentType) {
      case "invoice":
        return `Invoice-${(data as Invoice).invoiceNumber}.pdf`;
      case "rateConfirmation":
        return `RateConfirmation-${
          (data as RateConfirmation).confirmationNumber
        }.pdf`;
      case "purchaseOrder":
        return `PO-${(data as PurchaseOrder).poNumber}.pdf`;
      default:
        return "document.pdf";
    }
  };

  const document = renderDocument();

  return (
    <div className="mt-6">
      <div className="flex gap-4 mb-4">
        <Button
          onClick={() => setShowPreview(!showPreview)}
          variant="secondary"
        >
          {showPreview ? "Hide Preview" : "Show Preview"}
        </Button>
        {document && (
          <BlobProvider document={document}>
            {({ blob, loading }) => (
              <Button
                disabled={loading || !blob}
                onClick={() => {
                  if (blob) {
                    const url = URL.createObjectURL(blob);
                    const link = window.document.createElement("a");
                    link.href = url;
                    link.download = getFileName();
                    link.click();
                    URL.revokeObjectURL(url);
                  }
                }}
              >
                {loading ? "Generating..." : "Download PDF"}
              </Button>
            )}
          </BlobProvider>
        )}
      </div>

      {showPreview && document && (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <PDFViewer width="100%" height="600px" className="border-0">
            {document}
          </PDFViewer>
        </div>
      )}
    </div>
  );
};
