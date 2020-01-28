const { Keystone } = require('@keystonejs/keystone');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

const keystone = new Keystone({
  name: 'My test keystone project',
  adapter: new KnexAdapter({ dropDatabase: true }),
});

keystone.createList('Test', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do', isRequired: true },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    // Setup the optional Admin UI
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
