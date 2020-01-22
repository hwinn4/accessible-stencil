import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'shipping-form',
  styleUrl: '',
  shadow: true
})
export class ShippingForm {
  @Prop() linkText: string;
  @State() zoneName: string;
  @State() shippingDestination: string;
  @State() shippingRate: string;
  @State() showSaveConfirmation: boolean = false;

  handleZoneChange(e) {
    this.zoneName = e.target.value;
  }


  handleDestinationChange(e) {
    this.shippingDestination = e.target.value;
  }

  handleRateChange(e) {
    this.shippingRate = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.showSaveConfirmation = true;
  }

  render() {
    if (!this.showSaveConfirmation) {
      return (
        <div>
          <h2>Create new shipping zone</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              Shipping Zone Name:
              <input type="text" value={ this.zoneName } onInput={(event) => this.handleZoneChange(event)} />
            </label>

            <div>
              <label>Select a shipping destination:
                <select onInput={(event) => this.handleDestinationChange(event)}>
                  <option value="">Select a shipping region</option>
                  <option value="USA-West">USA -- West</option>
                  <option value="USA-Atlantic">USA -- Atlantic</option>
                </select>
              </label>
            </div>

            <label>
              Rate:
              <input type="text" value={ this.shippingRate } onInput={(event) => this.handleRateChange(event)}/>
            </label>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
    } else {
      return ( 
        <div>
          <h2>You saved a shipping zone!</h2>
          <shipping-rates name={ this.zoneName } zone={ this.shippingDestination} rate={ this.shippingRate } /> 
        </div>
      );
    }

  }
}

