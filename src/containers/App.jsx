import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import OfficialSiteBanner from "../components/OfficialSiteBanner";
import SearchField from "../components/fields/SearchField";
import { Accordion, AccordionItem } from "../components/Accordion";

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          defaultTitle="react-test"
          titleTemplate="%s - asdf"
          meta={[
            {"name": "description", "content": "A boilerplate doing universal/isomorphic rendering with Redux + React-router + Express"},
          ]}
          htmlAttributes={{"lang": "en"}}
        />
        <OfficialSiteBanner />
        <h1>This is a test</h1>
        <div className="usa-grid">
          <div className="usa-width-one-half">
            <SearchField size={SearchField.SIZE_BIG} />
            {/* <SearchField /> */}
            <SearchField size={SearchField.SIZE_MEDIUM} />
            <SearchField size={SearchField.SIZE_SMALL} />
          </div>
        </div>
        
        <hr />
        
        <div className="usa-grid">
          <Accordion type={Accordion.TYPE_BORDERED}>
            <AccordionItem title="First Amendment">
              <p>
                Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
              </p>
            </AccordionItem>
            <AccordionItem title="Second Amendment">
              <p>
                A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
              </p>
            </AccordionItem>
            <AccordionItem>
              <span>Third Amendment</span>
              <p>
                No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
