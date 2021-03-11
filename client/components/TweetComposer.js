import React from "react";
import { createTweet } from "../web3/tweets";
import Button from "./Button";

export default class ComposeModal extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  post = async () => {
    const { text } = this.state;
    const { onClose } = this.props;

    await createTweet(text);

    alert("Your tweet was posted!");

    onClose();
  };

  render() {
    const { text } = this.state;

    const disabled = text === "";

    return (
      <div>
        <h3>Post a new tweet</h3>

        <textarea value={text} onChange={this.handleChange} maxLength={140} />

        <Button
          onClick={this.post}
          disabled={disabled}
          style={{
            marginTop: 12,
            float: "right",
          }}
        >
          Post tweet
        </Button>

        <style jsx>{`
          textarea {
            box-sizing: border-box;
            margin: 0px;
            margin-top: 10px;
            border: 2px solid rgba(107, 108, 139, 0.58);
            border-radius: 7px;
            width: 100%;
            padding: 11px;
            font-size: 16px;
          }
          textarea:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}
