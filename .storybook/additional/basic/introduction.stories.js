import { storiesOf } from '@storybook/vue'

storiesOf('Basic|General', module)
  .addParameters({ options: { showPanel: false } })
  .add('Introduction', () => ({
    template: `
      <div class="p-50px">
        Hello World
      </div>
    `
  }))
