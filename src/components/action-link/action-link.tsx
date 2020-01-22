import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'action-link',
  styleUrl: '',
  shadow: true
})
export class ActionLink {
  @Prop() linkText: string;

  render() {
    return (
      <div>
        <stencil-route-link url='/shipping'>
          <a>{ this.linkText }</a>
        </stencil-route-link>
      </div>
    );
  }
}
