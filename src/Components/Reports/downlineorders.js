import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeaderscreen from '../homeheader';
import ReportLeftmenuscreen from '../reportleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';

class DownlineOrdersScreen extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <HomeHeaderscreen />
        </div>
        <div className="container-fluid page_container">
          <div className="content">
            <div>
              <div className="col-sm-12">
                <h2 className="h2hdr">Downline's Orders</h2>
                <div className="row">
                  <div className="col-md-2">
                    <ReportLeftmenuscreen />
                  </div>
                  <div className="col-md-10">
                    <div className="gridlpdng">
                      <div className="panel panel-default panelmb50">
                        <div>
                          <table className="table table-bordered tablemrb">
                            <thead>
                              <tr className="tdbg">
                                <th scope="col"></th>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Level</th>
                                <th scope="col">Order</th>
                                <th scope="col">Total</th>
                                <th scope="col">PV</th>
                                <th scope="col">Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="tdbg">
                                <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                                <td>17050</td>
                                <td className="textalignr">Lindzi</td>
                                <td className="textalignr">Fitzwater</td>
                                <td className="textalignr">1</td>
                                <td className="textalignr">879219</td>
                                <td className="textalignr">$95.32 USD</td>
                                <td className="textalignr">79.72 PV</td>
                                <td className="textalignr">1/9/2020</td>
                              </tr>
                              <tr>
                                <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                                <td>19893</td>
                                <td className="textalignr">McKenzie</td>
                                <td className="textalignr">Mitchell</td>
                                <td className="textalignr">3</td>
                                <td className="textalignr">878488</td>
                                <td className="textalignr">$84.43 USD</td>
                                <td className="textalignr">66.22 PV</td>
                                <td className="textalignr">1/9/2020</td>
                              </tr>
                              <tr className="tdbg">
                                <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                                <td>17050</td>
                                <td className="textalignr">Lindzi</td>
                                <td className="textalignr">Fitzwater</td>
                                <td className="textalignr">1</td>
                                <td className="textalignr">879219</td>
                                <td className="textalignr">$95.32 USD</td>
                                <td className="textalignr">79.72 PV</td>
                                <td className="textalignr">1/9/2020</td>
                              </tr>
                              <tr>
                                <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                                <td>19893</td>
                                <td className="textalignr">McKenzie</td>
                                <td className="textalignr">Mitchell</td>
                                <td className="textalignr">3</td>
                                <td className="textalignr">878488</td>
                                <td className="textalignr">$84.43 USD</td>
                                <td className="textalignr">66.22 PV</td>
                                <td className="textalignr">1/9/2020</td>
                              </tr>
                              <tr className="tdbg">
                                <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                                <td>17050</td>
                                <td className="textalignr">Lindzi</td>
                                <td className="textalignr">Fitzwater</td>
                                <td className="textalignr">1</td>
                                <td className="textalignr">879219</td>
                                <td className="textalignr">$95.32 USD</td>
                                <td className="textalignr">79.72 PV</td>
                                <td className="textalignr">1/9/2020</td>
                              </tr>
                              <tr>
                                <td><Link to="/"><i className="far fa-address-book"></i></Link></td>
                                <td>19893</td>
                                <td className="textalignr">McKenzie</td>
                                <td className="textalignr">Mitchell</td>
                                <td className="textalignr">3</td>
                                <td className="textalignr">878488</td>
                                <td className="textalignr">$84.43 USD</td>
                                <td className="textalignr">66.22 PV</td>
                                <td className="textalignr">1/9/2020</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="row">
                            <div className="col-sm-9">
                              <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                  <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                      <span aria-hidden="true">&laquo;</span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                      <span aria-hidden="true">&raquo;</span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div className="col-sm-3 paddingt10">
                              <span className="k-pager-info k-label">1 - 23 of 23 items</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <PageFooter />
          </div>
        </div>

      </div>
    )
  }
}

export default DownlineOrdersScreen;
