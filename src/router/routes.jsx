import LoginPage from "../layouts/authLayout";
import DashboardLayout from "../layouts/dashboardLayout";
import { SalesRepOverview, TransactionHistory } from "../pages/dashboard";
import { InitiateTransaction } from "../pages/dashboard/initiateTransaction";
import { EditTransaction } from "../pages/dashboard/transactionHistory/edit";
import { CustomersHistory } from "../pages/dashboard/customers";
import { TransactionDetailsOverview } from "../pages/dashboard/transactionHistory/transaction-detail";
import { CustomerDetailsOverview } from "../pages/dashboard/customers/customers-detail";
import { CustomerRecord } from "../pages/dashboard/customers/components/customer-history/transcation-history";
import { RefundRecord } from "../pages/dashboard/customers/components/customer-history/refund-history";
import { UpfrontRecord } from "../pages/dashboard/customers/components/customer-history/upfront-history";
import CustomerTransactionOverview from "../pages/dashboard/customers/customers-detail/transaction";


const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

const dashboardRoutes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        element: <SalesRepOverview />,
        index: true,
        path: "dashboard",
      },
      {
        element: <TransactionHistory />,
        path: "transactions",
      },
      {
        element: <TransactionDetailsOverview />,
        path: "transactions/:id",
      },
      {
        element: <EditTransaction />,
        path: "transactions/:id/edit",
      },
      {
        element: <CustomersHistory />,
        index: true,
        path: "customers",
      },
      {
        // CustomerDetailsOverview as the parent route
        element: <CustomerDetailsOverview />,
        path: "customers/customers-detail",
        children: [
          {
            // Child route under CustomerDetailsOverview
            element: <CustomerRecord />,
            path: "",
          },
          {
            element: <RefundRecord />,
            path: "refund",
          },
          {
            element: <UpfrontRecord />,
            path: "upfront",
          },
        ],
      },
      {
        element: <CustomerTransactionOverview />,
        path: "/customers/customers-detail/transaction-details",
      },
      {
        element: <InitiateTransaction />,
        index: true,
        path: "initiate-transaction",
      },
    ],
  },
];

export { authRoutes, dashboardRoutes };
