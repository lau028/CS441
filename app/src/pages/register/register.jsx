import React from "react";
import "./css/main.css";
import "./css/register.css";



class Image extends React.Component {
  render() {
    return (
<>
  {/* npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="register.css" />
  <h2> Equal Columns</h2>
  <div className="row">
    <div className="column">
      <h2>Column 1</h2>
      <p>Some text..</p>
      <table id="calcu">
        <tbody>
          <tr>
            <td colSpan={3}>
              <input type="text" disabled="" />
            </td>
            <td>
              <button type="button">Click Me!</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-blue">1</button>{" "}
            </td>
            <td>
              <button className="btn btn-blue">2</button>{" "}
            </td>
            <td>
              <button className="btn btn-blue">3</button>{" "}
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-blue">4</button>{" "}
            </td>
            <td>
              <button className="btn btn-blue">5</button>{" "}
            </td>
            <td>
              <button className="btn btn-blue">6</button>{" "}
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-blue">7</button>{" "}
            </td>
            <td>
              <button className="btn btn-blue">8</button>{" "}
            </td>
            <td>
              <button className="btn btn-blue">9</button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="column">
      <h2>Column 2</h2>
      <p>Some text..</p>
    </div>
  </div>
</>


    );
  }
}

export default Image;