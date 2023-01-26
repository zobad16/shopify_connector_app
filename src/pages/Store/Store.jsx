import StoresTable from "../../components/StoresTable";

export function Stores() {
    return (
      <div className="mt-12 mb-8 mr-6 flex flex-col gap-12">
        <StoresTable />
        {/* <TableProjets /> */}
      </div>
    );
  }
  
  export default Stores;