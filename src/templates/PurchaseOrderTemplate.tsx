import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { PurchaseOrder } from "../types";
import { commonStyles } from "./styles";
import { format } from "date-fns";

interface PurchaseOrderTemplateProps {
  purchaseOrder: PurchaseOrder;
}

export const PurchaseOrderTemplate: React.FC<PurchaseOrderTemplateProps> = ({
  purchaseOrder,
}) => {
  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        {/* Header Bar */}
        <View style={commonStyles.headerTopBar}>
          <Text style={commonStyles.headerTitle}>PURCHASE ORDER</Text>
        </View>

        {/* Document Info */}
        <View style={commonStyles.rowSpaceBetween}>
          <View style={commonStyles.flex2}>
            <Text style={[commonStyles.title, { marginTop: 10 }]}>
              {purchaseOrder.buyer.name}
            </Text>
            <Text style={commonStyles.documentInfo}>
              Official Purchase Order Document
            </Text>
          </View>
          <View style={[commonStyles.flex1, { alignItems: "flex-end" }]}>
            <View style={commonStyles.highlightBox}>
              <Text style={commonStyles.label}>PURCHASE ORDER #</Text>
              <Text style={commonStyles.valueImportant}>
                {purchaseOrder.poNumber}
              </Text>
              <Text style={commonStyles.label}>ORDER DATE</Text>
              <Text style={commonStyles.value}>
                {format(purchaseOrder.date, "MMMM dd, yyyy")}
              </Text>
              <Text style={commonStyles.label}>REQUIRED BY</Text>
              <Text style={commonStyles.value}>
                {format(purchaseOrder.requiredDate, "MMMM dd, yyyy")}
              </Text>
            </View>
          </View>
        </View>

        {/* Buyer and Supplier Info */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>Order Information</Text>
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>BUYER (SHIP TO)</Text>
                <Text style={commonStyles.value}>
                  {purchaseOrder.buyer.name}
                </Text>
                <Text style={commonStyles.address}>
                  {purchaseOrder.buyer.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {purchaseOrder.buyer.address.city},{" "}
                  {purchaseOrder.buyer.address.state}{" "}
                  {purchaseOrder.buyer.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {purchaseOrder.buyer.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Phone: {purchaseOrder.buyer.phone}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {purchaseOrder.buyer.email}
                  </Text>
                </View>
              </View>
            </View>

            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>
                  SUPPLIER (VENDOR)
                </Text>
                <Text style={commonStyles.value}>
                  {purchaseOrder.supplier.name}
                </Text>
                <Text style={commonStyles.address}>
                  {purchaseOrder.supplier.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {purchaseOrder.supplier.address.city},{" "}
                  {purchaseOrder.supplier.address.state}{" "}
                  {purchaseOrder.supplier.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {purchaseOrder.supplier.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Phone: {purchaseOrder.supplier.phone}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {purchaseOrder.supplier.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Delivery Address */}
        <View style={commonStyles.section}>
          <View style={commonStyles.highlightBox}>
            <Text style={commonStyles.subsectionTitle}>Delivery Address</Text>
            <Text style={commonStyles.address}>
              {purchaseOrder.deliveryAddress.street}
            </Text>
            <Text style={commonStyles.address}>
              {purchaseOrder.deliveryAddress.city},{" "}
              {purchaseOrder.deliveryAddress.state}{" "}
              {purchaseOrder.deliveryAddress.zipCode}
            </Text>
            <Text style={commonStyles.address}>
              {purchaseOrder.deliveryAddress.country}
            </Text>
            <View style={{ marginTop: 8 }}>
              <Text style={commonStyles.label}>Payment Terms: </Text>
              <Text style={commonStyles.value}>
                {purchaseOrder.paymentTerms}
              </Text>
            </View>
          </View>
        </View>

        {/* Items Table */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>ORDER ITEMS</Text>
          <View style={commonStyles.table}>
            <View style={commonStyles.tableHeader}>
              <Text style={[commonStyles.tableCellSmall, { flex: 0.4 }]}>
                #
              </Text>
              <Text style={[commonStyles.tableCellSmall]}>Item #</Text>
              <Text style={[commonStyles.tableCellLarge, { flex: 2 }]}>
                Description
              </Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textCenter]}
              >
                Quantity
              </Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textRight]}
              >
                Unit Price
              </Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textRight]}
              >
                Amount
              </Text>
            </View>

            {purchaseOrder.items.map((item, index) => (
              <View
                key={item.id}
                style={
                  index % 2 === 0
                    ? commonStyles.tableRow
                    : [commonStyles.tableRow, commonStyles.tableRowAlt]
                }
              >
                <Text style={[commonStyles.tableCellSmall, { flex: 0.4 }]}>
                  {index + 1}
                </Text>
                <Text style={[commonStyles.tableCellSmall]}>
                  {item.itemNumber}
                </Text>
                <Text style={[commonStyles.tableCellLarge, { flex: 2 }]}>
                  {item.description}
                </Text>
                <Text
                  style={[commonStyles.tableCellSmall, commonStyles.textCenter]}
                >
                  {item.quantity}
                </Text>
                <Text
                  style={[commonStyles.tableCellSmall, commonStyles.textRight]}
                >
                  ${item.unitPrice.toFixed(2)}
                </Text>
                <Text
                  style={[commonStyles.tableCellSmall, commonStyles.textRight]}
                >
                  ${item.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Totals */}
        <View style={commonStyles.totalSection}>
          <View style={commonStyles.totalRow}>
            <Text style={commonStyles.totalLabel}>Subtotal:</Text>
            <Text style={commonStyles.totalValue}>
              ${purchaseOrder.subtotal.toFixed(2)}
            </Text>
          </View>
          <View style={commonStyles.totalRow}>
            <Text style={commonStyles.totalLabel}>Tax:</Text>
            <Text style={commonStyles.totalValue}>
              ${purchaseOrder.tax.toFixed(2)}
            </Text>
          </View>
          <View style={commonStyles.totalRow}>
            <Text style={commonStyles.totalLabel}>Shipping:</Text>
            <Text style={commonStyles.totalValue}>
              ${purchaseOrder.shipping.toFixed(2)}
            </Text>
          </View>
          <View style={[commonStyles.totalRow, commonStyles.grandTotal]}>
            <Text style={commonStyles.totalLabel}>Total:</Text>
            <Text style={commonStyles.totalValue}>
              ${purchaseOrder.total.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Notes */}
        {purchaseOrder.notes && (
          <View style={commonStyles.section}>
            <Text style={commonStyles.sectionTitle}>NOTES</Text>
            <Text style={commonStyles.value}>{purchaseOrder.notes}</Text>
          </View>
        )}

        {/* Footer */}
        <View style={commonStyles.footer}>
          <Text>
            Please confirm receipt of this purchase order and provide delivery
            timeline.
          </Text>
        </View>
      </Page>
    </Document>
  );
};
