import { connect } from "react-redux";
import React, { useState } from "react";

const ReactionsGrid = props => {
  const [showTable, setShowTable] = useState("no");
  const [orderBy, setOrderBy] = useState("observationDate");
  const [order, setOrder] = useState("desc");

  const onHeaderClick = e => {
    if (e !== showTable) {
      setShowTable(e);
    } else {
      setShowTable("no");
    }
  };
  const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  const getSorting = (order, orderBy) => {
    let result =
      order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
    return result;
  };

  const createSortHandler = property => {
    let locOrder = order === "asc" && orderBy === property ? "desc" : "asc";
    setOrder(locOrder);
    setOrderBy(property);
  };

  return props.reactions.length > 0 ? (
    <div>
      <ul className="reactions-list">
        {props.reactions
          .filter((e, i) => props.reactions.findIndex(a => a.id === e.id) === i)
          .map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <div
                    className="collapse"
                    onClick={() => onHeaderClick(item.description)}
                  >
                    <p>
                      {showTable === item.description ? "-   " : "+    "}
                      {item.description.toUpperCase()}
                    </p>
                  </div>
                  {showTable === item.description ? (
                    <table className="reactions-table" >
                      <thead>
                        <tr className="headRow">
                          <th
                            onClick={() => createSortHandler("observationDate")}
                          >
                            <div className="head">
                              <p className="paddding-right"> Date </p>
                              {orderBy === "observationDate" ? (
                                <div className={order}></div>
                              ) : (
                                <div className="desc" />
                              )}
                            </div>
                          </th>
                          <th onClick={() => createSortHandler("severity")}>
                            <div className="head">
                              <p className="paddding-right"> Priority </p>
                              {orderBy === "severity" ? (
                                <div className={order}></div>
                              ) : (
                                <div className="desc" />
                              )}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {stableSort(
                          props.reactions.filter(x => x.id == item.id),
                          getSorting(order, orderBy)
                        ).map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.observationDate}</td>
                              <td>{item.severity}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : null}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  reactions: state.reactions
});

export default connect(mapStateToProps)(ReactionsGrid);
