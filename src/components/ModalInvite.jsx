import React from "react";
import ReactDom from "react-dom"

import {ModalContent} from "./ModalContent";

export class ModalWindow extends React.Component {
    root = document.createElement("div");
    body = document.querySelector("body");

    componentDidMount() {
        this.body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const {data, handleCloseModal} = this.props;
        return ReactDom.createPortal(<ModalContent data={data} handleCloseModal={handleCloseModal}/>, this.root)
    }
}