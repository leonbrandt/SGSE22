import React, { Component, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Slide } from 'react-slideshow-image';
import { ApplicationPaths } from './Constants';
import authService from './api-authorization/AuthorizeService';
//import 'react-slideshow-image/dist/styles.css';

export class Home extends Component
{
  static displayName = Home.name;

  constructor(props)
  {
    super(props);

    this.state = {
      isAuthenticated: false,
      userName: null,
      role: null
    };
  }

  componentDidMount()
  {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount()
  {
    authService.unsubscribe(this._subscription);
  }

  async populateState()
  {
    const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
    this.setState({
      isAuthenticated,
      userName: user && user.name,
      role: user && user.role
    });
  }

  render()
  {
    return (
      <div>

        <>
          <div style={{ display: "flex", padding: "0px" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ display: "flex", boxShadow: "1px 3px 1px #dcdcdc" }}
                  src="https://www.schueco.com/resource/responsive-image/1902046/m01-stage/xxl/1/inspiration-meineschiebetuer-spring-img.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                {<Carousel.Caption style={{ display: "flex", background: "rgba(0, 0, 0, .5)", width: "300px", margin: "auto", fontFamily: "univers-light,sans-serif", padding: "0px 0px", marginBottom: "15px" }}>
                  <img
                    style={{ width: "40%" }}
                    src="https://www.schueco.com/resource/responsive-image/1902046/m01-stage/xxl/1/inspiration-meineschiebetuer-spring-img.jpg"
                    className="d-block"
                    alt="..."
                  />
                  <p style={{ margin: "auto" }}>
                    Design Schiebetüren
                  </p>
                </Carousel.Caption>}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ display: "flex", boxShadow: "1px 3px 1px #dcdcdc" }}
                  src="https://www.schueco.com/resource/responsive-image/2708800/m01-stage/xxl/1/3784a08.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                {<Carousel.Caption style={{ display: "flex", background: "rgba(0, 0, 0, .5)", width: "300px", margin: "auto", fontFamily: "univers-light,sans-serif", padding: "0px 0px", marginBottom: "15px" }}>
                  <img
                    style={{ width: "40%" }}
                    src="https://www.schueco.com/resource/responsive-image/2708800/m01-stage/xxl/1/3784a08.jpg"
                    className="d-block"
                    alt="..."
                  />
                  <p style={{ margin: "auto" }}>
                    Villa Molde
                  </p>
                </Carousel.Caption>}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ display: "flex", boxShadow: "1px 3px 1px #dcdcdc" }}
                  src="https://www.schueco.com/resource/responsive-image/2486642/m01-stage/xxl/3/home-owner-stage-lueftung-neu-image.png"
                  className="d-block w-100"
                  alt="..."
                />
                {<Carousel.Caption style={{ display: "flex", background: "rgba(0, 0, 0, .5)", width: "300px", margin: "auto", fontFamily: "univers-light,sans-serif", padding: "0px 0px", marginBottom: "15px" }}>
                  <img
                    style={{ width: "40%" }}
                    src="https://www.schueco.com/resource/responsive-image/2486642/m01-stage/xxl/3/home-owner-stage-lueftung-neu-image.png"
                    className="d-block"
                    alt="..."
                  />
                  <p style={{ margin: "auto" }}>
                    Lüftungslösungen von Schüco
                  </p>
                </Carousel.Caption>}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ display: "flex", boxShadow: "1px 3px 1px #dcdcdc" }}
                  src="https://www.schueco.com/resource/responsive-image/2501516/m01-stage/xxl/2/bild1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                {<Carousel.Caption style={{ display: "flex", background: "rgba(0, 0, 0, .5)", width: "300px", margin: "auto", fontFamily: "univers-light,sans-serif", padding: "0px 0px", marginBottom: "15px" }}>
                  <img
                    style={{ width: "40%" }}
                    src="https://www.schueco.com/resource/responsive-image/2501516/m01-stage/xxl/2/bild1.jpg"
                    className="d-block"
                    alt="..."
                  />
                  <p style={{ margin: "auto" }}>
                    Rücker eines Neutra-Klassikers
                  </p>
                </Carousel.Caption>}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ display: "flex", boxShadow: "1px 3px 1px #dcdcdc" }}
                  src="https://www.schueco.com/resource/responsive-image/2564800/m01-stage/xxl/2/zds-aws-75-pd-si-m.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                {<Carousel.Caption style={{ display: "flex", background: "rgba(0, 0, 0, .5)", width: "300px", margin: "auto", fontFamily: "univers-light,sans-serif", padding: "0px 0px", marginBottom: "15px" }}>
                  <img
                    style={{ width: "40%" }}
                    src="https://www.schueco.com/resource/responsive-image/2564800/m01-stage/xxl/2/zds-aws-75-pd-si-m.jpg"
                    className="d-block"
                    alt="..."
                  />
                  <p style={{ margin: "auto" }}>
                    Sonnenschutzlösungen von Schüco
                  </p>
                </Carousel.Caption>}
              </Carousel.Item>
            </Carousel>
          </div>
        </>

        {/*<div>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(https://www.schueco.com/resource/responsive-image/1902046/m01-stage/xxl/1/inspiration-meineschiebetuer-spring-img.jpg)` }}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(https://www.schueco.com/resource/responsive-image/2708800/m01-stage/xxl/1/3784a08.jpg)` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(https://www.schueco.com/resource/responsive-image/2486642/m01-stage/xxl/3/home-owner-stage-lueftung-neu-image.png)` }}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
    </div>*/}

        {/*<p>Welcome to the SchüCal Economy website, a cloud native virtual economy system.</p>
        <p>To get started, yout can:</p>
        <ul>
          <li>Visit the <Link to={ApplicationPaths.StorePath}>Store</Link></li>
          <li>Check your <Link to={ApplicationPaths.InventoryPath}>Inventory</Link></li>
          {this.adminView()}
  </ul>*/}

        <div className="flex-row flex-wrap flex-gap">
          <p style={{ width: "200px", fontFamily: "univers-light,sans-serif" }}>
            Zuhause – Ein Ort, an dem jemand zu Hause ist und sich wohlfühlt.
          </p>
          <p className="flex-column" style={{ display: "flex", width: "800px", padding: "40px 40px 40px 40px", fontFamily: "univers-light,sans-serif" }}>
            Nichts ist für das Wohlbefinden so wichtig wie das Gefühl, gerne nach Hause zu kommen. Hier lassen wir den Alltag hinter uns, schmieden neue Pläne und genießen Zeit mit unseren Liebsten. Um aus einem Haus Ihr ganz persönliches Traumzuhause zu machen, steht die Realisierung Ihrer individuellen Vorstellungen im Mittelpunkt. Das gilt für den Neubau ebenso wie für eine Renovierung oder Sanierung.

            Mit Fenstern und Türen von Schüco erleben Sie Gestaltungsfreiheit bis ins letzte Detail. Ob in Aluminium, Kunststoff oder Stahl – wir setzen auf Qualität, Innovation und Langlebigkeit. Durch ein breites Netzwerk aus Partnern sind unsere Produkte in mehr als 80 Ländern verfügbar und erfüllen höchste Ansprüche in Bezug auf Komfort, Design, Sicherheit und Nachhaltigkeit.

            Weil Ihr Zuhause alles ist.
          </p>
        </div>

        <div className="flex-row flex-wrap flex-gap">
          <p>You can also</p>
        </div>
        <div className="flex-row flex-wrap flex-gap">


          <ul style={{ padding: "0px 40px 100px 40px" }}>
            <li>Manage the <a href={window.RABBITMQ_URL} target="_blank" rel="noreferrer">message queues</a></li>
            <li>Explore the Open API documentation:
              <ul>
                <li><a href={`${window.CATALOG_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Catalog service</a></li>
                <li><a href={`${window.INVENTORY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Inventory service</a></li>
                <li><a href={`${window.IDENTITY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Identity service</a></li>
                <li><a href={`${window.TRADING_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Trading service</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    );
  }

  adminView()
  {
    if (this.state.isAuthenticated && this.state.role === "Admin")
    {
      return (<Fragment>
        <li>Manage the <Link to={ApplicationPaths.CatalogPath}>Catalog</Link></li>
        <li>Manage registered <Link to={ApplicationPaths.UsersPath}>Users</Link></li>
      </Fragment>);
    }
  }
}
