import './ProductsComponent.css';
import React, { Component } from 'react';
import GalleryComponent from "../gallery/GalleryComponent";

class ProductComponent extends Component {
    render() {
        return (
            <div id="products-component">
                <div className="container">
                    <div className="col-xs-12">
                        <div className="container">
                            <div className="col-xs-12">
                                <h1 className="padding-top">
                                    <strong>Nossa linha de produtos</strong>
                                </h1>
                                <h3>Nosso trabalho é trazer a <strong>vida da Natureza para você!</strong></h3>
                                <div id="gallery-wrapper">
                                    <GalleryComponent />
                                </div>
                                <div className="clearfix" />
                                <div className="text-center">
                                    <br />
                                    <button className="btn btn-lg btn-products">Entre em Contato</button>
                                    <div className="clearfix" />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lightbox">

                </div>
            </div>
        );
    }
}

export default ProductComponent;
