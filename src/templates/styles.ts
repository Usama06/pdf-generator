import { StyleSheet } from "@react-pdf/renderer";

export const commonStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 9,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  // Header styles
  pageHeader: {
    marginBottom: 25,
    paddingBottom: 15,
    borderBottom: "3 solid #1e40af",
  },
  companyLogo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
    borderBottom: "2 solid #333",
    paddingBottom: 10,
  },
  headerTopBar: {
    backgroundColor: "#1e40af",
    padding: 15,
    marginBottom: 20,
    marginLeft: -40,
    marginRight: -40,
    marginTop: -40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e40af",
  },
  subtitle: {
    fontSize: 11,
    color: "#666",
    marginBottom: 5,
  },
  documentInfo: {
    fontSize: 9,
    color: "#666",
    marginBottom: 3,
  },
  // Layout styles
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column: {
    flexDirection: "column",
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  // Info box styles
  infoBox: {
    border: "1 solid #ddd",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9fafb",
  },
  infoBoxHeader: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1e40af",
    borderBottom: "1 solid #ddd",
    paddingBottom: 4,
  },
  highlightBox: {
    backgroundColor: "#eff6ff",
    border: "2 solid #1e40af",
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
  },
  // Text styles
  label: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 8,
    color: "#374151",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 9,
    marginBottom: 5,
    color: "#1f2937",
  },
  valueImportant: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#1e40af",
  },
  // Table styles
  table: {
    marginTop: 15,
    marginBottom: 15,
    border: "1 solid #ddd",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1e40af",
    color: "white",
    padding: 10,
    fontWeight: "bold",
    fontSize: 9,
    textTransform: "uppercase",
  },
  tableSubHeader: {
    flexDirection: "row",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: 8,
    fontSize: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1 solid #e5e7eb",
    padding: 8,
    minHeight: 30,
    alignItems: "center",
  },
  tableRowAlt: {
    flexDirection: "row",
    borderBottom: "1 solid #e5e7eb",
    padding: 8,
    minHeight: 30,
    backgroundColor: "#f9fafb",
    alignItems: "center",
  },
  tableCell: {
    flex: 1,
    fontSize: 9,
  },
  tableCellSmall: {
    width: "12%",
    fontSize: 9,
  },
  tableCellMedium: {
    width: "20%",
    fontSize: 9,
  },
  tableCellLarge: {
    width: "40%",
    fontSize: 9,
  },
  tableCellXLarge: {
    width: "50%",
    fontSize: 9,
  },
  // Text alignment
  textRight: {
    textAlign: "right",
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  // Section styles
  section: {
    marginBottom: 20,
    marginTop: 10,
  },
  sectionDivider: {
    borderBottom: "2 solid #1e40af",
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e40af",
    borderBottom: "2 solid #1e40af",
    paddingBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  subsectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8,
    color: "#374151",
  },
  // Footer styles
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTop: "2 solid #1e40af",
    paddingTop: 10,
    fontSize: 7,
    color: "#6b7280",
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  footerText: {
    fontSize: 7,
    color: "#6b7280",
    marginBottom: 3,
  },
  pageNumber: {
    fontSize: 8,
    color: "#6b7280",
    textAlign: "center",
  },
  // Total section styles
  totalSection: {
    marginTop: 15,
    marginLeft: "auto",
    width: "45%",
    border: "1 solid #ddd",
    borderRadius: 4,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottom: "1 solid #e5e7eb",
  },
  totalLabel: {
    fontSize: 9,
    color: "#374151",
  },
  totalValue: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#1f2937",
  },
  grandTotal: {
    backgroundColor: "#1e40af",
    color: "white",
    padding: 12,
    fontWeight: "bold",
    borderRadius: 4,
  },
  grandTotalLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  grandTotalValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  // Address styles
  address: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#4b5563",
  },
  addressBlock: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderLeft: "3 solid #1e40af",
  },
  // Badge styles
  badge: {
    padding: "5 10",
    borderRadius: 3,
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  badgePaid: {
    backgroundColor: "#22c55e",
    color: "white",
  },
  badgeSent: {
    backgroundColor: "#3b82f6",
    color: "white",
  },
  badgePending: {
    backgroundColor: "#eab308",
    color: "#1f2937",
  },
  badgeOverdue: {
    backgroundColor: "#ef4444",
    color: "white",
  },
  badgeConfirmed: {
    backgroundColor: "#22c55e",
    color: "white",
  },
  badgeDraft: {
    backgroundColor: "#9ca3af",
    color: "white",
  },
  // Watermark and stamps
  watermark: {
    position: "absolute",
    top: 200,
    left: 100,
    fontSize: 80,
    color: "#f3f4f6",
    opacity: 0.3,
    transform: "rotate(-45deg)",
    fontWeight: "bold",
  },
  confidentialStamp: {
    border: "2 solid #ef4444",
    padding: "5 10",
    fontSize: 8,
    color: "#ef4444",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  // Signature section
  signatureSection: {
    marginTop: 30,
    borderTop: "1 solid #ddd",
    paddingTop: 20,
  },
  signatureLine: {
    borderTop: "1 solid #333",
    marginTop: 40,
    paddingTop: 5,
    width: "60%",
  },
  signatureLabel: {
    fontSize: 8,
    color: "#6b7280",
    textTransform: "uppercase",
  },
  // Notes and terms
  notesBox: {
    backgroundColor: "#fef3c7",
    border: "1 solid #f59e0b",
    borderRadius: 4,
    padding: 12,
    marginTop: 15,
    marginBottom: 15,
  },
  notesTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#92400e",
    marginBottom: 6,
  },
  notesText: {
    fontSize: 8,
    color: "#78350f",
    lineHeight: 1.5,
  },
  termsBox: {
    backgroundColor: "#f0f9ff",
    border: "1 solid #0284c7",
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
  },
  termsTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#075985",
    marginBottom: 6,
  },
  termsList: {
    fontSize: 8,
    color: "#0c4a6e",
    lineHeight: 1.6,
    marginLeft: 10,
  },
});
