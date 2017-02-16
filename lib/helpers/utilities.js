import ReactDOM from "react-dom";

let index = 0;

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
   */
  static uniqueIdForComponent(component)
  {
    let node = ReactDOM.findDOMNode(component);
    if (node) {
      if (node.hasAttribute("data-reactid")) {
        return "data-reactid-" + node.getAttribute("data-reactid");
      }
    }
    return `component-unique-id-${index++}`;
  }
}
