# Nuxt-Tailwind-Storybook Boilerplate

Boilerplate with preconfigured Nuxt, Storybook v6 Beta, Tailwind, Cypress and Jest.

**More installed plugins**
- [Nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/) (domaindriven)
- [Nuxt-Webfontloader](https://github.com/Developmint/nuxt-webfontloader)
- [Nuxt-Axios](https://axios.nuxtjs.org/)
- [Nuxt-TailwindCSS](https://github.com/nuxt-community/tailwindcss-module)
- [Nuxt-Content](https://content.nuxtjs.org/)
- [YamlFul](https://github.com/galvez/yamlful) (not activated)
- [Portals-Vue](https://portal-vue.linusb.org/) (not activated)
- [Vue-Formulate](https://vueformulate.com/) (not activated)
- [Vuex-PersistedStore](https://github.com/robinvdvleuten/vuex-persistedstate#readme) (not activated)
- [Nuxt-Composition-API](https://composition-api.now.sh/) (not activated)

## Prerequisites

- Make sure to have `node 12.0+` and `npm 6.0+` installed
- Install [Ferdi](https://github.com/martinherweg/ferdi) - as global NPM module

## Installation

```bash
md [FOLDERNAME] && cd $_
npx degit https://github.com/leankoala-gmbh/nuxt-tailwind-storybook && npm i
```

### Minor adjustments
Please adjust the project name, author and version number in the `package.json` and in the `ferdirc.js`.

## Build Setup

``` bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Ferdi
To make creating components easier, you can use Ferdi.

```bash
ferdi notice/TestComponent
```

Ferdi will then place four files in the component folder under `components/notice/TestComponent/`.

- `TestComponent.vue` the Vue component
- `TestComponent.stories.mdx` the storybook files in MDX format
- `TestComponent.test.js` Test file for Cypress (E2E)
- `TestComponent.spec.js` Test file for Jest (Unit)

If you need a ready-made store module, you can also have it created with Ferdi. In this case the storefile will be placed in the `store` folder.

```bash
ferdi myStoreModul --store --flat
```

A similar syntax can also be used to implement a unit test file into a component, for example. In the following case a Story File is implemented in the `Test Component/` folder.

```bash
ferdi notice/TestComponent --docs
```

**Ferdi Boilerplates**
- `--vue`: Vue Component
- `--docs`: Story File in MDX format
- `--stories`: Story File in StoryOf format
- `--test`: Boilerplate for unit test (Jest)
- `--e2e`: Boilerplate for E2E Test (Cypress)
- `--store`: Starter file for a Store Module

## Storybook
Storybook is in the current V6 beta, prepared for stories in [MDX format](https://github.com/storybookjs/storybook/tree/next/addons/docs). The new format is recommended to give the author more freedom in the design. Props, events and slots are automatically read from the components and subcomponents.

### Storybook Commands
Starts Storybook in Watch Mode.
```bash
npm run storybook
```

To generate the storybook documentation as a static file:
```bash
npm run storybookBuild
```

To make Storybook reflect the style of the components, the CSS file must be generated. This is not shortened by PurgeCSS.
```bash
npm run storybookStyle
```

### i18n Support
This boilerplate has been provided with i18n support, but if you don't need multilanguage support, you should remove the decorators from the `./storybook/preview.js` File.

```js
addDecorator(() => ({
  i18n,
  template: "<story/>"
}))
```

### Control Props
It is possible to control the props via the story. To do this you have to extend the storyfile with the `argTypes` object.

```
<Meta
  ...
  argTypes={{
    path: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
  }}
/>
```

The ArgTypes must then be passed on to the component in the storyfile.

```
export const MyElement = (args, { argTypes }) => ({
  props: Object.keys(args),
  components: { Element },
  template: `
    <Element :path="path" />
  `
})
```

## Testing Stories with Cypress
Since stories can also be displayed as separate pages, this is a smart way to test this story with Cypress. Since the components within the story are already mocked for display, they can be easily tested with an E2E test. 

To start Storybook and Cypress you can use the following command:
```bash
npm run storyCypress
```

## API Abstraction
Usually the API calls are noted directly in the components. If endpoints change during the course of the project, it becomes more time-consuming to adapt them, especially for larger applications. It is easier if you switch an abstraction layer in between. 

The abstraction layer is created with the plugin [YamlFul](https://github.com/galvez/yamlful). Via the yaml file `api.yml`, Project Root, the individual routes are conveniently noted.

If the plugin is not enough, the Nuxt plugin can also use 'repository.js' in the plugin folder. The spelling is a bit more complex, more [informations](https://blog.lichter.io/posts/nuxt-api-call-organization-and-decoupling/)


## Nuxt Composition API (Experimental)
Those who already want to benefit from the advantages of the composition API can add the module within the `buildModules`.
[Further Information](https://composition-api.now.sh/)

## Addition for Storm IDE

### Eslint Autofix with Jetbrain IDEs 
In the newer versions of the IDEs, ESlint errors can be fixed automatically when saving. To do so, open the settings and then go to Languages & Frameworks > Javascript > Code Quality Tools > Eslint. The Eslint Config should be activated under with Automatic. After that you only have to activate the checkbox `Run eslint --fix on save`.

### Webpack Aliase with Jetbrain IDEs 
You open the IDE's setting, under Languages & Frameworks > Javascript > Webpack. There you select under `Webpack Configuration File` the `webpack.config.js` in the project root. After that the IDE will be able to trace the aliases and use the aliases in the import calls during auto import.

### Debugging Nuxt with IDE
https://medium.com/@fernalvarez/nuxt-js-debugging-for-webstorm-9b4ef5415a5
