# Vue Week Landing Page
This project is to create *Vue Week* landing page.

This page would use same structure than https://reactweek.org/ and https://angularweek.org/ in order to preserve the structure.

# Project Conventions

## Component Conventions
In order to write better components, collaborators would:
  * Should create a folder for every component, this folder mut to contains necessary files of one component.

## CSS Naming Conventions

In order to write better CSS code, collaborators would:
  * Should to use [BEM](http://getbem.com/) naming convention in all components.
  * Should to write a SCSS file with name of component and import it inside Vue component.

## Javascript Conventions

In order to write better Javascript code, collaborators would:
  * Should to use single quoted strings instead of double quoted strings.
  * Should to use Template strings intead of escape strings or concatenate variables.

# Code Example

```html
// SuperComponent.vue

<template>
  <div class="SuperComponent">
    <span class="SuperComponent__title">Hello World</span>
  </div>
</template>

<script src="./SuperComponent.js"></script>
<style lang="scss" src="./SuperComponent.scss"></style>

```

```javascript
// SuperComponent.js
export default {
  name: 'SuperComponent',
  props: {
    msg: String
  },
  mounted(){
    /* Use ES6+ method structure */
  },
  methods: {
    sample() {
      // again...
    }
  }
}
```

```scss
// SuperComponent.scss

.SuperComponent {

    &__title {
      font-size: 16px;
      font-weight: 600;
    }
}

```



