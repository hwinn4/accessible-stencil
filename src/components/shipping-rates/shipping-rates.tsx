import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'shipping-rates',
  styleUrl: '',
  shadow: true
})
export class ShippingRates {
  @Prop() name: string;
  @Prop() zone: string;
  @Prop() rate: string;

  render() {
    return (
      <div>
        <h3>{ this.name } </h3>
        <p>Region: { this.zone }</p>
        <p>Rate: ${ this.rate }</p>
      </div>
    );
  }
}

