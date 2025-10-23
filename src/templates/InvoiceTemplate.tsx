import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { Invoice } from "../types";
import { commonStyles } from "./styles";
import { format } from "date-fns";

interface InvoiceTemplateProps {
  invoice: Invoice;
}

export const InvoiceTemplate: React.FC<InvoiceTemplateProps> = ({
  invoice,
}) => {
  const getStatusBadgeStyle = () => {
    switch (invoice.status) {
      case "paid":
        return commonStyles.badgePaid;
      case "overdue":
        return commonStyles.badgeOverdue;
      case "sent":
        return commonStyles.badgeSent;
      case "draft":
        return commonStyles.badgeDraft;
      default:
        return commonStyles.badgePending;
    }
  };

  const calculateDaysUntilDue = () => {
    const today = new Date();
    const dueDate = new Date(invoice.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        {/* Header Bar */}
        <View style={commonStyles.headerTopBar}>
          <Text style={commonStyles.headerTitle}>COMMERCIAL INVOICE</Text>
        </View>

        {/* Document Info and Status */}
        <View style={commonStyles.rowSpaceBetween}>
          <View style={commonStyles.flex2}>
            <Text style={[commonStyles.title, { marginTop: 10 }]}>
              {invoice.from.name}
            </Text>
            <Text style={commonStyles.documentInfo}>
              Tax ID: {invoice.from.taxId}
            </Text>
            <Text style={commonStyles.documentInfo}>
              Phone: {invoice.from.phone}
            </Text>
            <Text style={commonStyles.documentInfo}>
              Email: {invoice.from.email}
            </Text>
          </View>
          <View style={[commonStyles.flex1, { alignItems: "flex-end" }]}>
            <View style={[commonStyles.badge, getStatusBadgeStyle()]}>
              <Text>{invoice.status.toUpperCase()}</Text>
            </View>
            <View style={commonStyles.highlightBox}>
              <Text style={commonStyles.label}>INVOICE NUMBER</Text>
              <Text style={commonStyles.valueImportant}>
                {invoice.invoiceNumber}
              </Text>
              <Text style={commonStyles.label}>INVOICE DATE</Text>
              <Text style={commonStyles.value}>
                {format(invoice.date, "MMMM dd, yyyy")}
              </Text>
              <Text style={commonStyles.label}>DUE DATE</Text>
              <Text style={commonStyles.value}>
                {format(invoice.dueDate, "MMMM dd, yyyy")}
              </Text>
              {calculateDaysUntilDue() > 0 && (
                <>
                  <Text style={commonStyles.label}>DAYS UNTIL DUE</Text>
                  <Text style={commonStyles.value}>
                    {calculateDaysUntilDue()} days
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>

        {/* Billing Information Section */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>Billing Information</Text>
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>BILL FROM</Text>
                <Text style={commonStyles.value}>{invoice.from.name}</Text>
                <Text style={commonStyles.address}>
                  {invoice.from.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {invoice.from.address.city}, {invoice.from.address.state}{" "}
                  {invoice.from.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {invoice.from.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Phone: {invoice.from.phone}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {invoice.from.email}
                  </Text>
                  {invoice.from.taxId && (
                    <Text style={commonStyles.address}>
                      Tax ID: {invoice.from.taxId}
                    </Text>
                  )}
                </View>
              </View>
            </View>

            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>BILL TO</Text>
                <Text style={commonStyles.value}>{invoice.to.name}</Text>
                <Text style={commonStyles.address}>
                  {invoice.to.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {invoice.to.address.city}, {invoice.to.address.state}{" "}
                  {invoice.to.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {invoice.to.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Attn: {invoice.billTo.name}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {invoice.billTo.email}
                  </Text>
                  <Text style={commonStyles.address}>
                    Phone: {invoice.billTo.phone}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Items Table */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>Invoice Details</Text>
          <View style={commonStyles.table}>
            <View style={commonStyles.tableHeader}>
              <Text
                style={[commonStyles.tableCellSmall, { textAlign: "center" }]}
              >
                #
              </Text>
              <Text style={[commonStyles.tableCellXLarge]}>Description</Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textCenter]}
              >
                Qty
              </Text>
              <Text
                style={[commonStyles.tableCellMedium, commonStyles.textRight]}
              >
                Unit Price
              </Text>
              {invoice.items.some((item) => item.taxRate) && (
                <Text
                  style={[commonStyles.tableCellSmall, commonStyles.textCenter]}
                >
                  Tax %
                </Text>
              )}
              <Text
                style={[commonStyles.tableCellMedium, commonStyles.textRight]}
              >
                Amount
              </Text>
            </View>

            {invoice.items.map((item, index) => (
              <View
                key={item.id}
                style={
                  index % 2 === 0
                    ? commonStyles.tableRow
                    : commonStyles.tableRowAlt
                }
              >
                <Text
                  style={[
                    commonStyles.tableCellSmall,
                    { textAlign: "center", fontWeight: "bold" },
                  ]}
                >
                  {index + 1}
                </Text>
                <Text style={[commonStyles.tableCellXLarge]}>
                  {item.description}
                </Text>
                <Text
                  style={[commonStyles.tableCellSmall, commonStyles.textCenter]}
                >
                  {item.quantity}
                </Text>
                <Text
                  style={[commonStyles.tableCellMedium, commonStyles.textRight]}
                >
                  ${item.unitPrice.toFixed(2)}
                </Text>
                {invoice.items.some((item) => item.taxRate) && (
                  <Text
                    style={[
                      commonStyles.tableCellSmall,
                      commonStyles.textCenter,
                    ]}
                  >
                    {item.taxRate ? `${item.taxRate}%` : "-"}
                  </Text>
                )}
                <Text
                  style={[commonStyles.tableCellMedium, commonStyles.textRight]}
                >
                  ${item.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Summary and Totals */}
        <View style={commonStyles.row}>
          <View style={commonStyles.flex1}>
            {/* Additional Information */}
            <View style={commonStyles.infoBox}>
              <Text style={commonStyles.subsectionTitle}>Invoice Summary</Text>
              <View style={commonStyles.row}>
                <Text style={commonStyles.label}>Total Items: </Text>
                <Text style={commonStyles.value}>{invoice.items.length}</Text>
              </View>
              <View style={commonStyles.row}>
                <Text style={commonStyles.label}>Issue Date: </Text>
                <Text style={commonStyles.value}>
                  {format(invoice.date, "MMM dd, yyyy")}
                </Text>
              </View>
              <View style={commonStyles.row}>
                <Text style={commonStyles.label}>Payment Due: </Text>
                <Text style={commonStyles.value}>
                  {format(invoice.dueDate, "MMM dd, yyyy")}
                </Text>
              </View>
            </View>
          </View>

          <View style={commonStyles.flex1}>
            <View style={commonStyles.totalSection}>
              <View style={commonStyles.totalRow}>
                <Text style={commonStyles.totalLabel}>Subtotal:</Text>
                <Text style={commonStyles.totalValue}>
                  ${invoice.subtotal.toFixed(2)}
                </Text>
              </View>
              <View style={commonStyles.totalRow}>
                <Text style={commonStyles.totalLabel}>
                  Tax (
                  {((invoice.taxAmount / invoice.subtotal) * 100).toFixed(1)}
                  %):
                </Text>
                <Text style={commonStyles.totalValue}>
                  ${invoice.taxAmount.toFixed(2)}
                </Text>
              </View>
              <View style={[commonStyles.totalRow, { borderBottom: "none" }]}>
                <Text style={commonStyles.totalLabel}>Discount:</Text>
                <Text style={commonStyles.totalValue}>$0.00</Text>
              </View>
              <View style={[commonStyles.totalRow, commonStyles.grandTotal]}>
                <Text style={commonStyles.grandTotalLabel}>
                  TOTAL AMOUNT DUE:
                </Text>
                <Text style={commonStyles.grandTotalValue}>
                  ${invoice.total.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Payment Instructions */}
        {invoice.paymentInstructions && (
          <View style={commonStyles.section}>
            <Text style={commonStyles.sectionTitle}>Payment Instructions</Text>
            <View style={commonStyles.highlightBox}>
              <Text style={commonStyles.value}>
                {invoice.paymentInstructions}
              </Text>
              <Text style={[commonStyles.value, { marginTop: 8 }]}>
                Please include invoice number {invoice.invoiceNumber} in your
                payment reference.
              </Text>
            </View>
          </View>
        )}

        {/* Terms and Conditions */}
        {invoice.terms && (
          <View style={commonStyles.section}>
            <View style={commonStyles.termsBox}>
              <Text style={commonStyles.termsTitle}>Terms & Conditions</Text>
              <Text style={commonStyles.termsList}>{invoice.terms}</Text>
              <Text style={[commonStyles.termsList, { marginTop: 6 }]}>
                • Payment is due upon receipt unless otherwise specified
              </Text>
              <Text style={commonStyles.termsList}>
                • Late payments may be subject to interest charges
              </Text>
              <Text style={commonStyles.termsList}>
                • Please retain this invoice for your records
              </Text>
            </View>
          </View>
        )}

        {/* Notes */}
        {invoice.notes && (
          <View style={commonStyles.section}>
            <View style={commonStyles.notesBox}>
              <Text style={commonStyles.notesTitle}>Important Notes</Text>
              <Text style={commonStyles.notesText}>{invoice.notes}</Text>
            </View>
          </View>
        )}

        {/* Signature Section */}
        <View style={commonStyles.signatureSection}>
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.signatureLine}>
                <Text style={commonStyles.signatureLabel}>
                  Authorized Signature
                </Text>
              </View>
            </View>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.signatureLine}>
                <Text style={commonStyles.signatureLabel}>Date</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={commonStyles.footer}>
          <View style={commonStyles.footerRow}>
            <Text style={commonStyles.footerText}>
              {invoice.from.name} | {invoice.from.email} | {invoice.from.phone}
            </Text>
            <Text style={commonStyles.footerText}>
              Invoice #{invoice.invoiceNumber}
            </Text>
          </View>
          <View style={commonStyles.footerRow}>
            <Text style={commonStyles.footerText}>
              {invoice.from.address.street}, {invoice.from.address.city},{" "}
              {invoice.from.address.state} {invoice.from.address.zipCode}
            </Text>
            <Text style={commonStyles.footerText}>Page 1 of 1</Text>
          </View>
          <Text
            style={[
              commonStyles.footerText,
              { textAlign: "center", marginTop: 5 },
            ]}
          >
            This is a computer-generated invoice and does not require a physical
            signature
          </Text>
        </View>
      </Page>
    </Document>
  );
};
