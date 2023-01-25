import OrdersTable from "../../components/OrdersTable";


export function Orders() {
  return (
    <div className="mt-12 mb-8 mr-6 flex flex-col gap-12">
      <OrdersTable />
      {/* <TableProjets /> */}
    </div>
  );
}

export default Orders;