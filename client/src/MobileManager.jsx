import React from "react";
import MobileDataTable from './components/MobileDataTable'
function MobileManager({data}) {
  return <div className="grey box p-3">
      <MobileDataTable data={data}/>
  </div>;
}

export default MobileManager;
