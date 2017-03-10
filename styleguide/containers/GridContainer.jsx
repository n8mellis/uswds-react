import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Label from '../../lib/components/Label';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import { Grid, Col } from '../../lib/components/Grid';

/**
 * Grid content
 * @returns {node} node
 */
export default function GridContainer() {
  return (
    <DocsPage title="Grid">
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import { Grid, Col } from '../../lib/components/Grid';`}
        </Highlight>
      </DocsSection>

      <DocsSection title="Props">
        <h4>Grid</h4>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>full</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>If true, removes left and right padding</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Expected to be one or more <code>Col</code>'s</TableCell>
          </TableRow>
        </Table>

        <h4>Col</h4>
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>width <Label>Required</Label></TableHeaderCell>
            <TableCell>oneOf ['1/1',
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
            '12']</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>The width of the column in faction of the whole width or in number of columns</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>children</TableHeaderCell>
            <TableCell>node</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Contents of the column</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      <DocsSection title="Usage">
        <DocsExample>
          <h4>Column width in fractions</h4>
          <DocsPreview className="preview grid-example">
            <Grid>
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
            </Grid>
            <Grid>
              <Col width="1/1">1/1</Col>
            </Grid>
            <Grid>
              <Col width="1/2">1/2</Col>
              <Col width="1/2">1/2</Col>
            </Grid>
            <Grid>
              <Col width="5/12">5/12</Col>
              <Col width="7/12">7/12</Col>
            </Grid>
            <Grid>
              <Col width="1/3">1/3</Col>
              <Col width="2/3">2/3</Col>
            </Grid>
            <Grid>
              <Col width="1/4">1/4</Col>
              <Col width="3/4">3/4</Col>
            </Grid>
            <Grid>
              <Col width="1/6">1/6</Col>
              <Col width="5/6">5/6</Col>
            </Grid>
            <Grid>
              <Col width="1/12">1/12</Col>
              <Col width="5/12">5/12</Col>
              <Col width="1/2">1/2</Col>
            </Grid>
          </DocsPreview>
          <Highlight className="html">
{`<Grid>
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
</Grid>
<Grid>
  <Col width="1/1">1/1</Col>
</Grid>
<Grid>
  <Col width="1/2">1/2</Col>
  <Col width="1/2">1/2</Col>
</Grid>
<Grid>
  <Col width="5/12">5/12</Col>
  <Col width="7/12">7/12</Col>
</Grid>
<Grid>
  <Col width="1/3">1/3</Col>
  <Col width="2/3">2/3</Col>
</Grid>
<Grid>
  <Col width="1/4">1/4</Col>
  <Col width="3/4">3/4</Col>
</Grid>
<Grid>
  <Col width="1/6">1/6</Col>
  <Col width="5/6">5/6</Col>
</Grid>
<Grid>
  <Col width="1/12">1/12</Col>
  <Col width="5/12">5/12</Col>
  <Col width="1/2">1/2</Col>
</Grid>`}
          </Highlight>
        </DocsExample>

        <DocsExample>
          <h5>Column width in number of columns</h5>
          <DocsPreview className="grid-example">
            <Grid>
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
            </Grid>
            <Grid>
              <Col width="12">12</Col>
            </Grid>
            <Grid>
              <Col width="6">6</Col>
              <Col width="6">6</Col>
            </Grid>
            <Grid>
              <Col width="5">5</Col>
              <Col width="7">7</Col>
            </Grid>
            <Grid>
              <Col width="4">4</Col>
              <Col width="8">8</Col>
            </Grid>
            <Grid>
              <Col width="3">3</Col>
              <Col width="9">9</Col>
            </Grid>
            <Grid>
              <Col width="2">2</Col>
              <Col width="10">10</Col>
            </Grid>
            <Grid>
              <Col width="1">1</Col>
              <Col width="5">5</Col>
              <Col width="6">6</Col>
            </Grid>
          </DocsPreview>
          <Highlight className="html">
{`<Grid>
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
</Grid>
<Grid>
  <Col width="12">12</Col>
</Grid>
<Grid>
  <Col width="6">6</Col>
  <Col width="6">6</Col>
</Grid>
<Grid>
  <Col width="5">5</Col>
  <Col width="7">7</Col>
</Grid>
<Grid>
  <Col width="4">4</Col>
  <Col width="8">8</Col>
</Grid>
<Grid>
  <Col width="3">3</Col>
  <Col width="9">9</Col>
</Grid>
<Grid>
  <Col width="2">2</Col>
  <Col width="10">10</Col>
</Grid>
<Grid>
  <Col width="1">1</Col>
  <Col width="5">5</Col>
  <Col width="6">6</Col>
</Grid>`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
