import NewUsersTable from "../../components/NewUsersTable";
import ProductsTable from "../../components/ProductsTable";
import TableProjets from "../../components/TableProjets";

export function Products() {
  return (
    <div className="mt-12 mb-8 mr-6 flex flex-col gap-12">
      <ProductsTable />
      {/* <TableProjets /> */}
    </div>
  );
}

export default Products;