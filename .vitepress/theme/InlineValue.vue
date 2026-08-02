<template>
  <span>{{ displayValue }}</span>
</template>

<script>
// Общие значения, подставляемые в текст страниц: <InlineValue name="version" />
// Лежат в области модуля, а не в data(): валидатор пропа выполняется вне
// экземпляра компонента, поэтому `this.values` там был undefined и вместо
// проверки бросал TypeError при рендере в dev-режиме.
const VALUES = {
  version: '1.21.11',
  currentYear: new Date().getFullYear()
}

export default {
  name: 'InlineValue',
  props: {
    name: {
      type: String,
      required: true,
      validator: value => Object.prototype.hasOwnProperty.call(VALUES, value)
    }
  },
  computed: {
    displayValue() {
      return VALUES[this.name] ?? ''
    }
  }
}
</script>
