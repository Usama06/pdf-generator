import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { RateConfirmation } from "../types";
import { commonStyles } from "./styles";
import { format } from "date-fns";

interface RateConfirmationTemplateProps {
  rateConfirmation: RateConfirmation;
}

export const RateConfirmationTemplate: React.FC<
  RateConfirmationTemplateProps
> = ({ rateConfirmation }) => {
  const { carrier, shipper, consignee, shipment, rate } = rateConfirmation;

  const getStatusBadgeStyle = () => {
    return rateConfirmation.status === "confirmed"
      ? commonStyles.badgeConfirmed
      : rateConfirmation.status === "cancelled"
      ? commonStyles.badgeOverdue
      : commonStyles.badgePending;
  };

  return (
    <Document>
      <Page size="A4" style={commonStyles.page}>
        {/* Header Bar */}
        <View style={commonStyles.headerTopBar}>
          <Text style={commonStyles.headerTitle}>RATE CONFIRMATION</Text>
        </View>

        {/* Document Info and Status */}
        <View style={commonStyles.rowSpaceBetween}>
          <View style={commonStyles.flex2}>
            <Text style={[commonStyles.title, { marginTop: 10 }]}>
              Rate Confirmation Agreement
            </Text>
            <Text style={commonStyles.documentInfo}>
              This document confirms the agreed freight rates and terms
            </Text>
          </View>
          <View style={[commonStyles.flex1, { alignItems: "flex-end" }]}>
            <View style={[commonStyles.badge, getStatusBadgeStyle()]}>
              <Text>{rateConfirmation.status.toUpperCase()}</Text>
            </View>
            <View style={commonStyles.highlightBox}>
              <Text style={commonStyles.label}>CONFIRMATION NUMBER</Text>
              <Text style={commonStyles.valueImportant}>
                {rateConfirmation.confirmationNumber}
              </Text>
              <Text style={commonStyles.label}>CONFIRMATION DATE</Text>
              <Text style={commonStyles.value}>
                {format(rateConfirmation.date, "MMMM dd, yyyy")}
              </Text>
            </View>
          </View>
        </View>

        {/* Parties Information Section */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>Parties Information</Text>
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>CARRIER</Text>
                <Text style={commonStyles.value}>{carrier.name}</Text>
                <Text style={commonStyles.address}>
                  {carrier.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {carrier.address.city}, {carrier.address.state}{" "}
                  {carrier.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {carrier.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Phone: {carrier.phone}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {carrier.email}
                  </Text>
                </View>
              </View>
            </View>

            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>SHIPPER</Text>
                <Text style={commonStyles.value}>{shipper.name}</Text>
                <Text style={commonStyles.address}>
                  {shipper.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {shipper.address.city}, {shipper.address.state}{" "}
                  {shipper.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {shipper.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Phone: {shipper.phone}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {shipper.email}
                  </Text>
                </View>
              </View>
            </View>

            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>CONSIGNEE</Text>
                <Text style={commonStyles.value}>{consignee.name}</Text>
                <Text style={commonStyles.address}>
                  {consignee.address.street}
                </Text>
                <Text style={commonStyles.address}>
                  {consignee.address.city}, {consignee.address.state}{" "}
                  {consignee.address.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {consignee.address.country}
                </Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={commonStyles.address}>
                    Phone: {consignee.phone}
                  </Text>
                  <Text style={commonStyles.address}>
                    Email: {consignee.email}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Shipment Details */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>SHIPMENT DETAILS</Text>

          {/* Schedule Information */}
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View
                style={[commonStyles.infoBox, { backgroundColor: "#f8fafc" }]}
              >
                <Text style={commonStyles.label}>PICKUP DATE</Text>
                <Text style={[commonStyles.valueImportant, { fontSize: 13 }]}>
                  {format(shipment.pickupDate, "EEEE, MMMM dd, yyyy")}
                </Text>
                <Text style={[commonStyles.value, { marginTop: 4 }]}>
                  {format(shipment.pickupDate, "h:mm a")}
                </Text>
              </View>
            </View>
            <View style={commonStyles.flex1}>
              <View
                style={[commonStyles.infoBox, { backgroundColor: "#f8fafc" }]}
              >
                <Text style={commonStyles.label}>DELIVERY DATE</Text>
                <Text style={[commonStyles.valueImportant, { fontSize: 13 }]}>
                  {format(shipment.deliveryDate, "EEEE, MMMM dd, yyyy")}
                </Text>
                <Text style={[commonStyles.value, { marginTop: 4 }]}>
                  {format(shipment.deliveryDate, "h:mm a")}
                </Text>
              </View>
            </View>
            <View style={commonStyles.flex1}>
              <View
                style={[commonStyles.infoBox, { backgroundColor: "#f8fafc" }]}
              >
                <Text style={commonStyles.label}>TOTAL DISTANCE</Text>
                <Text style={[commonStyles.valueImportant, { fontSize: 18 }]}>
                  {shipment.distance}
                </Text>
                <Text style={[commonStyles.value, { marginTop: 4 }]}>
                  miles
                </Text>
              </View>
            </View>
          </View>

          {/* Origin & Destination */}
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>PICKUP LOCATION</Text>
                <Text style={commonStyles.value}>{shipment.origin.street}</Text>
                <Text style={commonStyles.address}>
                  {shipment.origin.city}, {shipment.origin.state}{" "}
                  {shipment.origin.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {shipment.origin.country}
                </Text>
              </View>
            </View>
            <View style={commonStyles.flex1}>
              <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoBoxHeader}>
                  DELIVERY LOCATION
                </Text>
                <Text style={commonStyles.value}>
                  {shipment.destination.street}
                </Text>
                <Text style={commonStyles.address}>
                  {shipment.destination.city}, {shipment.destination.state}{" "}
                  {shipment.destination.zipCode}
                </Text>
                <Text style={commonStyles.address}>
                  {shipment.destination.country}
                </Text>
              </View>
            </View>
          </View>

          {/* Cargo Details */}
          <View style={commonStyles.subsectionTitle}>Cargo Information</View>
          <View style={commonStyles.row}>
            <View style={commonStyles.flex1}>
              <View style={{ marginBottom: 8 }}>
                <Text style={commonStyles.label}>COMMODITY</Text>
                <Text style={commonStyles.value}>{shipment.commodity}</Text>
              </View>
            </View>
            <View style={commonStyles.flex1}>
              <View style={{ marginBottom: 8 }}>
                <Text style={commonStyles.label}>WEIGHT</Text>
                <Text style={commonStyles.value}>{shipment.weight} lbs</Text>
              </View>
            </View>
            {shipment.dimensions && (
              <View style={commonStyles.flex1}>
                <View style={{ marginBottom: 8 }}>
                  <Text style={commonStyles.label}>DIMENSIONS (L×W×H)</Text>
                  <Text style={commonStyles.value}>
                    {shipment.dimensions.length} × {shipment.dimensions.width} ×{" "}
                    {shipment.dimensions.height} {shipment.dimensions.unit}
                  </Text>
                </View>
              </View>
            )}
          </View>

          {shipment.specialInstructions && (
            <View style={commonStyles.notesBox}>
              <Text style={commonStyles.label}>SPECIAL INSTRUCTIONS</Text>
              <Text style={[commonStyles.value, { marginTop: 4 }]}>
                {shipment.specialInstructions}
              </Text>
            </View>
          )}
        </View>

        {/* Rate Details */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>
            RATE BREAKDOWN & CHARGES
          </Text>

          {/* Rate Table */}
          <View style={commonStyles.table}>
            <View style={commonStyles.tableHeader}>
              <Text style={[commonStyles.tableCellLarge]}>Description</Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textRight]}
              >
                Amount
              </Text>
            </View>

            <View style={commonStyles.tableRow}>
              <Text style={[commonStyles.tableCellLarge]}>
                Base Freight Rate
              </Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textRight]}
              >
                ${rate.baseRate.toFixed(2)}
              </Text>
            </View>

            <View style={[commonStyles.tableRow, commonStyles.tableRowAlt]}>
              <Text style={[commonStyles.tableCellLarge]}>
                Fuel Surcharge (
                {((rate.fuelSurcharge / rate.baseRate) * 100).toFixed(1)}%)
              </Text>
              <Text
                style={[commonStyles.tableCellSmall, commonStyles.textRight]}
              >
                ${rate.fuelSurcharge.toFixed(2)}
              </Text>
            </View>

            {rate.additionalCharges.map((charge, index) => (
              <View
                key={index}
                style={
                  index % 2 === 0
                    ? commonStyles.tableRow
                    : [commonStyles.tableRow, commonStyles.tableRowAlt]
                }
              >
                <Text style={[commonStyles.tableCellLarge]}>
                  {charge.description}
                </Text>
                <Text
                  style={[commonStyles.tableCellSmall, commonStyles.textRight]}
                >
                  ${charge.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>

          {/* Total Section */}
          <View style={commonStyles.totalSection}>
            <View style={[commonStyles.totalRow, commonStyles.grandTotal]}>
              <Text
                style={[
                  commonStyles.totalLabel,
                  { fontSize: 13, fontWeight: "bold" },
                ]}
              >
                TOTAL AGREED RATE:
              </Text>
              <Text
                style={[
                  commonStyles.totalValue,
                  { fontSize: 18, color: "#1e40af" },
                ]}
              >
                ${rate.totalRate.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Terms */}
        <View style={commonStyles.section}>
          <View style={commonStyles.highlightBox}>
            <Text style={commonStyles.subsectionTitle}>
              Payment Terms & Conditions
            </Text>
            <Text
              style={[commonStyles.value, { marginTop: 8, lineHeight: 1.5 }]}
            >
              {rateConfirmation.paymentTerms}
            </Text>
          </View>
        </View>

        {/* Notes */}
        {rateConfirmation.notes && (
          <View style={commonStyles.section}>
            <View style={commonStyles.notesBox}>
              <Text style={commonStyles.subsectionTitle}>Additional Notes</Text>
              <Text
                style={[commonStyles.value, { marginTop: 8, lineHeight: 1.5 }]}
              >
                {rateConfirmation.notes}
              </Text>
            </View>
          </View>
        )}

        {/* Authorization & Terms */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>
            AUTHORIZATION & AGREEMENT
          </Text>
          <View style={commonStyles.row}>
            {rateConfirmation.authorizedBy && (
              <View style={commonStyles.flex1}>
                <View style={commonStyles.signatureSection}>
                  <Text style={commonStyles.label}>AUTHORIZED BY</Text>
                  <View style={commonStyles.signatureLine} />
                  <Text style={[commonStyles.value, { marginTop: 6 }]}>
                    {rateConfirmation.authorizedBy.name}
                  </Text>
                  <Text style={commonStyles.address}>
                    {rateConfirmation.authorizedBy.email}
                  </Text>
                  <Text style={commonStyles.address}>
                    {rateConfirmation.authorizedBy.phone}
                  </Text>
                  <Text style={[commonStyles.label, { marginTop: 8 }]}>
                    Date: {format(rateConfirmation.date, "MMMM dd, yyyy")}
                  </Text>
                </View>
              </View>
            )}
            <View style={commonStyles.flex1}>
              <View style={commonStyles.signatureSection}>
                <Text style={commonStyles.label}>CARRIER SIGNATURE</Text>
                <View style={commonStyles.signatureLine} />
                <Text style={[commonStyles.value, { marginTop: 6 }]}>
                  {carrier.name}
                </Text>
                <Text style={commonStyles.address}>{carrier.email}</Text>
                <Text style={commonStyles.address}>{carrier.phone}</Text>
                <Text style={[commonStyles.label, { marginTop: 8 }]}>
                  Date: _____________________
                </Text>
              </View>
            </View>
          </View>

          <View style={[commonStyles.termsBox, { marginTop: 12 }]}>
            <Text style={[commonStyles.label, { fontSize: 9 }]}>
              TERMS & CONDITIONS
            </Text>
            <Text
              style={[
                commonStyles.address,
                { marginTop: 4, fontSize: 8, lineHeight: 1.4 },
              ]}
            >
              This rate confirmation constitutes a binding agreement between the
              parties. Rates are valid for the specified shipment details only.
              Any changes to pickup/delivery dates, locations, weight, or
              dimensions may result in rate adjustments. Carrier reserves the
              right to re-weigh and re-measure shipments. Shipper agrees to
              proper packaging and accurate commodity description. Both parties
              agree to comply with all applicable federal, state, and local
              regulations.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={commonStyles.footer}>
          <View style={commonStyles.row}>
            <View style={{ flex: 2 }}>
              <Text
                style={[
                  commonStyles.footerText,
                  { fontWeight: "bold", marginBottom: 4 },
                ]}
              >
                {carrier.name}
              </Text>
              <Text style={commonStyles.footerText}>
                {carrier.address.street}, {carrier.address.city},{" "}
                {carrier.address.state} {carrier.address.zipCode}
              </Text>
              <Text style={commonStyles.footerText}>
                Phone: {carrier.phone} | Email: {carrier.email}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={[commonStyles.footerText, { fontWeight: "bold" }]}>
                Rate Confirmation #{rateConfirmation.confirmationNumber}
              </Text>
              <Text style={commonStyles.footerText}>
                Generated: {format(new Date(), "MMM dd, yyyy")}
              </Text>
              <Text
                style={commonStyles.footerText}
                render={({ pageNumber, totalPages }) =>
                  `Page ${pageNumber} of ${totalPages}`
                }
                fixed
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
