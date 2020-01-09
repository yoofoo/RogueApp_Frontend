import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';

class CommissionsScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Commissions</h2>
                <div className="row">
                  <div className="col-sm-3">

                    <nav className="view-navigation">
                      <div className="panel-group">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/commissions" className="active">
                                Commissions
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/rank" className="">
                                Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/volumes" className="">
                                Volumes
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="well well-sm">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                            </span>
                            <select id="periodchoice" className="form-control">
                              <option value="/commissions/0/37">Current Commissions - Monthly 37 January 2020 (1/1/2020 - 1/31/2020)</option>
                              <option value="/commissions/0/36">Current Commissions - Monthly 36 December 2019 (12/1/2019 - 12/31/2019)</option>
                              <option value="/commissions/520">Current Commissions - Monthly 35 November 2019 (11/1/2019 - 11/30/2019)</option>
                              <option value="/commissions/503">Current Commissions - Monthly 34 October 2019 (10/1/2019 - 10/31/2019)</option>
                              <option value="/commissions/481">Current Commissions - Monthly 33 September 2019 (9/1/2019 - 9/30/2019)</option>
                            </select>
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">

                      <div className="panel-body">
                        <h4>Monthly 37 January 2020 Commissions</h4>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="metric metric-sm">
                              <dl className="dl-metric">
                                <dt><strong>Team Commissions</strong></dt>
                                <dd>$0.00&nbsp;USD</dd>
                                <dt><strong>USD Deferred Commissions</strong></dt>
                                <dd>$5.00&nbsp;USD</dd>
                                <dt><strong>CAD Deferred Commissions</strong></dt>
                                <dd>$53.36&nbsp;CAD</dd>
                                <dt><strong>Savvy Seller Bonus Total</strong></dt>
                                <dd>&nbsp;</dd>
                              </dl>
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="row">
                              <div className="col-sm-6">
                                <dl className="dl-metric">
                                  <dt>PV</dt>
                                  <dd>107.92</dd>
                                  <dt>TV</dt>
                                  <dd>2,521.71</dd>
                                  <dt>EV</dt>
                                  <dd>3,786.12</dd>
                                </dl>
                              </div>
                              <div className="col-sm-6">
                                <dl className="dl-metric">
                                  <dt>PSQ</dt>
                                  <dd>3</dd>
                                  <dt>Level 1 Mentors</dt>
                                  <dd>0</dd>
                                  <dt>Master Mentor Legs</dt>
                                  <dd>0</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 h20">
                            <div className="metric metric-sm">
                              <div className="metric-title">
                                Qualifying as: <strong>Qualified Designer</strong>
                              </div>
                            </div>
                          </div>
                          <div className="teamh">
                            <div className="metric metric-sm">
                              <div className="metric-title">*Team Commissions are displayed in USD</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>

                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr className="tdbg">
                              <th scope="col">From ID#</th>
                              <th scope="col">From</th>
                              <th scope="col">Paid Level</th>
                              <th scope="col">Source</th>
                              <th scope="col">%</th>
                              <th scope="col">Earned</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th colSpan="6">Bonus: Deferred Commission</th>
                            </tr>
                            <tr className="tdbg">
                              <td>872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr>
                              <td>872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr className="tdbg">
                              <td>872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr>
                              <td>872805</td>
                              <td>Lainey Miller</td>
                              <td>1</td>
                              <td className="textalignr">$19.99 USD</td>
                              <td className="textalignr">25%	</td>
                              <td className="textalignr">$5.00 USD</td>
                            </tr>
                            <tr>
                              <td colSpan="5"></td>
                              <td><div className="totalb">Total: $53.36&nbsp;CAD<br></br> $5.00&nbsp;USD</div></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                    </div>


                  </div>
                </div>

              </div>
            </div>
          </div>
          <PageFooter />
        </div>

      </div>
    )
  }
}

export default CommissionsScreen;
