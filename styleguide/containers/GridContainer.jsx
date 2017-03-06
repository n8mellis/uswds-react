import React from "react";
import { Row, Col } from '../../lib/components/Grid';
import BaseContainer from "./BaseContainer";

/**
 * Grid content
 */
export default class GridContainer extends React.Component
{
  /**
   * Renders the node
   * @returns {node} the rendered DOM node
   */
  render() {
    return (
      <BaseContainer {...this.props}>
        <h2 className="usa-heading">Grid expressed in fractions</h2>
        <div className="preview preview-no_border grid-example grid-example-blank grid-text">
          <Row>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
            <Col width="1/12">1/12</Col>
          </Row>
          <Row>
            <Col width="1/1">1/1</Col>
          </Row>
          <Row>
            <Col width="1/2">1/2</Col>
            <Col width="1/2">1/2</Col>
          </Row>
          <Row>
            <Col width="5/12">5/12</Col>
            <Col width="7/12">7/12</Col>
          </Row>
          <Row>
            <Col width="1/3">1/3</Col>
            <Col width="2/3">2/3</Col>
          </Row>
          <Row>
            <Col width="1/4">1/4</Col>
            <Col width="3/4">3/4</Col>
          </Row>
          <Row>
            <Col width="1/6">1/6</Col>
            <Col width="5/6">5/6</Col>
          </Row>
          <Row>
            <Col width="1/12">1/12</Col>
            <Col width="5/12">5/12</Col>
            <Col width="1/2">1/2</Col>
          </Row>
        </div>
        <h2 className="usa-heading">Grid expressed in columns</h2>
        <div className="preview preview-no_border grid-example grid-example-blank grid-text">
          <Row>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
            <Col width="1">1</Col>
          </Row>
          <Row>
            <Col width="12">12</Col>
          </Row>
          <Row>
            <Col width="6">6</Col>
            <Col width="6">6</Col>
          </Row>
          <Row>
            <Col width="5">5</Col>
            <Col width="7">7</Col>
          </Row>
          <Row>
            <Col width="4">4</Col>
            <Col width="8">8</Col>
          </Row>
          <Row>
            <Col width="3">3</Col>
            <Col width="9">9</Col>
          </Row>
          <Row>
            <Col width="2">2</Col>
            <Col width="10">10</Col>
          </Row>
          <Row>
            <Col width="1">1</Col>
            <Col width="5">5</Col>
            <Col width="6">6</Col>
          </Row>
        </div>
        
        <div>
          <h5>Example usage</h5>
          <pre><code>
            {`import { Row, Col } from 'pathto../lib/Grid'

<Row>
  <Col width="1/2">Half of twelve columns ...</Col>
  <Col width="6">... is the same as 6 columns</Col>
</Row>`}
          </code></pre>
          
          <h4>Row</h4>
          <h5>Optional props</h5>
          <ul>
            <li>
              <code>full</code> <em>bool, defaults to false</em> — If true, removes the container's left and right padding.
            </li>
          </ul>
          
          <h4>Col</h4>
          <h5>Required props</h5>
          <ul>
            <li><code>width</code> <em>string</em> — the fraction of the container width or the number of columns desired (out of 12). Must be one of '1/1',
            '1/2',
            '1/3',
            '2/3',
            '1/4',
            '3/4',
            '1/6',
            '5/6',
            '1/12',
            '5/12',
            '7/12',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '12'</li>
          </ul>
        </div>
      </BaseContainer>
    );
  }
}

GridContainer.defaultProps = {
  title: "Grids",
  summary: "This 12-column, responsive grid provides structure for website content."
};
