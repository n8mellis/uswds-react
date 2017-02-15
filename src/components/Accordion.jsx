import React from "react";

export default class Accordion extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      contentVisible: false
    };
  }
  
  toggle()
  {
    this.setState({ contentVisible: !this.state.contentVisible });
  }
  
  render()
  {
    // Ensure there are only 2 children.
    if (React.Children.count(this.props.children) != 2) {
      throw "Accordion elements must have exactly 2 children."
    }
    
    // Convert the opaque `children` prop into an array so we can inject behavior
    // for automatically toggling the visibility of the second element.
    let children = React.Children.toArray(this.props.children);
    
    // If `this.state.contentVisible` is set to false, remove the 2nd element 
    // from the array so that it does not display.
    if (!this.state.contentVisible) {
      children.pop();
    }
    
    return (
      <div className="usa-accordion">
        {children}
      </div>
    )
  }
}
