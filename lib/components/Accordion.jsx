import React from "react";

import utilities from "../helpers/utilities";

export class Accordion extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  
  setActiveItem(index)
  {
    this.setState({ activeIndex: index });
  }
  
  render()
  {
    var index = 0;
    let children = React.Children.map(this.props.children, (child) => {
      let i = index++;
      return React.cloneElement(child, { 
        accordionIndex: i, 
        action: this.setActiveItem.bind(this),
        contentVisible: (i == this.state.activeIndex)
      });
    });
    return (
      <ul className={this.props.type}>
        {children}
      </ul>
    );
  }
}

Accordion.TYPE_BORDERLESS = "usa-accordion";
Accordion.TYPE_BORDERED   = "usa-accordion-bordered";

Accordion.propTypes = {
  type: React.PropTypes.oneOf([ Accordion.TYPE_BORDERLESS, Accordion.TYPE_BORDERED ]),
  children: React.PropTypes.node
};

Accordion.defaultProps = {
  type: Accordion.TYPE_BORDERLESS
};

// =============================================================================

/**
 * 
 *
 * Usage:
 *
 *   <AccordionItem title="First Amendment">
 *     <p>Congress shall make no law respecting an establishment of ...</p>
 *   </AccordionItem>
 *
 *   <AccordionItem>
 *     <span>First Amendment</span>
 *     <p>Congress shall make no law respecting an establishment of ...</p>
 *   </AccordionItem>
 */
export class AccordionItem extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      uuid: ""
    };
  }
  
  componentDidMount()
  {
    let id = utilities.uniqueIdForComponent(this);
    this.setState({ uuid: id });
  }
  
  makeActive()
  {
    this.props.action(this.props.accordionIndex);
  }
  
  renderTitleElement()
  {
    let element;
    if (this.props.title.length > 0) {
      element = (<span>{this.props.title}</span>);
    }
    else {
      if (React.Children.count(this.props.children) !== 2) {
        throw "Either a title or 2 child elements must be supplied.";
      }
      let children = React.Children.toArray(this.props.children);
      element = children[0];
    }
    return (
      <button className="usa-accordion-button" 
              aria-expanded={this.props.contentVisible}
              aria-controls={`${this.state.uuid}-content`}
              onClick={this.makeActive.bind(this)}>
        {element}
      </button>
    );
  }
  
  renderContentElement()
  {
    // If `this.state.contentVisible` is set to false then don't render the 
    // content element.
    if (!this.props.contentVisible) {
      return "";
    }
    let children = React.Children.toArray(this.props.children);
    let element = (children.length == 2) ? children[1] : children[0];
    return (
      <div id={`${this.state.uuid}-content`} className="usa-accordion-content">
        {element}
      </div>
    );
  }
  
  render()
  {
    // Ensure there are only 2 children.
    if (React.Children.count(this.props.children) > 2) {
      throw "AccordionItem elements must have no more than 2 children.";
    }
    
    return (
      <li className="usa-accordion-item">
        {this.renderTitleElement()}
        {this.renderContentElement()}
      </li>
    );
  }
}

AccordionItem.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.node,
  accordionIndex: React.PropTypes.number,
  contentVisible: React.PropTypes.boolean,
  action: React.PropTypes.function
};

AccordionItem.defaultProps = {
  title: ""
};
