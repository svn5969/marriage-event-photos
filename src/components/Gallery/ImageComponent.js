import React from "react";
import "./imageCompo.css";
import emni from "../../images/white one.png"
export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img
          className="small"
          src={emni}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            {/* <img
              className="image"
              src="/Anj.png"
              onClick={this.handleShowDialog}
              alt="no image"
            /> */}
          </dialog>
        )}
      </div>
    );
  }
}
