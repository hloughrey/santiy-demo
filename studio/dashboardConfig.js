export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f800dbb6fb09a30160e8f5e',
                  title: 'Sanity Studio',
                  name: 'santiy-demo-studio',
                  apiId: '0ad3b8ef-74b6-4034-bd9c-04cf103e5bb2'
                },
                {
                  buildHookId: '5f800dbb28519233f0a4f799',
                  title: 'Landing pages Website',
                  name: 'santiy-demo',
                  apiId: '4e059193-ac5c-4edf-a015-bf116f950190'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hloughrey/santiy-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://santiy-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
