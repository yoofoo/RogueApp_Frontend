import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import PageFooter from '../footer';
import '../../styles/styles.css';
const axios = require('axios');

class VolumesScreen extends Component {
  state = {
    volumeData: []
  }
  componentDidMount() {
    // Send a POST request
    this.loadVolumeData();
  }
  loadVolumeData = () => {
    axios({
      method: 'post',
      url: 'http://localhost:6002/rogue/commission/volumes/postVolumes',
      data: {
        CustomerID: 14113,
        periodTypeId: 1
      }
    }).then(async (response) => {
      console.log(response.data.Items);
      const dt = await response.data.Items
      this.setState({ volumeData: dt });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log('---load-', this.state.volumeData)
    const { volumeData } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row content">
            <div className="container">
              <div className="col-sm-12">
                <h2 className="h2hdr">Volumes</h2>
                <div className="row">
                  <div className="col-sm-3">

                    <nav className="view-navigation">
                      <div className="panel-group">
                        <div className="panel panel-default no-border">
                          <div className="panel-heading">
                            <div className="panel-title">
                              <a href="/#/commissions">
                                Commissions
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading ">
                            <div className="panel-title">
                              <a href="/#/rank">
                                Rank Advancement
                                </a>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default no-border">
                          <div className="panel-heading active">
                            <div className="panel-title">
                              <a href="/#/volumes" className="active">
                                Volumes
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-9">
                    <div className="panel panel-default panelmb50">

                      <div>
                        <table className="table table-bordered tablemrb">
                          <thead>
                            <tr>
                              <th colSpan="6" className="textalignr tdbg">
                                <button type="button" class="k-grid-excel btn btn-primary hidden-print"><i class="fa fa-download"></i> Excel</button>
                              </th>
                            </tr>
                            <tr className="tdbg">
                              <th scope="col">Period</th>
                              <th scope="col">Paid as Title</th>
                              <th scope="col">PV</th>
                              <th scope="col">TV</th>
                              <th scope="col">Level 1 Mentor</th>
                              <th scope="col">PSQ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {volumeData.map((dt, i) => {
                              return (<tr className="tdbg" key={i} >
                                <td>{dt.PeriodDescription}</td>
                                <td>{dt.PaidRankDescription}</td>
                                <td>{dt.PV}</td>
                                <td className="textalignr">{dt.TV}</td>
                                <td className="textalignr">{dt.L1M}	</td>
                                <td className="textalignr">{dt.PSQ}</td>
                              </tr>)

                            })}

                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-9">
                            <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div className="col-sm-3 paddingt10">
                            <span class="k-pager-info k-label">1 - 23 of 23 items</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageFooter />
        </div>

      </div >
    )
  }
}

export default VolumesScreen;