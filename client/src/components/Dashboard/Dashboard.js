import React, { Component } from "react";
import { CardGroup, Col, Row } from "reactstrap";
import Widget01 from "../Widgets/Widget01";
import { Bar, Doughnut, Line, Pie, Polar, Radar } from "react-chartjs-2";
import { Card, CardBody, CardColumns, CardHeader } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: null,
      category1Label: null,
      category2Label: null,
      category3Label: null,
      incidentORRequestLabel: null,
      category1Count: null,
      category2Count: null,
      category3Count: null,
      incidentORRequestCount: null
    };
  }

  componentDidMount() {
    let labelCategory1 = [];
    let dataCategory1 = [];

    let labelCategory2 = [];
    let dataCategory2 = [];

    let labelCategory3 = [];
    let dataCategory3 = [];

    let labelCategory4 = [];
    let dataCategory4 = [];
    axios.get("http://localhost:7000/count/getAllCount").then(res => {
      this.setState({ totalCount: res.data.data.totalCount });
    });
    axios.get("http://localhost:7000/count/getCategory1Count").then(res => {
      res.data.data.category1.map((ele, index) => {
        labelCategory1.push(ele._id);
        dataCategory1.push(ele.count);
      });
      this.setState({ category1Label: labelCategory1 });
      this.setState({ category1Count: dataCategory1 });
    });
    axios.get("http://localhost:7000/count/getCategory2Count").then(res => {
      res.data.data.category2.map((ele, index) => {
        labelCategory2.push(ele._id);
        dataCategory2.push(ele.count);
      });
      this.setState({ category2Label: labelCategory2 });
      this.setState({ category2Count: dataCategory2 });
    });
    axios.get("http://localhost:7000/count/getCategory3Count").then(res => {
      res.data.data.category3.map((ele, index) => {
        labelCategory3.push(ele._id);
        dataCategory3.push(ele.count);
      });
      this.setState({ category3Label: labelCategory3 });
      this.setState({ category3Count: dataCategory3 });
    });
    axios
      .get("http://localhost:7000/count/getIncidentRequestCount")
      .then(res => {
        res.data.data.incidentORRequest.map((ele, index) => {
          labelCategory4.push(ele._id);
          dataCategory4.push(ele.count);
        });
        this.setState({ incidentORRequestLabel: labelCategory4 });
        this.setState({ incidentORRequestCount: dataCategory4 });
      });
  }

  render() {
    const bar1 = {
      labels: this.state.category1Label,
      datasets: [
        {
          label: "Category 1",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.category1Count
        }
      ]
    };
    const bar2 = {
      labels: this.state.category2Label,
      datasets: [
        {
          label: "Category 2",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.category2Count
        }
      ]
    };
    const bar3 = {
      labels: this.state.category3Label,
      datasets: [
        {
          label: "Category 3",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.category3Count
        }
      ]
    };
    const bar4 = {
      labels: this.state.incidentORRequestLabel,
      datasets: [
        {
          label: "Category 4",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.incidentORRequestCount
        }
      ]
    };
    const options = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false
    };
    return (
      <div>
        <div>
          <Row>
            <Col xs="12" sm="6" lg="3">
              <Widget01
                color="primary"
                variant="inverse"
                header={this.state.totalCount}
                mainText={"Total Records"}
              />
            </Col>
           
          </Row>
        </div>
        <div className="animated fadeIn">
          <CardColumns className="cols-2">
            <Card>
              <CardHeader>
                Bar Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar1} options={options} />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                Bar Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar2} options={options} />
                </div>
              </CardBody>
            </Card>
           
            <Card>
              <CardHeader>
                Bar Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar4} options={options} />
                </div>
              </CardBody>
            </Card>
          </CardColumns>
        </div>
        <div>
        <Card >
              <CardHeader>
                Bar Chart
                <div className="card-header-actions">
                  <a
                    href="http://www.chartjs.org"
                    className="card-header-action"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar3} options={options} />
                </div>
              </CardBody>
            </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
