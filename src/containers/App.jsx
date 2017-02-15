import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import OfficialSiteBanner from "../components/OfficialSiteBanner";
import SearchField from "../components/fields/SearchField";

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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
