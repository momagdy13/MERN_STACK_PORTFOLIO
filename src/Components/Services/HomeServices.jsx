import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import services from "../../data/ServicesData";
import IndustryItem from "../Services/IndustryItem";
import TecnologyItem from "./TecnologyItem";
import ServiceBox from "./ServicesBox";

export default function Services() {
  return (
    <div class="section" id="services">
      <div class="container rows">
        <Tabs defaultActiveKey="services">
          <Tab eventKey="services" title="Services" className="tablinks">
            <div class="container rows">
              <div class="tabcontent" id="London">
                <div class="row">
                  {services.services.map((service) => (
                    <ServiceBox {...service} />
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="technology" title="Technology" className="tablinks">
            <div class="container rows">
              <div class="tabcontent" id="London">
                <div class="row">
                  {services.Technology.map((service) => (
                    <TecnologyItem {...service} />
                  ))}
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="industry" title="industry" class="tablinks">
            <div class="container rows">
              <div class="tabcontent" id="London">
                <div class="row">
                  {services.Industry.map((industry, index) => (
                    <IndustryItem key={index} {...industry} />
                  ))}
                </div>
              </div>
            </div>{" "}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
