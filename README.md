# WebBling

The goal of this repo is to explore some approaches
to managing styles for web components, while maintaining a minimum of bloat.

## Concerns

The following list will be the criteria by which I evaluate the viability and value of
each approach:

- The effect of the web component styles bleeding onto the rest of the web page - Violates 
  the goal of creating a self-contained web component.
- Style duplication per instance of the same web component - Would quickly bloat a web page.
- Shared style duplication per web component. This falls into two categories:
  * Copy and pasted styles from one web component to another - Violates the DRY principle
  * Same mixin is used in separate web components, resulting in the compiled CSS containing duplicate styles.
