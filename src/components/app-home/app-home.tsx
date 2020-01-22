import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  render() {
    return (
      <div class='app-home'>
        <action-link linkText="Edit shipping rates" />
        <h2>Your shipping rates:</h2>
        <shipping-rates name='Midwest' zone='USA - Midwest' rate='10' /> 
        <shipping-rates name='EU' zone='European Union' rate='6' /> 
      </div>
    );
  }
}
