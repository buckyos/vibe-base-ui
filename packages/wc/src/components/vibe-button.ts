import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('vibe-button')
export class VibeButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      transition: all 0.2s ease;
    }
    
    .primary {
      background-color: #007bff;
      color: white;
    }
    
    .primary:hover {
      background-color: #0056b3;
    }
    
    .secondary {
      background-color: #6c757d;
      color: white;
    }
    
    .secondary:hover {
      background-color: #545b62;
    }
    
    :host([disabled]) button {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `

  @property({ type: String })
  variant: 'primary' | 'secondary' = 'primary'

  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <button 
        class="${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `
  }

  private _handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('vibe-click', {
        bubbles: true,
        composed: true
      }))
    }
  }
}