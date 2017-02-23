import ReactDOM from "react-dom";

let index = 0;

/**
 * Provides utility functions for components in this library.
 *
 * All the functions on this class should be defined as static functions so this 
 * class acts more like a namespace than a class that you create instances of.
 *
 * See each method's documentation for more infomation about what this class 
 * provides.
 */
export default class Utilities
{
  
  /**
   * Returns a unique identifier for the supplied component instance.
   *
   * This method should only be called from `componentDidMount`.
   *
   * This method attempts to re-use an existing unique ID (e.g. `data-reactid`) 
   * as much as possible.  If no such unique ID exists, it will generate a 
   * UUID to use for the component instance.
   *
   * @param {React.Component} component The React component to compute a unique 
   *                                    identifier for.
   * @returns {String} A unique identifier for the supplied component.
   */
  static uniqueIdForComponent(component)
  {
    let node = ReactDOM.findDOMNode(component); // eslint-disable-line react/no-find-dom-node
    if (node) {
      if (node.hasAttribute("data-reactid")) {
        return "data-reactid-" + node.getAttribute("data-reactid");
      }
    }
    return `component-unique-id-${index++}`;
  }
  
}
