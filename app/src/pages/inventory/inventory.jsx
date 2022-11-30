import React from "react";

//import SubItem from "Components/subitem/subitem";
//import AddButton from "../../redux/components/button/AddButton";
//import DeleteButton from "../../redux/components/button/DeleteButton";
//import InventoryTable from "../../redux/components/table/table";
//import SortBy from "../../redux/components/sortBy/dropdown";

import "./style.css";

class inventory extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      query: "",
    };
  }
  
  render() {
    return (
        <div className="inventory">
            <div className="action-bar">
                <ul id="nav-list-left">
                    <li className="btn">
                  {/*      <AddButton></AddButton> */}
                    </li>
                    <li>
                    {/*   <DeleteButton></DeleteButton> */}
                    </li>
                    </ul>
            </div>
         {/*   <InventoryTable ></InventoryTable> */}
        </div>
    );
  }
}

export default inventory;